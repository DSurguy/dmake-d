import {Point} from "../../../types";
import GameState from "../../GameState";

export default function dragToQueuePlayerMovement(point: Point, gameState: GameState) {
  gameState.playerMovement.moveTo = {...point};
}