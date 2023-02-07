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
        <img src={iconCheck} alt="check" className="todo-task--check" />
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
