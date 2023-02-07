import React from "react";

export const NumberTask = ({
  tasksToComplete = [],
  deleteTasksComplete = (f) => f,
}) => {
  return (
    <div className="todo-task todo-task--total paddingPaginaGlobal">
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

      <button
        className="todo-task--clearCompleted"
        onClick={deleteTasksComplete}
      >
        Clear Completed
      </button>
    </div>
  );
};
