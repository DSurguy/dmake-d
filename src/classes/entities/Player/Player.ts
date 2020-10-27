import Entity from "../../Entity";
import {playerSpriteFactory} from "./factories";

const normalizeAngle = (angle: number) => {
  let normalizedAngle = angle;
  while( normalizedAngle < 0 ) normalizedAngle += 360;
  while ( normalizedAngle > 360 ) normalizedAngle -= 360;
  return normalizedAngle;
}

export default class Player extends Entity {
  private _facing: number = 0;

  constructor() {
    super();
    this.sprite = playerSpriteFactory();
  }

  get facing() {
    return this._facing;
  }
  set facing(angle) {
    this._facing = normalizeAngle(angle);
    this.sprite.angle = this._facing;
  }
}