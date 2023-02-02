import { useContext, useState } from "react";
import { Footer } from "./components/Footer";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";
import "./scss/app.scss";
import { Task } from "./components/Task";
import { DarkModeContext } from "./context/DarkModeContext";

const App = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [completeTask, setCompleteTask] = useState(false);

  const toggleCompleteTask = () => setCompleteTask(!completeTask);

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

          <div className="todo-input">
            <div className="todo-input--circle"></div>
            <input type="text" placeholder="Create a new todo..." />
          </div>
        </section>

        <section className="todo-tasks paddingPaginaGlobal">
          <Task
            completeTask={completeTask}
            toggleCompleteTask={toggleCompleteTask}
          />
          <Task
            completeTask={completeTask}
            toggleCompleteTask={toggleCompleteTask}
          />
          <Task
            completeTask={completeTask}
            toggleCompleteTask={toggleCompleteTask}
          />
          <Task
            completeTask={completeTask}
            toggleCompleteTask={toggleCompleteTask}
          />
          <Task
            completeTask={completeTask}
            toggleCompleteTask={toggleCompleteTask}
          />

          <div className="todo-task todo-task--total">
            <span>5 items left</span>

            <section className="todo-actions--desktop">
              <button
                type="button"
                className="todo-task--clearCompleted desktop"
              >
                All
              </button>
              <button
                type="button"
                className="todo-task--clearCompleted desktop"
              >
                Active
              </button>
              <button
                type="button"
                className="todo-task--clearCompleted desktop"
              >
                Completed
              </button>
            </section>

            <button className="todo-task--clearCompleted">
              Clear Completed
            </button>
          </div>

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
