# 🚀 Mission Control Pro
### *The Ultimate Cloud-Synced Productivity Command Center*

**Mission Control Pro** is a next-generation task management application engineered with a "Mission Command" aesthetic. Built on a robust offline-first architecture with Firebase cloud synchronization, it delivers real-time data persistence wrapped in a fluid, liquid-animated UI that transforms productivity into a seamless experience.

**Live Deployment** - [aquaimmortal7.github.io/Task-Planner/](https://aquaimmortal7.github.io/Task-Planner/)

---

## 🛠️ Tech Stack & Badges

![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![IndexedDB](https://img.shields.io/badge/IndexedDB-4479A1?style=for-the-badge&logo=databricks&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

---

## ✨ Key Features

### 🌐 Offline-First Architecture
* **Local-First Performance**: All operations write to IndexedDB instantly for zero-latency interaction
* **Background Sync**: Automatic cloud synchronization when online, with smart queue management for offline changes
* **Conflict Resolution**: Intelligent merge strategy that preserves both local and server state
* **Network Status Indicator**: Real-time connection status displayed in the analytics header

### 🎯 Smart Task Management
* **Active/Completed Views**: Toggle between active tasks and completed missions with one click
* **Auto-Archive System**: Completed tasks automatically archive with timestamp tracking
* **Intelligent Revert**: Unticking a completed task instantly reverts it to active status
* **Today's Progress Focus**: "In Progress" section shows active tasks + today's completions only
* **Historical Calendar**: 📅 History button reveals all completed tasks grouped by date with completion timestamps

### 💧 Liquid Analytics Engine
* **Weekly Fuel Levels**: Custom-built bar graph with "Liquid Grow" animations triggering on every update
* **Dual-Layer Visualization**: 
  - Transparent bars show planned tasks per day
  - Gradient-filled bars display completed tasks
* **Real-Time Accuracy**: Stats calculated from ALL tasks regardless of current view filter
* **Circular Progress Meter**: Dynamic SVG-based completion percentage with smooth transitions
* **Elastic Physics**: Bars utilize custom `cubic-bezier` transitions simulating liquid pouring into vessels

### 🌓 Dual-Phase Interface
* **Stealth Mode (Dark)**: Deep-space aesthetic minimizing eye strain during late-night operations
* **Command Mode (Light)**: High-clarity daylight interface with glassmorphism effects
* **Persistent Theme**: Auto-saves to localStorage for consistent experience across sessions
* **Smooth Transitions**: All color and background changes feature 0.3s smooth animations

### ☁️ Real-Time Cloud Sync
* **Multi-Device Synchronization**: Instant updates across desktop, mobile, and tablet
* **Firebase Realtime Database**: Asia-Southeast regional cluster for ultra-low latency
* **Smart Sync Queue**: Operations queue locally when offline, auto-process when reconnected
* **Data Isolation**: Private user workspaces mapped to unique UIDs

### 🔒 Secure Authentication
* **Private Callsign System**: Secure username/password authentication
* **Password Visibility Toggle**: Built-in show/hide functionality for secure entry
* **Persistent Sessions**: Auto-login after first authentication
* **Data Privacy**: Strict Firebase security rules prevent cross-user access

### 🏷️ Advanced Categorization
* **Four Mission Types**: Work, Home, Personal, and Urgent
* **Visual Color Coding**: 
  - Work: `#0984e3` (Blue)
  - Home: `#6c5ce7` (Purple)
  - Personal: `#00b894` (Teal)
  - Urgent: `#d63031` (Red)
* **Category Filtering**: Isolate tasks by type with analytics respecting active filter
* **Category Persistence**: Smart filters maintain state across view switches

### 📱 Progressive Web App (PWA)
* **Installable**: Add to home screen on iOS and Android
* **Offline Capable**: Full functionality without internet connection
* **App-Like Experience**: Runs fullscreen without browser chrome
* **Native Integration**: Uses device notifications and background sync APIs

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

---

## 📐 The Logic Engine

The application processes data using advanced mathematical models:

### 1. Fleet Completion Rate
Real-time circular progress meter calculation:
$$P = \left( \frac{n_{completed}}{n_{total}} \right) \times 100$$

Where:
- $n_{completed}$ = Tasks with `completed: true`
- $n_{total}$ = All tasks (active + completed)

### 2. Temporal Mapping (Chart Logic)
Accurate weekly bar positioning using timezone-normalized midnight anchors:
$$\text{day\_index} = \left\lfloor \frac{t_{task} - t_{sunday\_00:00}}{86,400,000} \right\rfloor$$

Where:
- $t_{task}$ = Task date at local midnight
- $t_{sunday\_00:00}$ = Most recent Sunday at 00:00 local time
- Result ∈ [0, 6] maps to [Sun, Mon, Tue, Wed, Thu, Fri, Sat]

### 3. Completion Timestamp Logic
Tasks track completion using ISO 8601 timestamps:
```javascript
completedAt: "2025-02-05T14:23:45.123Z"
```
This enables:
- Grouping by completion date
- Filtering "today's completions"
- Historical timeline reconstruction

---

## 🛡️ Firebase Security Rules

Enforce strict data isolation in **Firebase Console > Realtime Database > Rules**:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid",
        "tasks": {
          "$taskId": {
            ".validate": "newData.hasChildren(['name', 'cat', 'date', 'completed', 'archived'])"
          }
        }
      }
    },
    "usernames": {
      ".read": "auth != null",
      ".write": "auth != null && !data.exists()"
    }
  }
}
```

---

## 🚀 Deployment Guide

### 1. Firebase Configuration
Create a Firebase project and update the config in `index.html`:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID"
};
```

### 2. GitHub Pages Hosting
1. Push `index.html` to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Set source branch to `main`
4. Your site deploys to: `https://username.github.io/repo-name/`

### 3. PWA Installation

#### iOS (Safari)
1. Open the site in Safari
2. Tap the **Share** button (⬆️)
3. Select **Add to Home Screen**
4. Confirm to install

#### Android (Chrome)
1. Open the site in Chrome
2. Tap the button in upper right corner (⋮) → **Install App**

---

## 📊 Data Structure

### Task Object Schema
```javascript
{
  id: "1738764523000",           // Timestamp-based unique ID
  name: "Deploy Mission Alpha",  // Task title
  cat: "work",                   // Category: work|home|personal|urgent
  date: "2025-02-05",           // Due date (YYYY-MM-DD)
  completed: false,              // Completion status
  archived: false,               // Archive status (auto-set on completion)
  completedAt: null              // ISO timestamp when completed
}
```

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

### Animations & Transitions
- **Bar Growth**: 0.6s cubic-bezier(0.4, 0, 0.2, 1)
- **Progress Ring**: 0.8s ease-in-out stroke animation
- **Theme Switch**: 0.3s smooth color transitions
- **Modal Appearance**: Fade + scale transform

### Responsive Design
- **Desktop**: Three-column layout (Previous | In Progress | Upcoming)
- **Mobile**: Single-column stack with full-width elements
- **Breakpoint**: 768px with grid → flex transformation

### Color Palette
| Mode | Background | Card BG | Text | Primary |
|------|-----------|---------|------|---------|
| Light | `#f0f2f5` | `#ffffff` | `#2d3436` | `#27ae60` |
| Dark | `#121212` | `#1e1e1e` | `#f5f6fa` | `#2ecc71` |

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

### Completion History Modal
- Groups completed tasks by date (descending)
- Shows completion time for each task
- "Today" label for current day's completions
- Scroll-friendly design for long histories
- Click outside to close

---

## 👨‍💻 About the Developer

| Feature | Details |
| :--- | :--- |
| **Name** | Ankit Raj |
| **Education** | 1st Year B.Tech CSE at **Galgotias University** |
| **Core Expertise** | Backend Development, Logical Architecture & Offline-First Systems |
| **YouTube** | [AQUAIMMORTAL Official Channel](https://youtube.com/@AQUAIMMORTAL) |
| **Specialization** | Real-time data synchronization, PWA development, Firebase architecture |

### 📜 Certifications
* **C Programming**: Advanced Logic & Syntax
* **Java Basics**: Object-Oriented Fundamentals
* **Python Basics**: Data Structures & Automation
* **Web Development**: Full-Stack JavaScript with Firebase Integration

---

### Major Features
- ✅ **Offline-First Architecture**: Complete IndexedDB integration with background sync
- ✅ **Smart Completion System**: Auto-archive with timestamp tracking
- ✅ **Active/Completed Views**: Toggle between task states with one click
- ✅ **Completion History**: Calendar modal showing all completed tasks by date
- ✅ **Intelligent Revert**: Untick to instantly restore tasks to active status
- ✅ **Today's Focus**: "In Progress" section filters to show relevant tasks only
- ✅ **Accurate Analytics**: Stats always calculate from all tasks, not just filtered view

### Performance Improvements
- ⚡ Zero-latency UI updates with local-first writes
- ⚡ Smart sync queue prevents data loss during offline periods
- ⚡ Optimized IndexedDB queries with efficient transaction batching
- ⚡ Reduced Firebase reads through intelligent caching

---

## 📝 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Check the [issues page](https://github.com/aquaimmortal7/Task-Planner/issues) for current tasks.

---

## 🐛 Known Issues & Roadmap

### Current Limitations
- Firebase config needs manual update for new deployments
- PWA manifest requires separate configuration file
- No bulk task operations (select multiple, delete all completed, etc.)

### Future Enhancements
- [ ] Drag-and-drop task reordering
- [ ] Recurring task support
- [ ] Task notes and attachments
- [ ] Export to CSV/JSON
- [ ] Dark mode auto-detection based on system preference
- [ ] Task notifications and reminders
- [ ] Collaborative workspaces

---

## ⭐️ Show Your Support

Give a ⭐️ if this project helped you optimize your productivity workflow!

### Share With
- Fellow developers building task management systems
- Students learning Firebase and IndexedDB
- Teams looking for offline-first PWA examples
- Anyone interested in liquid UI animations

---

## 📞 Contact

**Ankit Raj** - [@AQUAIMMORTAL](https://youtube.com/@AQUAIMMORTAL)

**Project Link**: [https://github.com/aquaimmortal7/Task-Planner](https://github.com/aquaimmortal7/Task-Planner)

---

<div align="center">

**Built with 💚 by Ankit Raj**

*"Transform chaos into clarity, one mission at a time."*

</div>
