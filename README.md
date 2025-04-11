# 🏋️‍♂️ Octofit Tracker App

Welcome to the **Octofit Tracker App** — a comprehensive full-stack fitness tracking application designed and developed from the ground up using **GitHub Copilot's Agent Mode**. This project showcases the capabilities of AI-assisted development in creating robust applications efficiently.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Application Structure](#application-structure)


---

## 📖 Overview

The Octofit Tracker App is tailored for high school gym teachers to monitor and manage students' fitness activities. Leveraging GitHub Copilot's agent mode, the application was developed by providing natural language prompts, allowing the AI to generate and refine code iteratively.

---

## ✨ Features

- **User Authentication**: Secure login and registration functionalities.  
- **Workout Logging**: Users can record various fitness activities.  
- **Progress Tracking**: Visual representations of fitness progress over time.  
- **Admin Dashboard**: Gym teachers can view and manage student data.  
- **Responsive Design**: Ensures usability across devices.  

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Python, FastAPI  
- **Database**: MongoDB  
- **Development Tools**: GitHub Copilot (Agent Mode), Visual Studio Code, GitHub Codespaces  

---

## 🚀 Setup Instructions

### 🔹 Clone the Repository
```bash
git clone https://github.com/vikkyfury/Octofit_tracker_app.git
cd Octofit_tracker_app
```

### 🔹 Backend Setup
```bash
cd octofit-tracker/backend
python -m venv venv

# Activate the virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload

```
### 🔹 Frontend Setup
```bash
cd ../frontend

# Install frontend dependencies
npm install

# Start the development server
npm run dev
```

###🔹 Access the App
```bash
Frontend: http://localhost:3000

Backend API: http://localhost:8000
```

## 📁 Project Structure
```bash
Octofit_tracker_app/
├── octofit-tracker/
│   ├── backend/
│   │   ├── main.py
│   │   ├── requirements.txt
│   │   └── ...additional backend files
│   └── frontend/
│       ├── package.json
│       ├── tailwind.config.js
│       └── ...additional frontend files
├── docs/
│   ├── mona-high-school-fitness-tracker.md
│   └── octofit_story.md
├── .devcontainer/
├── .vscode/
├── .github/
├── LICENSE
└── README.md
```



