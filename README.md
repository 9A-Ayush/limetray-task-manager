# 📝 Task Manager App

A modern, responsive **Task Manager** built with **React** that supports task creation, completion tracking, filtering, drag-and-drop reordering, persistent theming, and localStorage-based data persistence.

---
## 🔗 Live Preview

🚀 **Live Demo:** [Click here to view the app](https://limetray-task-manager.vercel.app/)

---

## 🚀 Features

* ✅ Add, complete, and delete tasks
* 🔍 Filter tasks by **All / Completed / Pending**
* 🔀 Drag & Drop task reordering (**All view only**)
* 🌗 Light / Dark theme toggle with persistence
* 💾 Tasks and theme saved in `localStorage`
* 📱 Fully responsive UI
* ⚡ Built using modern React patterns

---

## 🛠 Tech Stack

* React 18
* Vite
* Context API
* @hello-pangea/dnd
* CSS Variables
* Custom Hooks

---

## 🧠 Architecture Overview

```
src/
│
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   ├── FilterBar.jsx
│   └── ThemeToggle.jsx
│
├── context/
│   └── TaskContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── styles/
│   └── theme.css
│
├── App.jsx
├── main.jsx
```

---

## 📦 State Management

* Global task state managed using **Context API**
* Persistent storage handled via a custom `useLocalStorage` hook
* Derived task lists optimized using `useMemo`

---

## 🔀 Drag & Drop Logic

* Enabled **only in the “All” view**
* Filtered views (`Completed`, `Pending`) are read-only
* Prevents data inconsistency when reordering subsets

---

## 🌗 Theme System

* Implemented with **CSS variables**
* Applied using a `data-theme` attribute on `<html>`
* User preference persisted in `localStorage`

---

## 🎯 Key Design Decisions

1. **Context API over Redux** – Lightweight and sufficient for app scope
2. **Restricted Drag & Drop** – Ensures task order integrity
3. **CSS Variables** – Simple, performant theming solution
4. **localStorage Persistence** – No backend required
5. **Component-Based Architecture** – Clean, reusable, maintainable

---

## 🖼 Screenshots

<p align="center">
  <img src="./light.png" alt="Light Theme" width="45%" />
  <img src="./dark.png" alt="Dark Theme" width="45%" />
</p>

---

## ▶️ Getting Started

### Clone the repository

```bash
git clone https://github.com/9A-Ayush/limetray-task-manager.git
cd limetray-task-manager
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

App runs at: `http://localhost:5173`

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 🧪 Testing

* Vitest
* React Testing Library

```bash
npm run test
```

---


## 👨‍💻 Author

**Ayush Kumar**\
[![GitHub](https://img.shields.io/badge/GitHub-9A--Ayush-black?logo=github)](https://github.com/9A-Ayush)\
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ayush%20Kumar-blue?logo=linkedin)](http://www.linkedin.com/in/ayush-kumar-849a1324b)\
[![Instagram](https://img.shields.io/badge/Instagram-%40ayush__ix__xi-pink?logo=instagram)](https://www.instagram.com/ayush_ix_xi)

---
## ☕ Support My Work  

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/9a.ayush)

---
## 📄 License

Licensed under the **MIT License**.

---

Made with ❤️ by Ayush
