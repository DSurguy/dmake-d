import "@/style/index.scss";
import {Application, InteractionEvent, Rectangle} from "pixi.js";
import Player from "./classes/entities/Player/Player";
import Room from "./classes/entities/constructs/Room/Room";
import {DEFAULT_ROOM_SIZE} from "./constants";
import {RoomSide} from "./classes/entities/constructs/Room/types";
import GameLoop from "./logic/GameLoop";
import mouseDragHandler from "./logic/mouseDragHandler";
import dragToQueuePlayerMovement from "./logic/interaction/eventHooks/dragToQueuePlayerMovement";
import GameState from "./logic/GameState";
import clickToQueuePlayerMovement from "./logic/interaction/eventHooks/clickToQueuePlayerMovement";
import {Point} from "./types";
import movePlayerToQueueLocation from "./logic/interaction/gameLoopHooks/movePlayerToQueuedLocation";

const app = new Application({
  width: 640,
  height: 480,
  backgroundColor: 0xE5E5E5
});
app.stage.interactive = true;
app.stage.hitArea = new Rectangle(0, 0, 640, 480);
mouseDragHandler.attach(app.stage);

const gameState = new GameState();
gameState.player = new Player();

app.stage.addChild(gameState.player.sprite);
gameState.player.sprite.x = app.view.width/2;
gameState.player.sprite.y = app.view.height/2;

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
 * Create a "pending travel to click" based on regular click
 */

//Setup static event handlers
app.stage.on("click", (e: InteractionEvent) => clickToQueuePlayerMovement(e, gameState));
mouseDragHandler.onDrag((point: Point) => dragToQueuePlayerMovement(point, gameState));

//Setup the gameLoop
const gameLoop = new GameLoop(gameState);
gameLoop.addHook(movePlayerToQueueLocation);
app.ticker.add(delta => gameLoop.handler(delta));

//Attach the app to the DOM
const container = document.querySelector(".app-container")
if( container ) container.appendChild(app.view);
else throw new Error("Unable to find container to mount application");

export {}