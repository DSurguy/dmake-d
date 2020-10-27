import angleBetweenPoints from "../../../utils/angleBetweenPoints";
import {Point} from "../../../types";
import GameState from "../../GameState";

const BASE_PLAYER_SPEED = 20;

export default function movePlayerToQueueLocation(delta: number, gameState: GameState) {
  if( gameState.playerMovement.moveTo ){
    gameState.player.facing = angleBetweenPoints(gameState.player.sprite.position as Point, gameState.playerMovement.moveTo) - 90;
  }
}