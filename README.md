# 🚀 Workflow Pro
### *The Ultimate Cloud-Synced Productivity App with Push Notifications & AI Assistant*

**Workflow Pro** is a next-generation task management application built with a sleek, modern aesthetic. Built on a robust offline-first architecture with Firebase cloud synchronization, **real-time push notifications**, and an **AI-powered task assistant**, it delivers seamless productivity wrapped in a fluid, animated UI.

**Live Deployment** → [Ankit-8081.github.io/Task-Planner/](https://ankit-8081.github.io/Task-Planner/)

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
![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FF6B35?style=for-the-badge&logo=gmail&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

---

## ✨ Key Features

### 🤖 AI Task Assistant
* **Floating AI Panel**: Tap the ✦ button to open a slide-in AI chat panel
* **Goal → Roadmap**: Tell the AI your goal (e.g. "I want to learn Java") and it generates a full structured task roadmap with dates, categories, and recurrence
* **Preview Before Adding**: Review all suggested tasks, remove any you don't want, then add all with one tap
* **Multi-Turn Conversation**: AI remembers the full session — ask it to modify, extend, or revise the roadmap
* **Powered by Gemini 2.5 Flash**: Free tier, no proxy needed, runs directly from the browser

### 🔐 Account Security & Recovery
* **Recovery Email**: Add and verify a real email in Profile → Account for account recovery
* **OTP Verification**: 6-digit OTP sent to your Gmail via EmailJS to verify your recovery email
* **Forgot Password Flow**:
  1. Enter username → OTP sent to verified recovery email
  2. Enter OTP → new password fields appear
  3. Set new password → automatically logged in
* **Cloud Function Password Reset**: Firebase Admin SDK securely updates password server-side
* **Re-authentication**: Current password required before changing password in Profile
* **Post-Signup Nudge**: Popup after signup encourages adding a recovery email immediately

### 👤 Profile & Settings Panel
* **Slide-In Profile Panel**: Full-featured settings panel that slides in from the right with smooth animation
* **Avatar System**: Auto-generated avatar from username initial shown in the top nav and panel header
* **Change Password**: Secure inline password change with re-authentication before applying
* **Recovery Email Row**: Shows ✓ Verified or ! Unverified badge with OTP verify flow inline
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

### 🔁 Recurring Tasks
* **Repeat Options**: No Repeat, Daily, Weekly, Monthly
* **Auto-Spawn**: On task completion, next occurrence is automatically created with the correct date
* **Visual Badges**: 🔁 daily, 📅 weekly, 🗓️ monthly shown on task cards
* **UTC-Safe Date Logic**: Uses local date parts (not `toISOString()`) to avoid timezone shift bugs

### 🌅 Smart Daily Morning Summary
* **Configurable Time**: Set your own briefing time (default 7:00 AM)
* **Smart Body**: Shows up to 5 tasks with times, then "…and N more"
* **Dual Delivery**: Fires from Firebase Cloud Function (app closed) and `setTimeout` (app open)
* **Toggleable**: Can be fully disabled from Profile

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
  - 🌅 **Daily Summary**: Configurable morning briefing of all today's tasks
  - ⏰ **1-Hour Warning**: 55–65 min window before task is due
  - ⚡ **10-Minute Warning**: 8–12 min window before task is due
* **Firebase Cloud Functions**: Serverless backend checks tasks every 5 minutes
* **Cross-Device Support**: Notifications on desktop, mobile PWA, and tablets
* **Timezone-Aware**: Runs on Asia/Kolkata (UTC+5:30)
* **VAPID Authentication**: Secure web push protocol implementation
* **Auto-Subscribe**: Seamless push subscription on notification permission grant
* **Stale Subscription Cleanup**: Invalid subscriptions automatically removed (410/404 responses)

### ⏰ Dual Time Widget
* **Start → End Time**: Set both start and end times per task with a clean `__:__ → __:__` widget
* **Flexible Entry**: Start only, end only, or both — all combinations supported
* **Smart Display**: Shows `(09:00 → 10:30)`, `(start: 09:00)`, or `(end: 10:30)` on task cards

### 📊 Weekly Visual Dashboard
* **Week Start Setting**: Bar graph and weekly cards restructure instantly when week start is changed
* **Week View Toggle**: Switch between Today View and Week View with one click
* **Circular Progress Indicators**: Beautiful SVG-based completion circles for each day
* **7-Day Overview**: Cards showing daily task completion for the configured week
* **Interactive Task Lists**: View and complete tasks directly from week cards
* **Smooth Animations**: Staggered card animations (100ms delay cascade), progress circles fill with cubic-bezier easing
* **Real-Time Updates**: Progress updates smoothly without page reload
* **Category Filtering**: Works seamlessly with category filters

### 🎯 Smart Task Management
* **Time-Based Scheduling**: Add specific start and end times to tasks
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
* **Full-Screen Experience**: Runs without browser chrome after installation
* **Service Worker**: Handles caching and push notifications
* **Offline Capable**: Core functionality without internet
* **Swipe Navigation**: Swipe left/right to navigate weeks on mobile

#### 🤖 Android (Chrome) — Automatic
Chrome detects the PWA manifest and shows a native **"Install App"** banner at the bottom of the screen automatically. Tap it and the app installs instantly.

> If the banner was dismissed, tap the browser menu ⋮ → **"Install App"** to trigger it manually.

#### 🍎 iOS (Safari) — Manual Steps Required
Apple does not support automatic PWA install prompts. Install manually:

1. Open the site in **Safari** (not Chrome — Chrome on iOS cannot install PWAs)
2. Tap the **Share** button ⬆️ at the bottom of the screen
3. Scroll down and tap **"Add to Home Screen"**
4. Confirm the name and tap **"Add"**

> **Note**: Push notifications on iOS PWAs require iOS 16.4+ with the PWA installed to the home screen.

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
    ┌─── Is it summary time window? ──► Send daily summary
    │
    └─── For each task due today with a time:
              ├── 55–65 min away? ──► "⏰ Task Due in 1 Hour"
              └── 8–12 min away?  ──► "⚡ Task Due in 10 Minutes"
```

### Forgot Password Flow
```
User enters username
         ↓
App reads userIndex/{username} (public Firebase node)
         ↓
Finds verified recovery email
         ↓
EmailJS sends 6-digit OTP to Gmail
         ↓
User enters OTP → verified in memory
         ↓
User sets new password
         ↓
App writes passwordResets/{username} to Firebase DB
         ↓
Cloud Function (handlePasswordReset) picks it up
         ↓
admin.auth().updateUser() — secure server-side update
         ↓
App signs in automatically with new password
```

### AI Assistant Flow
```
User describes goal
         ↓
Gemini 2.5 Flash generates JSON task roadmap
         ↓
App parses JSON → renders preview cards
         ↓
User removes unwanted tasks → Add all → Firebase
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

### 4. Weekly Progress Calculation

$$
P_{day} = \left( \frac{n_{completed}}{n_{total}} \right) \times 100
$$

### 5. Timezone Normalization
```javascript
const indiaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
```

### 6. Recurring Task Next Date
```javascript
// Uses local date parts — NOT toISOString() — to avoid UTC timezone shift
const nextDate = new Date(year, month, day + 1); // for daily
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
        }
      }
    },
    "userIndex": {
      "$username": {
        ".read": true,
        ".write": "auth !== null"
      }
    },
    "passwordResets": {
      "$username": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

---

## 🚀 Deployment Guide

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project
3. Enable **Realtime Database** (Asia-Southeast region)
4. Enable **Authentication** → Email/Password
5. Upgrade to **Blaze Plan** (pay-as-you-go, free tier sufficient for personal use)

### 2. Gemini AI Setup (Free)

1. Go to [aistudio.google.com](https://aistudio.google.com) → Get API Key → Create API key in new project
2. In `index.html`, replace:
```javascript
const GEMINI_KEY = 'YOUR_GEMINI_API_KEY';
```

### 3. EmailJS Setup (Free — 200 emails/month)

1. Sign up at [emailjs.com](https://emailjs.com) → connect Gmail service
2. Create email template with variables `{{to_email}}`, `{{username}}`, `{{otp}}`, `{{time}}`
3. Copy **Service ID**, **Template ID**, **Public Key**
4. Update in `index.html`:
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { ... });
```

### 4. Cloud Functions Setup

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

### 5. GitHub Pages Hosting
Push `index.html`, `sw.js`, `manifest.json`, and icons to your repo → enable Pages from **Settings → Pages → main branch**.

---

## 📊 Data Structure

### Task Object
```javascript
{
  id: "1738764523000",
  name: "Learn Java basics",
  cat: "work",              // work | home | personal | urgent
  date: "2026-03-10",
  startTime: "09:00",       // optional
  endTime: "10:30",         // optional
  recur: "weekly",          // daily | weekly | monthly | null
  completed: false,
  completedAt: null,
  notifSent: { "1hr": true, "10min": true }
}
```

### User Settings Object
```javascript
// Stored at: users/{userId}/settings
{
  dailySummaryEnabled: true,
  dailySummaryTime: "07:00",
  notify1Hour: true,
  notify10Min: true,
  weekStart: 0,             // 0 = Sunday, 1 = Monday
  defaultTaskTime: "09:00",
  username: "ankit"
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

### Recovery Email Object
```javascript
// Stored at: users/{userId}/recoveryEmail
{
  email: "user@gmail.com",
  verified: true,
  otp: null,
  otpExpiry: null
}
```

### User Index (Public — for forgot password)
```javascript
// Stored at: userIndex/{username}
{
  uid: "firebase_user_uid",
  recoveryEmail: "user@gmail.com",
  verified: true
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
| 🌅 Daily Summary | User-set time (default 7 AM) | ✅ |
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

## 💰 Cost Analysis

| Service | Monthly Usage | Free Tier | Cost |
|---------|:---:|:---:|:---:|
| Cloud Functions | ~8,640 calls | 125,000/month | ✅ FREE |
| Realtime Database | Read/Write ops | 100GB/month | ✅ FREE |
| Authentication | User sign-ins | Unlimited | ✅ FREE |
| Hosting (GitHub Pages) | Static files | Unlimited | ✅ FREE |
| Gemini 2.5 Flash | AI requests | 250/day | ✅ FREE |
| EmailJS | OTP emails | 200/month | ✅ FREE |

**Estimated Monthly Cost: $0.00**

---

## 📝 Version History

### v4.0.0 — AI Assistant, Account Recovery & Workflow Pro Rebrand (Mar 2026)

**New Features:**
- ✅ **AI Assistant**: Gemini 2.5 Flash powered goal → task roadmap generator
- ✅ **Forgot Password**: Full OTP-based flow — username → OTP → new password → auto login
- ✅ **Recovery Email**: Add and verify real Gmail in Profile for account recovery
- ✅ **EmailJS Integration**: OTP emails sent directly to user's Gmail (free tier)
- ✅ **Cloud Function Password Reset**: `handlePasswordReset` uses Firebase Admin SDK
- ✅ **Post-Signup Recovery Email Nudge**: Popup encourages adding recovery email immediately
- ✅ **Recurring Tasks**: Daily, weekly, monthly with auto-spawn on completion
- ✅ **Dual Time Widget**: Start → End time picker on every task
- ✅ **App Renamed**: Mission Control Pro → **Workflow Pro**

**Technical Improvements:**
- ⚡ `userIndex` public node for O(1) username lookup without scanning all users
- ⚡ Username normalized to lowercase in all index operations
- ⚡ UTC timezone bugs fixed — all date operations use local date parts
- ⚡ Best streak calculation scans all-time data (not just current month)
- ⚡ AI JSON parser handles truncated responses gracefully

### v3.0.0 — Profile, Settings & Smart Notifications (Feb 2026)
- ✅ Profile Panel with avatar, password change, and all preferences
- ✅ Daily 7 AM Summary with configurable time
- ✅ Notification toggles (daily summary, 1-hour, 10-min)
- ✅ Week Start setting — bar graph and cards restructure instantly
- ✅ Default Task Time pre-fill
- ✅ Account deletion with password confirmation

### v2.0.0 — Push Notifications & Weekly Dashboard (Feb 2026)
- ✅ Firebase Cloud Functions — serverless push notification backend
- ✅ Web Push API with VAPID authentication
- ✅ Weekly Dashboard with circular SVG progress indicators
- ✅ Time-based task categorization (overdue/current/incoming)

### v1.0.0 — Core Task Management (Jan 2025)
- Basic task CRUD with Firebase Realtime Database
- Category filtering, dark/light theme
- Weekly bar graph analytics

---

## 🐛 Known Issues & Roadmap

### Current Limitations
- iOS PWA has limited background notification support (Apple restriction)
- Push notifications require installed PWA on mobile (not browser tabs)
- Service Worker requires HTTPS (GitHub Pages provides this)
- EmailJS free tier limited to 200 emails/month
- Gemini free tier limited to 250 AI requests/day

### Planned Features
- [ ] Natural language task add ("meeting tomorrow at 3pm")
- [ ] Smart AI category/time suggestions
- [ ] Daily AI debrief at 9 PM
- [ ] Task priority levels
- [ ] Drag-and-drop reordering
- [ ] Export to CSV/JSON
- [ ] Shared workspaces
- [ ] Task notes and attachments
- [ ] Snooze notification feature
- [ ] Custom notification sound
- [ ] Task templates

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

*"Stop planning, start doing."*

**Powered by Firebase · Gemini AI · EmailJS · Web Push API · Service Workers**

⭐ Star this repo if it helped you!

</div>
