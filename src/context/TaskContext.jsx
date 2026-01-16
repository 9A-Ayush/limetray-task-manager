// Phase 3: Global State Management using Context API
// File: src/context/TaskContext.jsx

import { createContext, useContext, useCallback, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Create Context
const TaskContext = createContext(null);

// Custom hook for consuming TaskContext
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

// Provider component
export const TaskProvider = ({ children }) => {
  // Persist tasks using custom useLocalStorage hook
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  // Add a new task
  const addTask = useCallback((title) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(), // simple unique id for demo purposes
        title: trimmedTitle,
        completed: false,
      },
    ]);
  }, [setTasks]);

  // Toggle task completion status
  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }, [setTasks]);

  // Delete a task
  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, [setTasks]);

  // Reorder tasks after drag-and-drop
  const reorderTasks = useCallback((sourceIndex, destinationIndex) => {
    setTasks((prev) => {
      const updatedTasks = Array.from(prev);
      const [movedTask] = updatedTasks.splice(sourceIndex, 1);
      updatedTasks.splice(destinationIndex, 0, movedTask);
      return updatedTasks;
    });
  }, [setTasks]);

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    reorderTasks,
  }), [tasks, addTask, toggleTask, deleteTask, reorderTasks]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

// This Context centralizes all task-related state and actions
// making the application scalable and easy to maintain.