import Entity from "../../Entity";
import {playerSpriteFactory} from "./factories";
import {PlayerFacing} from "./types";

export default class Player extends Entity {
  _facing: PlayerFacing = PlayerFacing.up;

  constructor() {
    super();
    this.sprite = playerSpriteFactory();
  }

  get facing() {
    return this._facing;
  }
  set facing(value) {
    this._facing = value;
    switch(this._facing) {
      case PlayerFacing.up: this.sprite.angle = 0; break;
      case PlayerFacing.upRight: this.sprite.angle = 45; break;
      case PlayerFacing.right: this.sprite.angle = 90; break;
      case PlayerFacing.downRight: this.sprite.angle = 135; break;
      case PlayerFacing.down: this.sprite.angle = 180; break;
      case PlayerFacing.downLeft: this.sprite.angle = 225; break;
      case PlayerFacing.left: this.sprite.angle = 270; break;
      case PlayerFacing.upLeft: this.sprite.angle = 315; break;
    }
  }
}