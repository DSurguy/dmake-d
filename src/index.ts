import "@/style/index.scss";
import { Application } from "pixi.js";
import Player from "./classes/entities/Player";
import Room from "./classes/entities/constructs/Room";
import {DEFAULT_ROOM_SIZE} from "./constants";

const app = new Application({
  width: 640,
  height: 480,
  backgroundColor: 0xE5E5E5
});

const container = document.querySelector(".app-container")
if( container ) container.appendChild(app.view);
else throw new Error("Unable to find container to mount application");

const player = new Player();
app.stage.addChild(player.sprite);
player.sprite.x = app.view.width/2;
player.sprite.y = app.view.height/2;

const room = new Room({ width: DEFAULT_ROOM_SIZE, height: DEFAULT_ROOM_SIZE });
app.stage.addChild(room.sprite);
room.sprite.x = app.view.width/2;
room.sprite.y = app.view.height/2;

export {}