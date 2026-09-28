import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import TaskStats from "./components/TaskStats";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("All");

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  function addTask(title, category) {
    const newTask = {
      id: Date.now(),
      title: title,
      category: category,
      completed: false,
    };

    setTasks((previousTasks) => {
      return [...previousTasks, newTask];
    });
  }

  // Delete task
  function deleteTask(id) {
    setTasks((previousTasks) => {
      return previousTasks.filter((task) => task.id !== id);
    });
  }

  // Complete / uncomplete task
  function toggleTask(id) {
    setTasks((previousTasks) => {
      return previousTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      });
    });
  }

  // Edit task
  function editTask(id, newTitle, newCategory) {
    setTasks((previousTasks) => {
      return previousTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            title: newTitle,
            category: newCategory,
          };
        }

        return task;
      });
    });
  }

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") {
      return !task.completed;
    }

    if (filter === "Completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <div className="app">
      <div className="container">

        <header className="header">
          <h1>My Task Manager</h1>
          <p>Organize your daily tasks and stay productive.</p>
        </header>

        <TaskStats tasks={tasks} />

        <TaskForm onAddTask={addTask} />

        <FilterBar
          currentFilter={filter}
          onFilterChange={setFilter}
        />

        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
          onEdit={editTask}
        />

      </div>
    </div>
  );
}

export default App;