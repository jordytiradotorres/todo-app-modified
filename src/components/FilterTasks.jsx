export const FilterTasks = ({
  filteredActiveTasks = (f) => f,
  filteredCompleteTasks = (f) => f,
  allTasks = (f) => f,
}) => {
  return (
    <section className="todo-actions paddingPaginaGlobal">
      <button type="button" onClick={allTasks}>
        All
      </button>
      <button type="button" onClick={filteredActiveTasks}>
        Active
      </button>
      <button type="button" onClick={filteredCompleteTasks}>
        Completed
      </button>
    </section>
  );
};
