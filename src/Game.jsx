import { useState } from "react";
import "./index.css";
import Styles from "./App.module.css";

/* ----- HAND IMAGES ----- */

import rock from "./assets/images/rock.webp";
import paper from "./assets/images/paper.webp";
import scissors from "./assets/images/scissors.webp";
import rock2 from "./assets/images/rock2.webp";
import paper2 from "./assets/images/paper2.webp";
import scissors2 from "./assets/images/scissors2.webp";

function Game() {
  const [selectedImage, setSelectedImage] = useState(null);
  const computerChoice = [rock2, paper2, scissors2];
  const randomImage = computerChoice[Math.floor(Math.random() * 3)];

  return (
    <div className={Styles.container}>
      {/* ----- HEADER ----- */}
      <h1 className={Styles.title}>ROCK, PAPER, SCISSORS</h1>
      {/* ----- GAME CONTAINER ----- */}
      <div className={Styles.gameContainer}>
        <div className={Styles.playerImage}>{selectedImage}</div>

        <div className={Styles.scoreContainer}>
          <div className={Styles.score}>
            <p>Score</p>
            <p></p>
          </div>
        </div>

        <div className={Styles.computerImage}>{randomImage}</div>
      </div>
      {/* ----- BUTTON CONTAINER ----- */}
      <div className={Styles.buttonContainer}>
        <button
          className={Styles.button}
          onClick={() =>
            setSelectedImage(
              <img
                src={rock}
                alt="Rock"
              />
            )
          }>
          Rock
        </button>
        <button
          className={Styles.button}
          onClick={() =>
            setSelectedImage(
              <img
                src={paper}
                alt="Paper"
              />
            )
          }>
          Paper
        </button>
        <button
          className={Styles.button}
          onClick={() =>
            setSelectedImage(
              <img
                src={scissors}
                alt="Scissors"
              />
            )
          }>
          Scissors
        </button>
      </div>
    </div>
  );
}

export default Game;
