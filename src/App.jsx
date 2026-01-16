import { TaskProvider } from "./context/TaskContext";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <TaskProvider>
      <div className="app-container">
        <div className="app-header">
          <ThemeToggle />
        </div>

        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
