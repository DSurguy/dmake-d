import { InteractionEvent } from "pixi.js";
import GameState from "../../GameState";

export default function clickToQueuePlayerMovement(e: InteractionEvent, gameState: GameState) {
  const clickPoint = e.data.global;
  gameState.playerMovement.moveTo = {
    x: clickPoint.x,
    y: clickPoint.y
  };
}