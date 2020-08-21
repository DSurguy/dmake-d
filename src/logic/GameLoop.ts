type GameLoopHook = (delta: number) => void;
export default class GameLoop {
  private hooks: GameLoopHook[] = [];

  handler(delta: number) {
    for( let hook of this.hooks ){
      hook(delta);
    }
  }

  addHook(hook: GameLoopHook){
    if( !this.hooks.includes(hook) ) this.hooks.push(hook);
  }

  removeHook(hookToRemove: GameLoopHook) {
    this.hooks = this.hooks.filter(hook => hook !== hookToRemove);
  }
}