import "./App.css";
import GameOver from "./components/GameOver";
import Login from "./components/Login";
import Modal from "./components/Modal";
import PickAGame from "./components/PickAGame";
import reactStore from "./services/zustand";
import { onGameOver } from "./services/events";

function App() {
  const { login, pickGame, gameOver, setWinner } = reactStore();

  // this is absolutely the wrong way to do it
  // I don't know how to set this callback
  // without it being reset a zillion times
  // this is a React issue and I don't know what to Google
  onGameOver((winner) => {
    setWinner(winner);
  });

  return (
    <div className="App">
      {login && (
        <Modal>
          <Login />
        </Modal>
      )}
      {pickGame && (
        <Modal>
          <PickAGame />
        </Modal>
      )}
      {gameOver && (
        <Modal>
          <GameOver />
        </Modal>
      )}
    </div>
  );
}

export default App;
