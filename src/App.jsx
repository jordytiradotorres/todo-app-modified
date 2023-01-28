import { useState } from "react";
import { Footer } from "./components/Footer";
import "./scss/app.scss";

const urlGithubUser = "https://github.com/jordytiradotorres";

function App() {
  return (
    <div className="App">
      {/* Todo
      <!-- Add dynamic number --> items left

      All
      Active 
      Completed

      Clear Completed

      Drag and drop to reorder list */}

      <Footer urlGithubUser={urlGithubUser} />
    </div>
  );
}

export default App;
