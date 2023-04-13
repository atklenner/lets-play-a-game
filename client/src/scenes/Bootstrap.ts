import Phaser from "phaser";
import TicTacToeServer from "../services/TicTacToeServer";
import { emitter, onGamePick, onGameRestart } from "../services/events";
import { Game } from "../../../types/games";

export default class Bootstrap extends Phaser.Scene {
  private server!: TicTacToeServer;
  private currentGame: Game = Game.TicTacToe;

  constructor() {
    super("bootstrap");
  }

  init() {
    this.server = new TicTacToeServer();
    onGamePick((game: Game) => this.createNewGame(game));
    onGameRestart(() => this.handleRestart());
  }

  create() {
    this.scene.launch("starfield");
  }

  private handleGameOver = (winner: boolean) => {
    this.server.leave();
    this.scene.stop(this.currentGame);
    this.scene.launch("starfield");
    emitter.emit("gameOver", winner);
  };

  private handleRestart = () => {
    this.scene.stop("starfield");
    this.scene.launch(this.currentGame, {
      server: this.server,
      onGameOver: this.handleGameOver,
    });
  };

  private createNewGame(gameId: Game) {
    this.currentGame = gameId;
    this.scene.stop("starfield");
    this.scene.launch(gameId, {
      server: this.server,
      onGameOver: this.handleGameOver,
    });
  }
}
