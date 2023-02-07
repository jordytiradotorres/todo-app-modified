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
import { Tasks } from "./components/Tasks";

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

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const deleteTasksComplete = () =>
    setTasks(tasks.filter((task) => !task.complete));

  const tasksToComplete = tasks.filter((task) => task.complete === false);

  // todas las tareas
  const showAllTasks = () => {
    setTasks(
      tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          toggleCompleteTask={toggleCompleteTask}
          deleteTask={deleteTask}
        />
      ))
    );
  };

  const showActiveTasks = () => {
    setTasks(tasks.filter((task) => !task.complete));
  };

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

        <Tasks
          tasks={tasks}
          toggleCompleteTask={toggleCompleteTask}
          deleteTask={deleteTask}
        />

        <NumberTask
          tasksToComplete={tasksToComplete}
          deleteTasksComplete={deleteTasksComplete}
        />

        <section className="todo-actions paddingPaginaGlobal">
          <button type="button" onClick={showAllTasks}>
            All
          </button>
          <button type="button" onClick={showActiveTasks}>
            Active
          </button>
          <button type="button">Completed</button>
        </section>

        <Footer text="Drag and Drop to reorder list" />
      </main>
    </>
  );
};

export default App;
