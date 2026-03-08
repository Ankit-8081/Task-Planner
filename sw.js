const CACHE_NAME = 'mission-control-v1.2.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js'
];

// Install & Cache
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate & Cleanup old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    })
  );
  return self.clients.claim();
});

// Fetch Strategy: Network First for API, Cache First for Assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only cache GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip Firebase Realtime Database calls (Firebase handles its own long-polling/websockets)
  if (url.hostname.includes('firebasedatabase.app') || 
      url.hostname.includes('googleapis.com') && url.pathname.includes('/identitytoolkit')) {
    return;
  }

  // Network First for Firebase Auth & API calls
  if (url.hostname.includes('firebase') || 
      url.hostname.includes('googleapis.com')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone and cache the response
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, resClone));
          return response;
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(request);
        })
    );
    return;
  }

  // Cache First for static assets (fonts, CSS, JS, images)
  if (url.pathname.match(/\.(css|js|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|webp|ico)$/)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          // Return cached and update in background
          fetch(request).then((response) => {
            caches.open(CACHE_NAME).then((cache) => cache.put(request, response));
          }).catch(() => {});
          return cached;
        }
        
        // Not in cache, fetch and cache
        return fetch(request).then((response) => {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, resClone));
          return response;
        });
      })
    );
    return;
  }

  // Network First for HTML and everything else
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Update cache in background
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, resClone));
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(request).then((cached) => {
          if (cached) {
            return cached;
          }
          
          // If requesting HTML and nothing cached, return offline page
          if (request.headers.get('accept').includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});

// =====================================================================
// NOTIFICATION HANDLING
// =====================================================================

// Show notification from the service worker
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(event.data.urls);
      })
    );
  }
  
  // Handle notification requests from the app
  if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
    const { title, body, tag } = event.data;
    
    event.waitUntil(
      self.registration.showNotification(title, {
        body: body,
        icon: '/icon-192.png',
        badge: '/icon-192.png',
        tag: tag,
        requireInteraction: false,
        vibrate: [200, 100, 200],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: tag
        },
        actions: [
          {
            action: 'view',
            title: 'View Task'
          },
          {
            action: 'dismiss',
            title: 'Dismiss'
          }
        ]
      })
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'view' || !event.action) {
    // Open or focus the app
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientList) => {
          // Check if there's already a window open
          for (let i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            if (client.url.includes(self.registration.scope) && 'focus' in client) {
              return client.focus();
            }
          }
          // If no window is open, open a new one with correct URL
          if (clients.openWindow) {
            // Use the full scope path for GitHub Pages
            return clients.openWindow(self.registration.scope);
          }
        })
        .then((client) => {
          // Send message to the client
          if (client) {
            client.postMessage({
              type: 'NOTIFICATION_CLICKED',
              tag: event.notification.tag
            });
          }
        })
    );
  }
});

// Background Sync (for future enhancement)
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  if (event.tag === 'sync-tasks') {
    event.waitUntil(
      // The app's IndexedDB sync queue will handle this
      self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'SYNC_REQUESTED' });
        });
      })
    );
  }
});

// Handle push notifications (if using Firebase Cloud Messaging in the future)
self.addEventListener('push', (event) => {
  console.log('[SW] Push received:', event);
  
  if (event.data) {
    const data = event.data.json();
    const title = data.title || 'Mission Control';
    const options = {
      body: data.body || 'You have a new notification',
      icon: data.icon || '/icon-192.png',
      badge: '/icon-192.png',
      vibrate: [200, 100, 200],
      data: data.data || {},
      tag: data.tag || 'notification-' + Date.now()
    };
    
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  }
});
