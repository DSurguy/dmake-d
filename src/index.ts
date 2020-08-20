import "@/style/index.scss";
import {Application} from "pixi.js";
import Player from "./classes/entities/Player/Player";
import Room from "./classes/entities/constructs/Room/Room";
import {DEFAULT_ROOM_SIZE} from "./constants";
import {RoomSide} from "./classes/entities/constructs/Room/types";
import {PlayerFacing} from "./classes/entities/Player/types";

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

const room = new Room({
  width: DEFAULT_ROOM_SIZE,
  height: DEFAULT_ROOM_SIZE,
  doors: [
    {
      side: RoomSide.top,
      position: DEFAULT_ROOM_SIZE/2 - DEFAULT_ROOM_SIZE/8,
      length: DEFAULT_ROOM_SIZE/4
    }
  ]
});
app.stage.addChild(room.sprite);
room.sprite.x = app.view.width/2;
room.sprite.y = app.view.height/2;

/**
 * TODO
 *
 * As a POC for seeing facing work and handling clicks updating user state,
 * determine the angle between the click point and the current position of the player.
 *
 * If the angle is within (45/2) degrees of a facing, set it as such.
 */

export {}