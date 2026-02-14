# 🚀 Mission Control Pro
### *The Ultimate Cloud-Synced Productivity Command Center with Push Notifications*

**Mission Control Pro** is a next-generation task management application engineered with a "Mission Command" aesthetic. Built on a robust offline-first architecture with Firebase cloud synchronization and **real-time push notifications**, it delivers seamless productivity wrapped in a fluid, animated UI that transforms task management into an immersive experience.

**Live Deployment** - [aquaimmortal7.github.io/Task-Planner/](https://aquaimmortal7.github.io/Task-Planner/)

---

## 🛠️ Tech Stack & Badges

![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Cloud Functions](https://img.shields.io/badge/Cloud_Functions-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Web Push](https://img.shields.io/badge/Web_Push-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Service Worker](https://img.shields.io/badge/Service_Worker-000000?style=for-the-badge&logo=pwa&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

---

## ✨ Key Features

### 🌐 Offline-First Architecture
* **Local-First Performance**: All operations write to IndexedDB instantly for zero-latency interaction
* **Background Sync**: Automatic cloud synchronization when online, with smart queue management for offline changes
* **Conflict Resolution**: Intelligent merge strategy that preserves both local and server state
* **Network Status Indicator**: Real-time connection status displayed in the analytics header
* **Sync Queue Management**: Operations queue locally when offline, auto-process when reconnected
* **IndexedDB Storage**: Complete task state persistence in browser database

### 🔔 Cloud-Powered Push Notifications
* **Background Notifications**: Receive task reminders even when app is closed
* **Intelligent Scheduling**: 
  - 10-minute advance warning for upcoming tasks
  - 1-hour advance notification for better planning
* **Firebase Cloud Functions**: Serverless backend checks tasks every 5 minutes
* **Cross-Device Support**: Notifications on desktop, mobile PWA, and tablets
* **Smart Timing**: Timezone-aware (Asia/Kolkata) with 5-15 min notification windows
* **VAPID Authentication**: Secure web push protocol implementation
* **Auto-Subscribe**: Seamless push subscription on notification permission grant

### 📊 Weekly Visual Dashboard
* **Week View Toggle**: Switch between Today View and Week View with one click
* **Circular Progress Indicators**: Beautiful SVG-based completion circles for each day
* **7-Day Overview**: Sunday to Saturday cards showing daily task completion
* **Interactive Task Lists**: View and complete tasks directly from week cards
* **Smooth Animations**: 
  - Staggered card animations (100ms delay cascade)
  - Progress circles fill from 0% to completion percentage
  - Fade-in effects for stats and task lists
* **Real-Time Updates**: Progress updates smoothly without page reload
* **Category Filtering**: Works seamlessly with category filters
* **Date Format**: DD/MM/YYYY display for international users

### 🎯 Smart Task Management
* **Time-Based Scheduling**: Add specific times to tasks (HH:MM format)
* **Overdue Detection**: Tasks with passed times automatically move to "Overdue" column
* **Three-Column Kanban**: 
  - 🔴 **Overdue**: Past dates + today's tasks with passed times
  - ⏳ **Current**: Today's tasks (all statuses)
  - 📅 **Incoming**: Future tasks (incomplete only)
* **Auto-Archive System**: Completed tasks hide from main view (shown in History)
* **Intelligent Revert**: Unticking a completed task instantly reverts it to active
* **Historical Calendar**: 📅 History button reveals all completed tasks grouped by date

### 💧 Liquid Analytics Engine
* **Weekly Fuel Levels**: Custom-built bar graph with "Liquid Grow" animations
* **Dual-Layer Visualization**: 
  - Transparent bars show planned tasks per day
  - Gradient-filled bars display completed tasks
* **Real-Time Accuracy**: Stats calculated from ALL tasks regardless of current view filter
* **Circular Progress Meter**: Dynamic SVG-based completion percentage with smooth transitions
* **Hidden in Week View**: Clean interface showing only relevant data per view

### 🌓 Dual-Phase Interface
* **Dynamic Theme Toggle**: 
  - Light mode button: 🌙 Dark (click to enable dark mode)
  - Dark mode button: ☀️ Light (click to enable light mode)
* **Stealth Mode (Dark)**: Deep-space aesthetic minimizing eye strain
* **Command Mode (Light)**: High-clarity daylight interface with glassmorphism
* **Persistent Theme**: Auto-saves to localStorage across sessions
* **Smooth Transitions**: 0.3s animations on all color changes

### ☁️ Real-Time Cloud Sync
* **Multi-Device Synchronization**: Instant updates across all devices
* **Firebase Realtime Database**: Asia-Southeast regional cluster
* **Smart Conflict Resolution**: Handles simultaneous edits gracefully
* **Data Isolation**: Private user workspaces with strict security rules

### 🔒 Secure Authentication
* **Firebase Auth Integration**: Email/password authentication
* **Password Visibility Toggle**: Built-in show/hide for secure entry
* **Persistent Sessions**: Auto-login after first authentication
* **User-Specific Notifications**: Push subscriptions tied to individual accounts

### 🏷️ Advanced Categorization
* **Four Mission Types**: Work, Home, Personal, and Urgent
* **Visual Color Coding**: 
  - Work: `#0984e3` (Blue)
  - Home: `#6c5ce7` (Purple)
  - Personal: `#00b894` (Teal)
  - Urgent: `#d63031` (Red)
* **Category Filtering**: Filter tasks across all views (Today, Week, History)
* **View-Specific UI**: Categories and input hidden in Week View for clean analytics

### 📱 Progressive Web App (PWA)
* **Installable**: Add to home screen on iOS and Android
* **Full-Screen Experience**: Runs without browser chrome
* **Service Worker**: Handles caching and push notifications
* **Offline Capable**: Core functionality without internet
* **Background Sync**: Push notifications work even when app is closed

---

## 🏗️ Architecture & Data Flow

### Offline-First Strategy
```
User Action → IndexedDB (Instant) → UI Update → Cloud Sync (Background)
                    ↓
              Sync Queue (if offline)
                    ↓
              Auto-Process (when online)
```

### State Management Layers
1. **Local Truth**: IndexedDB stores complete task state
2. **Cloud Backup**: Firebase mirrors local state for multi-device sync
3. **Memory Cache**: In-app `allTasks` array for instant rendering
4. **Conflict Resolution**: Server state merges with pending local changes

### Push Notification System
```
Firebase Cloud Functions (Scheduled - Every 5 min)
         ↓
    Check All Users' Tasks
         ↓
    Find Tasks Due in 10-15 min or 55-65 min
         ↓
    Fetch User Push Subscriptions
         ↓
    Send Web Push Notification
         ↓
Service Worker Receives Push
         ↓
Display System Notification (Even If App Closed)
```

### Notification Flow
```
User Enables Notifications
         ↓
Request Permission (Browser API)
         ↓
Create Push Subscription (Service Worker + VAPID Key)
         ↓
Save Subscription to Firebase Database
         ↓
Cloud Function Retrieves Subscription Every 5 min
         ↓
Send Notification at Scheduled Times
```

### Weekly Dashboard Rendering
```
User Clicks "Week View"
         ↓
Calculate Current Week (Sunday - Saturday)
         ↓
For Each Day:
  - Filter tasks by date
  - Calculate completion percentage
  - Render circular progress (SVG)
  - Display task list with checkboxes
         ↓
Staggered Animations (100ms cascade)
         ↓
Interactive Cards with Live Updates
```

---

## 📐 The Logic Engine

### 1. Time-Based Task Sorting
Tasks automatically categorize based on date and time:

$$
\text{Status} = \begin{cases} 
\text{Overdue} & \text{if } (date < today) \lor (date = today \land time < now) \\
\text{Current} & \text{if } date = today \\
\text{Incoming} & \text{if } date > today
\end{cases}
$$

### 2. Notification Timing Algorithm
Cloud Function calculates time until task:

$$
t_{until} = t_{task} - t_{now}
$$

$$
\text{Send Notification} = \begin{cases} 
\text{1-hour alert} & \text{if } 55min \leq t_{until} \leq 65min \\
\text{10-min alert} & \text{if } 5min \leq t_{until} \leq 15min
\end{cases}
$$

Wide windows (±5 min) ensure notifications aren't missed between 5-minute function checks.

### 3. Weekly Progress Calculation
For each day in the week:

$$
P_{day} = \left( \frac{n_{completed}}{n_{total}} \right) \times 100
$$

Displayed as:
- Circular SVG with `stroke-dashoffset` animation
- Stats showing `n_{total}` tasks and `n_{completed}` done

### 4. Timezone Normalization
All times converted to Asia/Kolkata (UTC+5:30):

```javascript
const indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
```

Ensures consistent behavior regardless of server location.

---

## 🛡️ Firebase Security Rules

**Firebase Console > Realtime Database > Rules:**

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid",
        "tasks": {
          ".read": "$uid === auth.uid",
          ".write": "$uid === auth.uid"
        },
        "pushSubscriptions": {
          ".read": "$uid === auth.uid",
          ".write": "$uid === auth.uid"
        }
      }
    }
  }
}
```

---

## 🚀 Deployment Guide

### 1. Firebase Project Setup

#### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project: `your-project-name`
3. Enable **Realtime Database** (Asia-Southeast region)
4. Enable **Authentication** → Email/Password
5. Upgrade to **Blaze Plan** (pay-as-you-go, free tier sufficient)

#### Configure Firebase in `index.html`
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.asia-southeast1.firebasedatabase.app",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID"
};
```

### 2. Cloud Functions Setup (for Push Notifications)

#### Install Firebase CLI
```bash
npm install -g firebase-tools
firebase login
```

#### Initialize Cloud Functions
```bash
cd your-project-folder
firebase init functions
```

Select:
- Use existing project
- JavaScript
- Install dependencies: Yes

#### Create `functions/index.js`
```javascript
const {onSchedule} = require('firebase-functions/v2/scheduler');
const admin = require('firebase-admin');
const webpush = require('web-push');

admin.initializeApp();

// Generate VAPID keys: npx web-push generate-vapid-keys
webpush.setVapidDetails(
  'mailto:your-email@example.com',
  'YOUR_PUBLIC_VAPID_KEY',
  'YOUR_PRIVATE_VAPID_KEY'
);

exports.checkAndSendNotifications = onSchedule({
  schedule: '*/5 * * * *',
  timeZone: 'Asia/Kolkata'
}, async (event) => {
  // ... (full code in repository)
});
```

#### Install Dependencies
```bash
cd functions
npm install web-push
cd ..
```

#### Deploy Cloud Functions
```bash
firebase deploy --only functions
```

#### Generate VAPID Keys
```bash
npx web-push generate-vapid-keys
```

Update `index.html` with your **public VAPID key**:
```javascript
const publicVapidKey = 'YOUR_PUBLIC_VAPID_KEY';
```

### 3. GitHub Pages Hosting
1. Push `index.html`, `sw.js`, `manifest.json`, icons to GitHub repo
2. **Settings** → **Pages** → Source: `main` branch
3. Site deploys to: `https://username.github.io/repo-name/`

### 4. PWA Installation

#### iOS (Safari)
1. Open site in Safari
2. Tap **Share** (⬆️) → **Add to Home Screen**

#### Android (Chrome)
1. Open site in Chrome
2. Tap menu (⋮) → **Install App**

---

## 📊 Data Structure

### Task Object Schema
```javascript
{
  id: "1738764523000",           // Timestamp-based unique ID
  name: "Deploy Mission Alpha",  // Task title
  cat: "work",                   // Category: work|home|personal|urgent
  date: "2025-02-14",           // Due date (YYYY-MM-DD)
  time: "14:30",                 // Optional time (HH:MM)
  completed: false,              // Completion status
  completedAt: null              // ISO timestamp when completed
}
```

### Push Subscription Schema
```javascript
{
  endpoint: "https://fcm.googleapis.com/fcm/send/...",
  expirationTime: null,
  keys: {
    p256dh: "base64-encoded-public-key",
    auth: "base64-encoded-auth-secret"
  }
}
```

Stored at: `users/{userId}/pushSubscriptions/{subscriptionId}`

### IndexedDB Structure
```
Database: MissionControlDB
  Store: tasks
    Key: task.id
    Value: task object
  Store: syncQueue
    Key: auto-increment
    Value: { type, taskId, data/updates }
```

---

## 🎨 UI/UX Highlights

### View-Specific Behavior
| Element | Today View | Week View |
|---------|-----------|-----------|
| Bar Graph | ✅ Visible | ❌ Hidden |
| Category Filters | ✅ Visible | ❌ Hidden |
| Add Task Input | ✅ Visible | ❌ Hidden |
| 7-Day Cards | ❌ Hidden | ✅ Visible |
| Kanban Board | ✅ Visible | ❌ Hidden |

### Animations & Transitions
- **Week Card Cascade**: 100ms staggered delays
- **Progress Circles**: 1.2s cubic-bezier fill animation
- **Task Toggle**: Smooth opacity/strikethrough (no reload)
- **Theme Switch**: 0.3s color transitions
- **View Toggle**: Instant switch with fade effects

### Responsive Design
- **Desktop**: Full-width week cards (3-4 per row)
- **Tablet**: 2 cards per row
- **Mobile**: Single column, scrollable
- **Breakpoint**: 768px grid to flex transformation

---

## 🔧 Advanced Features

### Sync Queue Management
```javascript
// Queued operation structure
{
  type: 'set' | 'update' | 'remove',
  taskId: string,
  data?: object,      // For 'set'
  updates?: object    // For 'update'
}
```

### Network Detection
- **Online**: Green header, immediate Firebase sync
- **Offline**: Orange header with "Sync Pending..." message
- **Events**: Listens to Firebase `.info/connected` + browser online/offline

### Smart Notification Logic
```javascript
// Cloud Function runs every 5 minutes
// Checks: Is task 5-15 min away OR 55-65 min away?
const timeUntilTask = taskDateTime - now;

if (timeUntilTask > 5min && timeUntilTask <= 15min) {
  send("⚡ Task Due in 10 Minutes");
}
if (timeUntilTask > 55min && timeUntilTask <= 65min) {
  send("⏰ Task Due in 1 Hour");
}
```

### Service Worker Push Handler
```javascript
self.addEventListener('push', (event) => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      vibrate: [200, 100, 200]
    })
  );
});
```

### Auto-Subscribe on Login
```javascript
onAuthStateChanged(auth, (user) => {
  if (user && Notification.permission === 'granted') {
    subscribeToPushNotifications();  // Auto-create subscription
  }
});
```

---

## 👨‍💻 About the Developer

| Feature | Details |
| :--- | :--- |
| **Name** | Ankit Raj |
| **Education** | 1st Year B.Tech CSE at **Galgotias University** |
| **Core Expertise** | Backend Development, Cloud Functions, Real-Time Systems |
| **YouTube** | [AQUAIMMORTAL Official Channel](https://youtube.com/@AQUAIMMORTAL) |
| **Specialization** | Firebase Cloud Functions, PWA Architecture, Push Notifications |

### 📜 Recent Achievements
* ✅ Implemented serverless push notification system with Firebase Cloud Functions
* ✅ Built weekly visual dashboard with circular progress indicators
* ✅ Architected time-based task categorization system
* ✅ Deployed production-grade PWA with Service Worker integration

---

## 📝 Version History

### v2.0.0 - Push Notifications & Weekly Dashboard (Feb 2026)
**Major Features:**
- ✅ **Firebase Cloud Functions**: Serverless backend for push notifications
- ✅ **Web Push API**: VAPID-authenticated notifications
- ✅ **Weekly Dashboard**: 7-day overview with circular progress
- ✅ **Time-Based Sorting**: Tasks auto-categorize by date + time
- ✅ **Auto-Subscribe**: Seamless push subscription on permission grant
- ✅ **View Toggle System**: Clean separation of Today/Week interfaces

**Technical Improvements:**
- ⚡ Cloud Functions check tasks every 5 minutes
- ⚡ Smart notification windows (5-15 min, 55-65 min)
- ⚡ Timezone-aware calculations (Asia/Kolkata)
- ⚡ Smooth progress updates without full re-render
- ⚡ Service Worker handles background push events

### v1.0.0 - Core Task Management (Jan 2025)
- Basic task CRUD operations
- Firebase Realtime Database sync
- Category filtering
- Dark/Light theme toggle
- Weekly bar graph analytics

---

## 💰 Cost Analysis

### Firebase Usage (FREE Tier)
| Service | Usage | Free Tier | Status |
|---------|-------|-----------|--------|
| Cloud Functions | ~8,640 calls/month | 125,000/month | ✅ FREE |
| Realtime Database | Read/Write ops | 100GB/month | ✅ FREE |
| Authentication | User sign-ins | Unlimited | ✅ FREE |
| Hosting (GitHub Pages) | Static files | Unlimited | ✅ FREE |

**Estimated Monthly Cost**: **$0.00** (well within free tier)

---

## 🐛 Known Issues & Roadmap

### Current Limitations
- iOS PWA has limited background notification support (Apple restriction)
- Push notifications require installed PWA (not browser tabs) on mobile
- Service Worker requires HTTPS (GitHub Pages provides this)

### Future Enhancements
- [ ] Recurring task support (daily/weekly/monthly)
- [ ] Task priority levels (high/medium/low)
- [ ] Drag-and-drop task reordering
- [ ] Export to CSV/JSON
- [ ] Shared workspaces (collaborative tasks)
- [ ] Task attachments and notes
- [ ] Custom notification sound selection
- [ ] Snooze notification feature
- [ ] Task templates and quick-add

---

## 📞 Contact & Support

**Ankit Raj** - [@AQUAIMMORTAL](https://youtube.com/@AQUAIMMORTAL)

**Project Link**: [https://github.com/aquaimmortal7/Task-Planner](https://github.com/aquaimmortal7/Task-Planner)

**Live Demo**: [https://aquaimmortal7.github.io/Task-Planner/](https://aquaimmortal7.github.io/Task-Planner/)

### Report Issues
Found a bug? [Open an issue](https://github.com/aquaimmortal7/Task-Planner/issues)

### Request Features
Have an idea? [Start a discussion](https://github.com/aquaimmortal7/Task-Planner/discussions)

---

## ⭐️ Show Your Support

Give a ⭐️ if this project helped you!

### Share With
- Developers building notification systems
- Students learning Firebase Cloud Functions
- Teams needing offline-first PWA examples
- Anyone interested in real-time push notifications

---

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### How to Contribute
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

<div align="center">

**Built with 💚 by Ankit Raj**

*"Transform chaos into clarity, one mission at a time."*

**Powered by Firebase Cloud Functions • Web Push API • Service Workers**

</div>
