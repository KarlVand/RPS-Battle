import { useState } from "react";
import "./index.css";
import Styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={Styles.container}>
      {/* ----- HEADER ----- */}
      <h1 className={Styles.title}>ROCK, PAPER, SCISSORS</h1>
      {/* ----- GAME CONTAINER ----- */}
      <div className={Styles.gameContainer}>
        <div className={Styles.playerImage}></div>

        <div className={Styles.scoreContainer}>
          <div className={Styles.score}>
            <p>Score</p>
            <p>{count}</p>
          </div>
        </div>

        <div className={Styles.computerImage}></div>
      </div>
      {/* ----- BUTTON CONTAINER ----- */}
      <div className={Styles.buttonContainer}></div>
    </div>
  );
}

export default App;
