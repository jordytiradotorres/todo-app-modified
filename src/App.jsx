import { useState } from "react";
import "./scss/app.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Todo
      <!-- Add dynamic number --> items left

      All
      Active 
      Completed

      Clear Completed

      Drag and drop to reorder list */}
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
