export const FormTask = ({
  taskValue = "",
  setTaskValue = (f) => f,
  addTask = (f) => f,
}) => {
  return (
    <div className="todo-input">
      <div className="todo-input--circle"></div>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Crea una nueva tarea..."
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
      </form>
    </div>
  );
};
