import { Sprite, Texture, BaseTexture } from "pixi.js";
import {DEFAULT_ROOM_SIZE} from "../constants";

export default function roomSpriteFactory(width: number = DEFAULT_ROOM_SIZE, height: number = DEFAULT_ROOM_SIZE) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if( !ctx ) throw new Error("Unable to generate context for canvas");
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, width-2, height-2);

  const sprite = new Sprite(new Texture(new BaseTexture(canvas)));
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;

  return sprite;
}