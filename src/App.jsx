import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DarkModeContext } from "./context/DarkModeContext";
import { FormTask, Tasks, NumberTask, FilterTasks, Footer } from "./components";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";
import "./scss/app.scss";

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

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const deleteTasksComplete = () =>
    setTasks(tasks.filter((task) => !task.complete));

  const filteredActiveTasks = () =>
    setFilteredTasks(tasks.filter((task) => !task.complete));

  const filteredCompleteTasks = () =>
    setFilteredTasks(tasks.filter((task) => task.complete));

  const allTasks = () => setFilteredTasks([]);

  const tasksToComplete = tasks.filter((task) => task.complete === false);

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

        {tasks.length ? (
          <NumberTask
            tasksToComplete={tasksToComplete}
            deleteTasksComplete={deleteTasksComplete}
            allTasks={allTasks}
            filteredActiveTasks={filteredActiveTasks}
            filteredCompleteTasks={filteredCompleteTasks}
          />
        ) : (
          <h2 className="zeroTasks">
            No existen tareas, comienza a crear una...
          </h2>
        )}

        <FilterTasks
          allTasks={allTasks}
          filteredActiveTasks={filteredActiveTasks}
          filteredCompleteTasks={filteredCompleteTasks}
        />

        {tasks.length > 0 && <Footer text="Drag and Drop to reorder list" />}
      </main>
    </>
  );
};

export default App;
