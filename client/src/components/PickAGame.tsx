import reactStore from "../services/zustand";
import { Game } from "../../../types/games";
import { emitter } from "../services/events";

export default function PickAGame() {
  const { togglePickGame } = reactStore();
  const handleClick = (game: Game) => {
    emitter.emit("gamePick", game);
    togglePickGame();
  };

  return (
    <>
      <h1>Let's Play a Game!</h1>
      <button onClick={() => handleClick(Game.TicTacToe)}>Tic-Tac-Toe</button>
      <button>Uno</button>
      <button>Create a Room</button>
    </>
  );
}
