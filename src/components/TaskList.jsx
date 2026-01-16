import { useState, useMemo } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useTasks } from "../context/TaskContext";
import { TaskItem } from "./TaskItem";
import { FilterBar } from "./FilterBar";

export const TaskList = () => {
  const { tasks, reorderTasks } = useTasks();
  const [filter, setFilter] = useState("all");

  const visibleTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter(t => t.completed);
    if (filter === "pending") return tasks.filter(t => !t.completed);
    return tasks;
  }, [tasks, filter]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    if (filter !== "all") return;

    reorderTasks(
      result.source.index,
      result.destination.index
    );
  };

  return (
    <div className="task-list">
      <FilterBar current={filter} onChange={setFilter} />

      {filter !== "all" && (
        <p style={{ textAlign: "center", fontSize: "0.85rem", opacity: 0.7 }}>
          Drag & drop is available only in “All” view
        </p>
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks" isDropDisabled={filter !== "all"}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {visibleTasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={String(task.id)}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskItem task={task} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
