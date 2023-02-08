import PropTypes from "prop-types";

export const NumberTask = ({
  tasksToComplete = [],
  deleteTasksComplete = (f) => f,
  allTasks = (f) => f,
  filteredActiveTasks = (f) => f,
  filteredCompleteTasks = (f) => f,
}) => {
  return (
    <div className="todo-task todo-task--total paddingPaginaGlobal">
      {tasksToComplete.length ? (
        <span>{tasksToComplete.length} tarea por completar</span>
      ) : (
        <span>Tareas completadas</span>
      )}

      <section className="todo-actions--desktop">
        <button
          type="button"
          className="todo-task--clearCompleted desktop"
          onClick={allTasks}
        >
          All
        </button>
        <button
          type="button"
          className="todo-task--clearCompleted desktop"
          onClick={filteredActiveTasks}
        >
          Active
        </button>
        <button
          type="button"
          className="todo-task--clearCompleted desktop"
          onClick={filteredCompleteTasks}
        >
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

NumberTask.propTypes = {
  tasksToComplete: PropTypes.array.isRequired,
  deleteTasksComplete: PropTypes.func,
  allTasks: PropTypes.func,
  filteredActiveTasks: PropTypes.func,
  filteredCompleteTasks: PropTypes.func,
};
