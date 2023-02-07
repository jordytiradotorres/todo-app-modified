import React from "react";
import { Task } from "./Task";

export const Tasks = ({
  tasks = [],
  toggleCompleteTask = (f) => f,
  deleteTask = (f) => f,
}) => {
  return (
    <section className="todo-tasks paddingPaginaGlobal">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          toggleCompleteTask={toggleCompleteTask}
          deleteTask={deleteTask}
        />
      ))}
    </section>
  );
};
