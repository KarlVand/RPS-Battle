import { useState, useRef } from "react";
import "./index.css";
import Styles from "./App.module.css";

/* ----- HAND IMAGES ----- */

import rock from "./assets/images/rock.webp";
import paper from "./assets/images/paper.webp";
import scissors from "./assets/images/scissors.webp";
import rock2 from "./assets/images/rock2.webp";
import paper2 from "./assets/images/paper2.webp";
import scissors2 from "./assets/images/scissors2.webp";

/* ------------------------------------------------------------------------ GAME FUNCTION ----- */
function Game() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [computerImage, setComputerImage] = useState(null);
  const [result, setResult] = useState(null);
  const playerScore = useRef(0);
  const computerScore = useRef(0);
  const computerChoices = [rock2, paper2, scissors2];

  /* ----- COMPUTER CHOICE ----- */
  const computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const randomImage = computerChoices[randomIndex];
    setComputerImage(
      <img
        src={randomImage}
        alt={
          randomImage === rock2
            ? "Rock"
            : randomImage === paper2
            ? "Paper"
            : "Scissors"
        }
      />
    );
    return randomImage;
  };

  /* ----- PLAYER CHOICE ----- */
  const playerChoice = choice => {
    setSelectedImage(
      <img
        src={choice}
        alt={choice === rock ? "Rock" : choice === paper ? "Paper" : "Scissors"}
      />
    );
    const compChoice = computerChoice();
    updateScore(choice, compChoice);
  };
  /* -----  SCORE ----- */
  const updateScore = (playerChoice, computerChoice) => {
    if (
      (playerChoice === rock && computerChoice === scissors2) ||
      (playerChoice === paper && computerChoice === rock2) ||
      (playerChoice === scissors && computerChoice === paper2)
    ) {
      playerScore.current += 1;
      setResult("You win!");
    } else if (
      (playerChoice === rock && computerChoice === paper2) ||
      (playerChoice === paper && computerChoice === scissors2) ||
      (playerChoice === scissors && computerChoice === rock2)
    ) {
      computerScore.current += 1;
      setResult("Computer wins!");
    } else {
      setResult("Tie!");
    }
  };

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
            <p className="pScore">{playerScore.current}</p>
            <p className="cScore">{computerScore.current}</p>
            <p className="commentScore">{result}</p>
          </div>
        </div>

        <div className={Styles.computerImage}>{computerImage}</div>
      </div>
      {/* ----- BUTTON CONTAINER ----- */}
      <div className={Styles.buttonContainer}>
        <button
          className={Styles.button}
          onClick={() => playerChoice(rock)}>
          Rock
        </button>
        <button
          className={Styles.button}
          onClick={() => playerChoice(paper)}>
          Paper
        </button>
        <button
          className={Styles.button}
          onClick={() => playerChoice(scissors)}>
          Scissors
        </button>
      </div>
    </div>
  );
}

export default Game;
