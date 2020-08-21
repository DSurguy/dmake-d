import GameState from "./GameState";

type GameLoopHook = (delta: number, gameState: GameState) => void;
export default class GameLoop {
  private hooks: GameLoopHook[] = [];

  constructor(
    public gameState: GameState
  ) {}

  handler(delta: number) {
    for( let hook of this.hooks ){
      hook(delta, this.gameState);
    }
  }

  addHook(hook: GameLoopHook){
    if( !this.hooks.includes(hook) ) this.hooks.push(hook);
  }

  removeHook(hookToRemove: GameLoopHook) {
    this.hooks = this.hooks.filter(hook => hook !== hookToRemove);
  }
}