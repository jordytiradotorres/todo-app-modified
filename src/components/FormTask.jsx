import PropTypes from "prop-types";
import { useContext } from "react";
import { DarkModeContext, DarkModeProvider } from "../context/DarkModeContext";

export const FormTask = ({
  taskValue = "",
  setTaskValue = (f) => f,
  addTask = (f) => f,
}) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="todo-input">
      <div className="todo-input--circle"></div>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Crea una nueva tarea..."
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          className={`${darkMode ? "todo-input-dark" : "todo-input-light"}`}
        />
      </form>
    </div>
  );
};

FormTask.propTypes = {
  taskValue: PropTypes.string.isRequired,
  setTaskValue: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};
