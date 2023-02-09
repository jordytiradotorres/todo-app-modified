import PropTypes from "prop-types";
import iconCheck from "../assets/images/icon-check.svg";
import iconCross from "../assets/images/icon-cross.svg";

export const Task = ({
  toggleCompleteTask = (f) => f,
  deleteTask = (f) => f,
  id,
  text,
  complete,
}) => {
  return (
    <div className="todo-task">
      <figure
        className="todo-task--figure"
        style={
          complete
            ? {
                border: "none",
                background:
                  "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
              }
            : { background: "transparent" }
        }
        onClick={() => toggleCompleteTask(id)}
      >
        <img
          src={iconCheck}
          alt="check"
          className={`${
            complete
              ? "todo-task--check todo-task--checkDark"
              : "todo-task--check"
          }`}
        />
      </figure>
      <p
        className={`${
          complete ? "todo-task--textCompleted" : "todo-task--text"
        }`}
        onClick={() => toggleCompleteTask(id)}
      >
        {text}
      </p>
      <button
        type="button"
        className="todo-task--button"
        onClick={() => deleteTask(id)}
      >
        <img src={iconCross} alt="close" className="todo-task--close" />
      </button>
    </div>
  );
};

Task.propTypes = {
  toggleCompleteTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  id: PropTypes.string,
  text: PropTypes.string,
  complete: PropTypes.bool,
};
