import { useContext, useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { v4 as uuidv4 } from "uuid";
import { DarkModeContext } from "./context/DarkModeContext";
import { NumberTask } from "./components/NumberTask";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";
import "./scss/app.scss";
import { FormTask } from "./components/FormTask";
import { Tasks } from "./components/Tasks";
import { FilterTasks } from "./components/FilterTasks";

const App = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  useEffect(() => {
    const tasksLS = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasksLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks) ?? []);
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();

    setTasks([
      {
        id: uuidv4(),
        text: taskValue.trim(),
        complete: false,
      },
      ...tasks,
    ]);

    setTaskValue("");
  };

  const toggleCompleteTask = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task
    );

    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const deleteTasksComplete = () =>
    setTasks(tasks.filter((task) => !task.complete));

  const tasksToComplete = tasks.filter((task) => task.complete === false);

  const filteredActiveTasks = () =>
    setFilteredTasks(tasks.filter((task) => !task.complete));

  const filteredCompleteTasks = () =>
    setFilteredTasks(tasks.filter((task) => task.complete));

  const allTasks = () => setFilteredTasks([]);

  return (
    <>
      <main className={`todo ${darkMode ? "dark" : "light"}`}>
        <section className="todo-background paddingPaginaGlobal">
          <header className="todo-header">
            <h1>Todo</h1>
            <figure onClick={toggleDarkMode}>
              {darkMode ? (
                <img src={iconSun} alt="icon moon" />
              ) : (
                <img src={iconMoon} alt="icon sun" />
              )}
            </figure>
          </header>

          <FormTask
            taskValue={taskValue}
            setTaskValue={setTaskValue}
            addTask={addTask}
          />
        </section>

        {filteredTasks.length ? (
          <Tasks
            tasks={filteredTasks}
            toggleCompleteTask={toggleCompleteTask}
            deleteTask={deleteTask}
          />
        ) : (
          <Tasks
            tasks={tasks}
            toggleCompleteTask={toggleCompleteTask}
            deleteTask={deleteTask}
          />
        )}

        <NumberTask
          tasksToComplete={tasksToComplete}
          deleteTasksComplete={deleteTasksComplete}
          allTasks={allTasks}
          filteredActiveTasks={filteredActiveTasks}
          filteredCompleteTasks={filteredCompleteTasks}
        />

        <FilterTasks
          allTasks={allTasks}
          filteredActiveTasks={filteredActiveTasks}
          filteredCompleteTasks={filteredCompleteTasks}
        />

        <Footer text="Drag and Drop to reorder list" />
      </main>
    </>
  );
};

export default App;
