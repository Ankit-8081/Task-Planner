# 🚀 Mission Control Pro
### *The Ultimate Cloud-Synced Productivity Dashboard*

**Mission Control Pro** is a high-performance task management application designed with a "Command Center" aesthetic. Built for real-time synchronization, it combines robust Firebase data persistence with a fluid, liquid-animated UI to make productivity feel as smooth as it looks.

**Live Deployment** - [aquaimmortal7.github.io/Task-Planner/](https://aquaimmortal7.github.io/Task-Planner/)

---

## 🛠️ Tech Stack & Badges

![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

---

## ✨ Key Features

### 🌓 Dual-Phase Visibility
* **Stealth Mode (Dark)**: A deep-space aesthetic designed to reduce eye strain during late-night deployments.
* **Command Mode (Light)**: A high-clarity, daylight-optimized interface featuring crisp glassmorphism.
* **Persistent Phase**: Utilizes localStorage and CSS variables to ensure your visual preference remains locked across all sessions.

### 💧 Liquid Analytics
* **Weekly Fuel Levels:** A custom-built bar graph featuring "Liquid Grow" animations that trigger on every dashboard update.
* **Elastic Physics:** Bars use custom `cubic-bezier` transitions to bounce and settle like liquid being poured into a vessel.
* **Temporal Sync:** Automatically maps tasks to the correct day of the week (Sun-Sat) using local timezone normalization to prevent "date-shifting" bugs.

### ☁️ Real-Time Cloud Sync
* Instant synchronization between desktop and mobile devices.
* Powered by Firebase Realtime Database using the **Asia-Southeast** regional cluster for ultra-low latency.

### 🔒 Secure Access
* Private user authentication system via personal "Callsigns."
* **Data Isolation:** Your missions are strictly mapped to your UID; other operatives cannot see your dashboard.

### 📥 Archive Vault
* Move completed missions to a dedicated **Archive Vault** to keep your main workspace clean.
* Keeps a permanent record of past accomplishments for performance review.

### 🏷️ Smart Categorization
* **Work**, **Home**, **Personal**, and **Urgent** tags.
* Automatic color-coding for instant visual prioritization of your fleet's objectives.

---

## 📐 The Logic Engine

The application processes data using two core mathematical models:

1. **Fleet Completion Rate:**
   Calculated in real-time to update the circular "Mission Status" meter:
   $$P = \left( \frac{n_{done}}{n_{total}} \right) \times 100$$

2. **Temporal Mapping (Chart Logic):**
   To ensure tasks appear on the correct day regardless of UTC offsets, we use a local midnight anchor:
   $$\text{offset} = \lfloor \frac{t_{\text{target}} - t_{\text{sunday\_midnight}}}{86,400,000} \rfloor$$

---

## 🛡️ Firebase Security Rules

To keep your data private, apply these rules in your **Firebase Console > Realtime Database > Rules**:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    },
    "usernames": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

---

## 🚀 Deployment & Installation

### 1. GitHub Pages Hosting
* **Upload:** Push your `index.html` file to your GitHub repository.
* **Configure:** Navigate to the **Settings** tab of your repository.
* **Pages:** Select **Pages** from the left-hand sidebar.
* **Deploy:** Under "Build and deployment", set the Branch to `main` and click **Save**. Your site will be live at `https://your-username.github.io/your-repo-name/`.

### 2. Mobile Installation (PWA Mode)
To use this dashboard as a standalone mobile app without a browser URL bar:
* **iOS (Safari):** Tap the **Share** button (square with up arrow) and select **Add to Home Screen**.
* **Android (Chrome):** Tap the **Three Dots** icon in the top right and select **Add to Home Screen**.

---

## 👨‍💻 About the Developer

| Feature | Details |
| :--- | :--- |
| **Name** | Ankit Raj |
| **Education** | 1st Year B.Tech CSE at **Galgotias University** |
| **Core Expertise** | Backend Development & Logical Architecture |
| **YouTube** | [AQUAIMMORTAL Official Channel](https://youtube.com/@AQUAIMMORTAL) |

### 📜 Certifications
* **C Programming:** Advanced Logic & Syntax
* **Java Basics:** Object-Oriented Fundamentals
* **Python Basics:** Data Structures & Automation

---

## 📝 License

This project is licensed under the [MIT License](./LICENSE).


---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/aquaimmortal7/Task-Planner/issues).

## ⭐️ Show your support
Give a ⭐️ if this project helped you!
