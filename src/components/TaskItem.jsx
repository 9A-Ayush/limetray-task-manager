import React from "react";
import { useTasks } from "../context/TaskContext";

export const TaskItem = React.memo(({ task, index }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.title}</span>
      <button onClick={() => deleteTask(task.id)}>✕</button>
    </div>
  );
});