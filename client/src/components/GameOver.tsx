import reactStore from "../services/zustand";
import { emitter } from "../services/events";

export default function GameOver() {
  const { toggleGameOver, togglePickGame, winner } = reactStore();
  const handlePlayAgain = () => {
    emitter.emit("gameRestart");
    toggleGameOver();
  };
  const handleDifGame = () => {
    toggleGameOver();
    togglePickGame();
  };
  return (
    <>
      <h1>{winner ? "You Won!" : "You LOST!"}</h1>
      <button onClick={handlePlayAgain}>Play Again?</button>
      <button onClick={handleDifGame}>Pick a Different Game</button>
    </>
  );
}
