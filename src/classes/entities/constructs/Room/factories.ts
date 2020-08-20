import { DEFAULT_ROOM_SIZE } from "../../../../constants";
import { RoomDoor } from "./types";
import { Sprite, Texture, BaseTexture } from "pixi.js";

export function roomParamsFactory () {
  return {
    width: DEFAULT_ROOM_SIZE,
    height: DEFAULT_ROOM_SIZE,
    doors: [] as RoomDoor[]
  }
}

export function roomSpriteFactory(params: ReturnType<typeof roomParamsFactory> = roomParamsFactory()) {
  const canvas = document.createElement("canvas");
  canvas.width = params.width;
  canvas.height = params.height;
  const ctx = canvas.getContext("2d");
  if( !ctx ) throw new Error("Unable to generate context for canvas");
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, params.width-2, params.height-2);

  const sprite = new Sprite(new Texture(new BaseTexture(canvas)));
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;

  return sprite;
}