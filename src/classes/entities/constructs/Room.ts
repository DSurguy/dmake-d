import Entity from "../../Entity";
import isDefined from "../../../utils/isDefined";
import roomSpriteFactory from "../../../sprites/roomSpriteFactory";

export default class Room extends Entity {
  constructor(params: {
    width: number;
    height: number;
  }) {
    super();
    this.sprite = roomSpriteFactory(params.width, params.height);
  }
}