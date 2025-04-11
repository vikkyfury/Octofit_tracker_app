# 🏋️‍♂️ Octofit Tracker App

The **Octofit Tracker App** is a comprehensive full-stack fitness tracking application built to help gym teachers manage and monitor student fitness activities. The application provides user-friendly tools for logging workouts, tracking progress, and administering fitness programs in a high school setting.


---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Application Structure](#application-structure)


---

## 📖 Overview

The Octofit Tracker App provides gym instructors with a complete toolset to manage student fitness goals. It supports logging workouts, monitoring trends, and visualizing performance, all within a responsive and modern interface.

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
- **Development Tools**: Visual Studio Code, GitHub Codespaces  

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



