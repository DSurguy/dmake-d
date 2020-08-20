import { Sprite, Texture, BaseTexture } from "pixi.js";

export default function playerSpriteFactory() {
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");
  if( !ctx ) throw new Error("Unable to generate context for canvas");
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, 30, 30);

  const sprite = new Sprite(new Texture(new BaseTexture(canvas)));
  sprite.anchor.x = 0.5;
  sprite.anchor.y = 0.5;

  return sprite;
}