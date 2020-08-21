import Player from "../classes/entities/Player/Player";
import Entity from "../classes/Entity";

export default class GameState {
  player: Player = new Player();
  entities: Entity[] = [];
}