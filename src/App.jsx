import { useState } from "react";
import { Footer } from "./components/Footer";
import iconMoon from "./assets/images/icon-moon.svg";
import "./scss/app.scss";
import { Task } from "./components/Task";

const urlGithubUser = "https://github.com/jordytiradotorres";

const App = () => {
  const [completeTask, setCompleteTask] = useState(false);

  const toggleCompleteTask = () => setCompleteTask(!completeTask);

  return (
    <>
      <main className="todo">
        <section className="todo-background paddingPaginaGlobal">
          <header className="todo-header">
            <h1>Todo</h1>
            <figure>
              <img src={iconMoon} alt="theme" />
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
      </main>

      <footer className="todo-footer">Drag and Drop to reorder list</footer>
    </>
  );
};

export default App;
