import Entity from "../../Entity";
import {playerSpriteFactory} from "./factories";
import {PlayerFacing} from "./types";

export default class Player extends Entity {
  facing: PlayerFacing = PlayerFacing.up;

  constructor() {
    super();
    this.sprite = playerSpriteFactory();
  }
}