import Player from "../classes/entities/Player/Player";
import Entity from "../classes/Entity";
import {Point} from "../types";

type PlayerMovement = {
  moveTo: Point | null;
}

export default class GameState {
  player: Player = new Player();
  entities: Entity[] = [];
  playerMovement: PlayerMovement = {
    moveTo: null
  };
}