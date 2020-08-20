import * as Pixi from "pixi.js";
import "@/style/index.scss";
import playerSpriteFactory from "./sprites/playerSpriteFactory";

const app = new Pixi.Application({
  width: 640,
  height: 480,
  backgroundColor: 0xE5E5E5
});

const container = document.querySelector(".app-container")
if( container ) container.appendChild(app.view);
else throw new Error("Unable to find container to mount application");

const playerSprite = playerSpriteFactory();
app.stage.addChild(playerSprite);
playerSprite.x = app.view.width/2;
playerSprite.y = app.view.height/2;

export {}