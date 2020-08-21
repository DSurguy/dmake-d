import "@/style/index.scss";
import {Application} from "pixi.js";
import Player from "./classes/entities/Player/Player";
import Room from "./classes/entities/constructs/Room/Room";
import {DEFAULT_ROOM_SIZE} from "./constants";
import {RoomSide} from "./classes/entities/constructs/Room/types";
import {PlayerFacing} from "./classes/entities/Player/types";
import GameLoop from "./logic/GameLoop";
import mouseDragHandler from "./logic/mouseDragHandler";
import angleBetweenPoints from "./utils/angleBetweenPoints";
import {Point} from "./types";

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
/**
 * TODO
 *
 * Create a "pending travel to click" based on regular click
 */

const gameLoop = new GameLoop();

mouseDragHandler.attach(app.view);
const angleToFacing = [
  [0, 22.5, PlayerFacing.left],
  [45-22.5, 45+22.5, PlayerFacing.upLeft],
  [90-22.5, 90+22.5, PlayerFacing.up],
  [135-22.5, 135+22.5, PlayerFacing.upRight],
  [180-22.5, 180+22.5, PlayerFacing.right],
  [225-22.5, 225+22.5, PlayerFacing.downRight],
  [270-22.5, 270+22.5, PlayerFacing.down],
  [315-22.5, 315+22.5, PlayerFacing.downLeft],
  [360-22.5, 360, PlayerFacing.left]
];
gameLoop.addHook(delta => {
  if( mouseDragHandler.mousePosition ){
    const angle = angleBetweenPoints(player.sprite.position as Point, mouseDragHandler.mousePosition);
    for( let [lowerBound, upperBound, facing] of angleToFacing ){
      if( angle >= lowerBound && angle < upperBound ){
        player.facing = facing;
        break;
      }
    }
  }
});

app.ticker.add(delta => gameLoop.handler(delta));

export {}