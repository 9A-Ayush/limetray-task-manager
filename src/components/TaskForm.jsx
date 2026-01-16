import { useState, useCallback } from "react";
import { useTasks } from "../context/TaskContext";

export const TaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const trimmed = title.trim();

    if (!trimmed) {
      setError("Task cannot be empty");
      return;
    }

    addTask(trimmed);
    setTitle("");
    setError("");
  }, [title, addTask]);

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
      {error && <span className="error">{error}</span>}
    </form>
  );
};