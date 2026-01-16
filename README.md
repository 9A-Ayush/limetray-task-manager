# 📝 Task Manager App

A modern, responsive **Task Manager** built with **React** that supports task creation, completion tracking, filtering, drag-and-drop reordering, persistent theming, and local storage–based data persistence.

---

## 🚀 Features

- ✅ Add, complete, and delete tasks
- 🔍 Filter tasks by **All / Completed / Pending**
- 🔀 Drag & Drop task reordering (enabled in *All* view)
- 🌗 Light / Dark theme toggle with persistence
- 💾 Tasks and theme saved in `localStorage`
- 📱 Fully responsive UI
- ⚡ Built using modern React patterns

---

## 🛠 Tech Stack

- React 18
- Vite
- Context API
- @hello-pangea/dnd
- CSS Variables
- Custom Hooks

---

## 🧠 Architecture Overview

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


---

## 📦 State Management

- Context API is used to manage tasks globally.
- A custom `useLocalStorage` hook ensures tasks and theme persist across page reloads.
- Derived state is memoized using `useMemo` for better performance.

---

## 🔀 Drag & Drop Behavior

- Drag & Drop is enabled **only in the “All” view**.
- Filtered views (`Completed`, `Pending`) display derived task lists.
- Restricting reordering to the All view avoids data inconsistency and preserves task integrity.

---

## 🌗 Theme System

- Implemented using CSS variables
- Theme is applied using a `data-theme` attribute on the `<html>` element
- User preference is persisted in localStorage

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

The app will be available at `http://localhost:5173`

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm preview
```

---

## 📝 Usage

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Complete a Task**: Click the checkbox next to a task to mark it as complete
3. **Delete a Task**: Click the delete button (×) to remove a task
4. **Filter Tasks**: Use the filter buttons to view All, Completed, or Pending tasks
5. **Reorder Tasks**: In "All" view, drag and drop tasks to reorder them
6. **Toggle Theme**: Click the theme toggle button to switch between light and dark modes

---

## 🎨 Features in Detail

### Task Management
- Create tasks with a simple input form
- Mark tasks as complete/incomplete with visual feedback
- Delete tasks with confirmation
- Tasks persist across browser sessions

### Filtering System
- **All**: View all tasks with drag-and-drop enabled
- **Completed**: View only completed tasks
- **Pending**: View only pending tasks

### Drag & Drop
- Powered by `@hello-pangea/dnd`
- Smooth animations and visual feedback
- Only available in "All" view to maintain data consistency
- Reordered tasks are automatically saved

### Theme System
- Light and dark themes
- Smooth transitions between themes
- Theme preference saved in localStorage
- CSS variables for easy customization

---

## 🏗️ Project Structure

```
limetray-task-manager/
├── public/
│   └── task-icon.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── FilterBar.jsx      # Task filtering UI
│   │   ├── TaskForm.jsx        # Task creation form
│   │   ├── TaskItem.jsx        # Individual task component
│   │   ├── TaskList.jsx        # Task list with drag-and-drop
│   │   └── ThemeToggle.jsx     # Theme switcher
│   ├── context/
│   │   └── TaskContext.jsx     # Global state management
│   ├── hooks/
│   │   └── useLocalStorage.js  # localStorage persistence hook
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles and theme
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧩 Component Details

### TaskContext
- Manages global task state
- Provides task CRUD operations
- Handles task filtering and reordering
- Persists data to localStorage

### TaskForm
- Controlled input for task creation
- Validates empty submissions
- Clears input after task creation

### TaskList
- Displays filtered tasks
- Implements drag-and-drop functionality
- Conditionally enables reordering based on filter

### TaskItem
- Displays individual task details
- Handles completion toggle
- Provides delete functionality
- Draggable in "All" view

### FilterBar
- Provides filter buttons (All/Completed/Pending)
- Highlights active filter
- Updates task display dynamically

### ThemeToggle
- Switches between light and dark themes
- Persists theme preference
- Updates CSS variables

---

## 🔧 Custom Hooks

### useLocalStorage
- Syncs state with localStorage
- Handles JSON serialization/deserialization
- Provides automatic persistence
- Used for both tasks and theme

---

## 🎯 Design Decisions

1. **Context API over Redux**: For this app's scope, Context API provides sufficient state management without additional dependencies

2. **Drag & Drop in "All" View Only**: Prevents data inconsistencies when reordering filtered subsets of tasks

3. **CSS Variables for Theming**: Enables dynamic theme switching without CSS-in-JS overhead

4. **localStorage for Persistence**: Simple, effective solution for client-side data persistence without backend requirements

5. **Component Composition**: Small, focused components for better maintainability and reusability

---

## 🚀 Future Enhancements

- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search functionality
- [ ] Task editing
- [ ] Export/Import tasks
- [ ] Backend integration
- [ ] User authentication
- [ ] Task sharing

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Ayush**

- GitHub: [@9A-Ayush](https://github.com/9A-Ayush)
- Project Link: [https://github.com/9A-Ayush/limetray-task-manager](https://github.com/9A-Ayush/limetray-task-manager)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for blazing fast development experience
- @hello-pangea/dnd for drag-and-drop functionality

---

Made with ❤️ by Ayush
