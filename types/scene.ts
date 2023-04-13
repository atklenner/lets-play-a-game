export interface IGameOverSceneData {
  winner: boolean;
  onRestart?: () => void;
}

export interface IGameSceneData {
  server: any;
  onGameOver: (winner: boolean) => void;
}
