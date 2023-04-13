import { create } from "zustand";

interface ReactStore {
  login: boolean;
  pickGame: boolean;
  gameOver: boolean;
  winner: boolean;
  toggleLogin: () => void;
  togglePickGame: () => void;
  toggleGameOver: () => void;
  setWinner: (winner: boolean) => void;
}

const reactStore = create<ReactStore>()((set) => ({
  login: true,
  pickGame: false,
  gameOver: false,
  winner: false,
  toggleLogin: () => set((state) => ({ login: !state.login })),
  togglePickGame: () => set((state) => ({ pickGame: !state.pickGame })),
  toggleGameOver: () => set((state) => ({ gameOver: !state.gameOver })),
  setWinner: (win: boolean) =>
    set((_state) => ({ winner: win, gameOver: true })),
}));

export default reactStore;
