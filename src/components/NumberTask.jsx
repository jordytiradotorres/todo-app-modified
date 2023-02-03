import React from "react";

export const NumberTask = ({ tasksToComplete = [] }) => {
  return (
    <div className="todo-task todo-task--total">
      {tasksToComplete.length ? (
        <span>{tasksToComplete.length} tarea por completar</span>
      ) : (
        <span>Tareas completadas</span>
      )}

      <section className="todo-actions--desktop">
        <button type="button" className="todo-task--clearCompleted desktop">
          All
        </button>
        <button type="button" className="todo-task--clearCompleted desktop">
          Active
        </button>
        <button type="button" className="todo-task--clearCompleted desktop">
          Completed
        </button>
      </section>

      <button className="todo-task--clearCompleted">Clear Completed</button>
    </div>
  );
};
