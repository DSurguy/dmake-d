import {PlayerFacing} from "../../../classes/entities/Player/types";
import mouseDragHandler from "../../mouseDragHandler";
import angleBetweenPoints from "../../../utils/angleBetweenPoints";
import {Point} from "../../../types";
import GameState from "../../GameState";

const angleToFacing = [
  [0, 22.5, PlayerFacing.left],
  [45-22.5, 45+22.5, PlayerFacing.upLeft],
  [90-22.5, 90+22.5, PlayerFacing.up],
  [135-22.5, 135+22.5, PlayerFacing.upRight],
  [180-22.5, 180+22.5, PlayerFacing.right],
  [225-22.5, 225+22.5, PlayerFacing.downRight],
  [270-22.5, 270+22.5, PlayerFacing.down],
  [315-22.5, 315+22.5, PlayerFacing.downLeft],
  [360-22.5, 360, PlayerFacing.left]
];

export default function dragToMovePlayer(delta: number, gameState: GameState) {
  if( mouseDragHandler.mousePosition ){
    const angle = angleBetweenPoints(gameState.player.sprite.position as Point, mouseDragHandler.mousePosition);
    for( let [lowerBound, upperBound, facing] of angleToFacing ){
      if( angle >= lowerBound && angle < upperBound ){
        gameState.player.facing = facing;
        break;
      }
    }
  }
}