import { useContext, useState } from "react";
import { Footer } from "./components/Footer";
import { Task } from "./components/Task";
import { v4 as uuidv4 } from "uuid";
import { DarkModeContext } from "./context/DarkModeContext";
import { NumberTask } from "./components/NumberTask";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";
import "./scss/app.scss";
import { FormTask } from "./components/FormTask";

const App = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Aprender TDD",
      complete: false,
    },
    {
      id: 2,
      text: "Aprender educacion financiera",
      complete: true,
    },
  ]);

  const [taskValue, setTaskValue] = useState("");

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

        <section className="todo-tasks paddingPaginaGlobal">
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              toggleCompleteTask={toggleCompleteTask}
            />
          ))}

          <NumberTask tasksToComplete={tasksToComplete} />

          <section className="todo-actions paddingPaginaGlobal">
            <button type="button">All</button>
            <button type="button">Active</button>
            <button type="button">Completed</button>
          </section>
        </section>

        <Footer text="Drag and Drop to reorder list" />
      </main>
    </>
  );
};

export default App;
