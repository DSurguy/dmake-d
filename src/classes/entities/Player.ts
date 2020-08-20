import Entity from "../Entity";
import playerSpriteFactory from "../../sprites/playerSpriteFactory";

export default class Player extends Entity {
  constructor() {
    super();

    this.sprite = playerSpriteFactory();
  }
}