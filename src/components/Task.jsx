import iconCheck from "../assets/images/icon-check.svg";
import iconCross from "../assets/images/icon-cross.svg";

export const Task = ({
  completeTask = false,
  toggleCompleteTask = (f) => f,
}) => {
  return (
    <div className="todo-task">
      <figure
        className="todo-task--figure"
        style={
          completeTask
            ? {
                border: "none",
                background:
                  "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
              }
            : { background: "transparent" }
        }
        onClick={toggleCompleteTask}
      >
        <img src={iconCheck} alt="check" className="todo-task--check" />
      </figure>
      <p
        className={`${
          completeTask ? "todo-task--textCompleted" : "todo-task--text"
        }`}
      >
        Aprender TDD
      </p>
      <button type="button" className="todo-task--button">
        <img src={iconCross} alt="close" className="todo-task--close" />
      </button>
    </div>
  );
};
