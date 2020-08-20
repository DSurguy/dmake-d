import Entity from "../../../Entity";
import {roomParamsFactory, roomSpriteFactory} from "./factories";

export default class Room extends Entity {
  constructor(params: ReturnType<typeof roomParamsFactory>) {
    super();
    this.sprite = roomSpriteFactory(params);
  }
}