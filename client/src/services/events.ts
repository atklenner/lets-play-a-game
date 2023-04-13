import { createNanoEvents } from "nanoevents";
import { Game } from "../../../types/games";

export const emitter = createNanoEvents();

let debounce = false;

export function onGamePick(cb: (game: Game) => void) {
  emitter.on("gamePick", cb);
}

export function onGameOver(cb: (win: boolean) => void) {
  // because this callback gets set a zillion times
  if (debounce) {
    return;
  }
  emitter.on("gameOver", cb);
  debounce = true;
}

export function onGameRestart(cb: () => void) {
  emitter.on("gameRestart", cb);
}
