# 🚀 Mission Control Pro
### *The Ultimate Cloud-Synced Productivity Command Center with Push Notifications*

**Mission Control Pro** is a next-generation task management application engineered with a "Mission Command" aesthetic. Built on a robust offline-first architecture with Firebase cloud synchronization and **real-time push notifications**, it delivers seamless productivity wrapped in a fluid, animated UI that transforms task management into an immersive experience.

**Live Deployment** → [aquaimmortal7.github.io/Task-Planner/](https://aquaimmortal7.github.io/Task-Planner/)

---

## 🛠️ Tech Stack

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

### 👤 Profile & Settings Panel
* **Slide-In Profile Panel**: Full-featured settings panel that slides in from the right with a smooth animation
* **Avatar System**: Auto-generated avatar from username initial shown in the top nav and panel header
* **Change Password**: Secure inline password change with re-authentication before applying
* **Notification Controls**:
  - Toggle daily morning summary on/off
  - Set your preferred daily summary time (defaults to 7:00 AM)
  - Toggle 1-hour reminder on/off
  - Toggle 10-minute reminder on/off
* **App Preferences**:
  - Dark/Light mode toggle (synced with existing theme system)
  - Week start day — Sunday or Monday (live-restructures bar graph instantly)
  - Default task time — pre-fills time field when adding new tasks
* **Account Actions**: Logout with confirmation, delete account with password verification
* **Cloud-Persisted Settings**: All preferences saved to `users/{userId}/settings` in Firebase — sync across devices

### 🌅 Smart Daily Morning Summary
* **7 AM Briefing**: Single push notification every morning listing all of today's tasks
* **Replaces Midnight Notification**: No more useless 12 AM alerts — get your summary when you actually start your day
* **User-Configurable Time**: Set your own preferred summary time from the Profile panel
* **Smart Body**: Shows up to 5 tasks with times, then "…and N more" if there are additional tasks
* **Dual Delivery**: Fires from the Firebase Cloud Function (when app is closed) and a `setTimeout` scheduler (when app is open)
* **Toggleable**: Can be fully disabled from Profile settings

### 🌐 Offline-First Architecture
* **Local-First Performance**: All operations write to IndexedDB instantly for zero-latency interaction
* **Background Sync**: Automatic cloud synchronization when online, with smart queue management for offline changes
* **Conflict Resolution**: Intelligent merge strategy that preserves both local and server state
* **Network Status Indicator**: Real-time connection status displayed in the analytics header
* **Sync Queue Management**: Operations queue locally when offline, auto-process when reconnected
* **IndexedDB Storage**: Complete task state persistence in browser database

### 🔔 Cloud-Powered Push Notifications
* **Background Notifications**: Receive task reminders even when the app is closed
* **Intelligent Scheduling**:
  - 🌅 **7 AM Daily Summary**: All of today's tasks in one morning briefing
  - ⏰ **1-Hour Warning**: 55–65 min window before task is due
  - ⚡ **10-Minute Warning**: 8–12 min window before task is due (tightened for accuracy)
* **Firebase Cloud Functions**: Serverless backend checks tasks every 5 minutes
* **Cross-Device Support**: Notifications on desktop, mobile PWA, and tablets
* **Timezone-Aware**: Runs on Asia/Kolkata (UTC+5:30) time
* **VAPID Authentication**: Secure web push protocol implementation
* **Auto-Subscribe**: Seamless push subscription on notification permission grant
* **Stale Subscription Cleanup**: Invalid subscriptions automatically removed (410/404 responses)

### 📊 Weekly Visual Dashboard
* **Week Start Setting**: Bar graph and weekly cards restructure instantly when week start is changed to Monday
* **Week View Toggle**: Switch between Today View and Week View with one click
* **Circular Progress Indicators**: Beautiful SVG-based completion circles for each day
* **7-Day Overview**: Cards showing daily task completion for the configured week
* **Interactive Task Lists**: Themed scrollbar — view and complete tasks directly from week cards
* **Smooth Animations**: Staggered card animations (100ms delay cascade), progress circles fill with cubic-bezier easing
* **Real-Time Updates**: Progress updates smoothly without page reload
* **Category Filtering**: Works seamlessly with category filters

### 🎯 Smart Task Management
* **Time-Based Scheduling**: Add specific times to tasks (HH:MM format)
* **Default Task Time**: Set a preferred time that pre-fills when adding tasks (configurable in Profile)
* **Overdue Detection**: Tasks with passed times automatically move to "Overdue" column
* **Three-Column Kanban**:
  - 🔴 **Overdue**: Past dates + today's tasks with passed times
  - ⏳ **Current**: Today's tasks
  - 📅 **Incoming**: Future tasks
* **Auto-Archive System**: Completed tasks hide from main view (shown in History)
* **Intelligent Revert**: Unticking a completed task instantly reverts it to active
* **Historical Calendar**: History button reveals all completed tasks grouped by date

### 💧 Liquid Analytics Engine
* **Weekly Fuel Levels**: Custom-built bar graph with "Liquid Grow" animations
* **Week Start Aware**: Bar graph days reorder live (Sun→Sat or Mon→Sun) based on profile setting
* **Dual-Layer Visualization**:
  - Transparent bars show planned tasks per day
  - Gradient-filled bars display completed tasks
* **Circular Progress Meter**: Dynamic SVG-based completion percentage with smooth transitions
* **Themed Scrollbar**: Task list scrollbar inside day cards matches the primary green theme

### 🌓 Dual-Phase Interface
* **Dynamic Theme Toggle**: Available both from top nav and Profile panel
* **Stealth Mode (Dark)**: Deep-space aesthetic minimizing eye strain
* **Command Mode (Light)**: High-clarity daylight interface with glassmorphism
* **Persistent Theme**: Auto-saves to localStorage across sessions
* **Smooth Transitions**: 0.3s animations on all color changes

### ☁️ Real-Time Cloud Sync
* **Multi-Device Synchronization**: Instant updates across all devices
* **Firebase Realtime Database**: Asia-Southeast regional cluster
* **Settings Sync**: Profile preferences sync across devices via Firebase

### 🔒 Secure Authentication
* **Firebase Auth Integration**: Email/password authentication
* **Password Change**: Re-authenticates with current password before updating
* **Account Deletion**: Full data wipe from Firebase before account deletion
* **Password Visibility Toggle**: Built-in show/hide for secure entry
* **Persistent Sessions**: Auto-login after first authentication

### 🏷️ Advanced Categorization
* **Four Mission Types**: Work, Home, Personal, and Urgent
* **Visual Color Coding**:
  - Work: `#0984e3` (Blue)
  - Home: `#6c5ce7` (Purple)
  - Personal: `#00b894` (Teal)
  - Urgent: `#d63031` (Red)
* **Category Filtering**: Filter tasks across all views

### 📱 Progressive Web App (PWA)
* **Installable**:
  - 🤖 **Android (Chrome)**: A native **"Install App"** banner appears automatically — one tap installs it like a real app with no extra steps needed
  - 🍎 **iOS (Safari)**: Manual process required — tap Share ⬆️ then "Add to Home Screen" (Apple does not support automatic install prompts)
* **Full-Screen Experience**: Runs without browser chrome after installation
* **Service Worker**: Handles caching and push notifications
* **Offline Capable**: Core functionality without internet

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

### Push Notification System
```
Firebase Cloud Functions (Every 5 min, Asia/Kolkata)
         ↓
    For each user:
         ↓
    ┌─── Is it 7:00–7:05 AM? ───► Send daily summary of all today's tasks
    │
    └─── For each task due today with a time:
              ├── 55–65 min away? ──► "⏰ Task Due in 1 Hour"
              └── 8–12 min away?  ──► "⚡ Task Due in 10 Minutes"
```

### Profile Settings Flow
```
User changes setting in Profile Panel
         ↓
saveSetting(key, value) called
         ↓
userSettings object updated in memory
         ↓
Value written to Firebase: users/{uid}/settings/{key}
         ↓
Live effect applied immediately:
  weekStart     → updateBarGraphDayLabels() + renderTasks()
  summaryTime   → scheduleDailySummary() rescheduled
  defaultTime   → task time input pre-filled
  notify toggles→ respected on next notification schedule
```

### Weekly Dashboard Rendering
```
User Clicks "Week View" (or changes weekStart in Profile)
         ↓
Calculate week start using: (currentDay - weekStartDay + 7) % 7
         ↓
Reorder day labels: [Mon, Tue, Wed, Thu, Fri, Sat, Sun] if Monday
         ↓
For each of 7 days:
  - Filter tasks by date
  - Calculate completion percentage
  - Render circular progress (SVG)
  - Display themed scrollable task list
         ↓
Staggered animations (100ms cascade)
```

---

## 📐 The Logic Engine

### 1. Time-Based Task Sorting

$$
\text{Status} = \begin{cases}
\text{Overdue} & \text{if } (date < today) \lor (date = today \land time < now) \\
\text{Current} & \text{if } date = today \\
\text{Incoming} & \text{if } date > today
\end{cases}
$$

### 2. Notification Timing Algorithm

$$
t_{until} = t_{task} - t_{now}
$$

$$
\text{Send Notification} = \begin{cases}
\text{Daily Summary} & \text{if } t_{now} \in [T_{summary}, T_{summary} + 5\text{min}] \\
\text{1-hour alert} & \text{if } 55\text{min} \leq t_{until} \leq 65\text{min} \\
\text{10-min alert} & \text{if } 8\text{min} \leq t_{until} \leq 12\text{min}
\end{cases}
$$

### 3. Week Start Calculation

$$
\text{offset} = (currentDay - weekStartDay + 7) \mod 7
$$

$$
\text{weekStart} = today - \text{offset} + (weekOffset \times 7)
$$

Applies to bar graph, weekly dashboard cards, week header date range, and completion percentage ring.

### 4. Weekly Progress Calculation

$$
P_{day} = \left( \frac{n_{completed}}{n_{total}} \right) \times 100
$$

### 5. Timezone Normalization
```javascript
const indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
```

---

## 🛡️ Firebase Security Rules

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
        },
        "settings": {
          ".read": "$uid === auth.uid",
          ".write": "$uid === auth.uid"
        }
      }
    }
  }
}
```

> ⚠️ Add the `settings` node to your existing rules if upgrading from v2.

---

## 🚀 Deployment Guide

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project
3. Enable **Realtime Database** (Asia-Southeast region)
4. Enable **Authentication** → Email/Password
5. Upgrade to **Blaze Plan** (pay-as-you-go, free tier sufficient for personal use)

#### Configure Firebase in `index.html`
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.asia-southeast1.firebasedatabase.app",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
};
```

### 2. Cloud Functions Setup

```bash
npm install -g firebase-tools
firebase login
firebase init functions   # select JavaScript, install deps
cd functions
npm install web-push
```

Generate VAPID keys:
```bash
npx web-push generate-vapid-keys
```

Update `functions/index.js` and `index.html` with your VAPID keys, then deploy:
```bash
firebase deploy --only functions
```

### 3. GitHub Pages Hosting
Push `index.html`, `sw.js`, `manifest.json`, and icons to your repo, then enable Pages from **Settings → Pages → main branch**.

### 4. PWA Installation

#### 🤖 Android (Chrome) — Automatic
Chrome detects the PWA manifest and shows a native **"Install App"** banner at the bottom of the screen automatically. Tap it and the app installs instantly — no menus, no steps.

> If the banner was dismissed, tap the browser menu ⋮ → **"Install App"** to trigger it manually.

#### 🍎 iOS (Safari) — Manual Steps Required
Apple does not support automatic PWA install prompts. You must install manually:

1. Open the site in **Safari** (not Chrome — Chrome on iOS cannot install PWAs)
2. Tap the **Share** button ⬆️ at the bottom of the screen
3. Scroll down and tap **"Add to Home Screen"**
4. Confirm the name and tap **"Add"**

> **Note**: Push notifications on iOS PWAs have limited support due to Apple restrictions. Full notification support requires iOS 16.4+ with the PWA installed to the home screen.

---

## 📊 Data Structure

### Task Object
```javascript
{
  id: "1738764523000",
  name: "Deploy Mission Alpha",
  cat: "work",              // work | home | personal | urgent
  date: "2025-02-14",
  time: "14:30",            // optional
  completed: false,
  completedAt: null
}
```

### User Settings Object
```javascript
// Stored at: users/{userId}/settings
{
  dailySummaryEnabled: true,
  dailySummaryTime: "07:00",   // user-configurable morning briefing time
  notify1Hour: true,
  notify10Min: true,
  weekStart: 0,               // 0 = Sunday, 1 = Monday
  defaultTaskTime: "09:00"    // pre-fills task time input
}
```

### Push Subscription
```javascript
// Stored at: users/{userId}/pushSubscriptions/{subscriptionId}
{
  endpoint: "https://fcm.googleapis.com/fcm/send/...",
  expirationTime: null,
  keys: { p256dh: "...", auth: "..." }
}
```

---

## 🎨 UI/UX Highlights

### View-Specific Behavior
| Element | Today View | Week View |
|---------|:---:|:---:|
| Bar Graph | ✅ | ❌ |
| Category Filters | ✅ | ❌ |
| Add Task Input | ✅ | ❌ |
| 7-Day Cards | ❌ | ✅ |
| Kanban Board | ✅ | ❌ |

### Notification Schedule
| Notification | When | Configurable |
|---|---|:---:|
| 🌅 Daily Summary | 7 AM (user-set time) | ✅ |
| ⏰ 1-Hour Reminder | 55–65 min before task | ✅ |
| ⚡ 10-Min Reminder | 8–12 min before task | ✅ |

### Animations & Transitions
- **Profile Panel**: Slide-in from right, 0.35s cubic-bezier
- **Week Card Cascade**: 100ms staggered delays
- **Progress Circles**: 1.2s cubic-bezier fill animation
- **Task Toggle**: Smooth opacity/strikethrough
- **Theme Switch**: 0.3s color transitions
- **Bar Graph Days**: Instant reorder on week start change

---

## 👨‍💻 About the Developer

| | |
| :--- | :--- |
| **Name** | Ankit Raj |
| **Education** | 1st Year B.Tech CSE at **Galgotias University** |
| **Core Expertise** | Backend Development, Cloud Functions, Real-Time Systems |
| **YouTube** | [AQUAIMMORTAL Official Channel](https://youtube.com/@AQUAIMMORTAL) |
| **GitHub** | [aquaimmortal7](https://github.com/aquaimmortal7) |

---

## 📝 Version History

### v3.0.0 — Profile, Settings & Smart Notifications (Feb 2026)

**New Features:**
- ✅ **Profile Panel**: Slide-in settings panel with avatar, password change, and all preferences
- ✅ **Daily 7 AM Summary**: Replaced midnight notification with a useful morning briefing
- ✅ **User-Configurable Summary Time**: Pick your own morning briefing time
- ✅ **Notification Toggles**: Individually enable/disable daily summary, 1-hour, and 10-min reminders
- ✅ **Week Start Setting**: Choose Sunday or Monday — bar graph and weekly cards restructure instantly
- ✅ **Default Task Time**: Set a preferred time that pre-fills when adding tasks
- ✅ **Themed Scrollbar**: Task list scrollbar in week cards matches the primary green theme
- ✅ **Account Deletion**: Full Firebase data wipe with password confirmation
- ✅ **Secure Password Change**: Re-authentication required before updating password

**Technical Improvements:**
- ⚡ Tightened 10-min notification window from 5–15 min to 8–12 min for accuracy
- ⚡ All settings persisted to `users/{uid}/settings` — sync across devices
- ⚡ Week start calculation now uses `(currentDay - weekStartDay + 7) % 7` across all 4 render paths
- ⚡ Daily summary fires from both Cloud Function (background) and `setTimeout` (when app open)
- ⚡ Firebase security rules updated to cover new `settings` node

### v2.0.0 — Push Notifications & Weekly Dashboard (Feb 2026)
- ✅ Firebase Cloud Functions — serverless push notification backend
- ✅ Web Push API with VAPID authentication
- ✅ Weekly Dashboard with circular SVG progress indicators
- ✅ Time-based task categorization (overdue/current/incoming)
- ✅ View toggle system (Today / Week)

### v1.0.0 — Core Task Management (Jan 2025)
- Basic task CRUD with Firebase Realtime Database
- Category filtering
- Dark/Light theme toggle
- Weekly bar graph analytics

---

## 💰 Cost Analysis

| Service | Monthly Usage | Free Tier | Cost |
|---------|:---:|:---:|:---:|
| Cloud Functions | ~8,640 calls | 125,000/month | ✅ FREE |
| Realtime Database | Read/Write ops | 100GB/month | ✅ FREE |
| Authentication | User sign-ins | Unlimited | ✅ FREE |
| Hosting (GitHub Pages) | Static files | Unlimited | ✅ FREE |

**Estimated Monthly Cost: $0.00**

---

## 🐛 Known Issues & Roadmap

### Current Limitations
- iOS PWA has limited background notification support (Apple restriction)
- Push notifications require installed PWA on mobile (not browser tabs)
- Service Worker requires HTTPS (GitHub Pages provides this)

### Planned Features
- [ ] Task priority levels
- [ ] Drag-and-drop reordering
- [ ] Export to CSV/JSON
- [ ] Shared workspaces
- [ ] Task notes and attachments
- [ ] Snooze notification feature
- [ ] Custom notification sound
- [ ] Task templates

---

## 📞 Contact & Support

**Ankit Raj** — [@AQUAIMMORTAL](https://youtube.com/@AQUAIMMORTAL)

**Project**: [github.com/aquaimmortal7/Task-Planner](https://github.com/aquaimmortal7/Task-Planner)

**Live Demo**: [aquaimmortal7.github.io/Task-Planner/](https://aquaimmortal7.github.io/Task-Planner/)

[Report a Bug](https://github.com/aquaimmortal7/Task-Planner/issues) · [Request a Feature](https://github.com/aquaimmortal7/Task-Planner/discussions)

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

Licensed under the [MIT License](./LICENSE).

---

<div align="center">

**Built with 💚 by Ankit Raj**

*"Transform chaos into clarity, one mission at a time."*

**Powered by Firebase Cloud Functions • Web Push API • Service Workers**

⭐ Star this repo if it helped you!

</div>
