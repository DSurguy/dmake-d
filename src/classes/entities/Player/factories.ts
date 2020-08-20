import { Sprite, Texture, BaseTexture } from "pixi.js";

export function playerSpriteFactory() {
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext("2d");
  if( !ctx ) throw new Error("Unable to generate context for canvas");
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, 14, 14);

  ctx.beginPath();
  ctx.moveTo(3, 13);
  ctx.lineTo(8,4);
  ctx.lineTo(13,13);
  ctx.stroke();

  const sprite = new Sprite(new Texture(new BaseTexture(canvas)));
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;

  return sprite;
}