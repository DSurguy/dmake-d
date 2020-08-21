import {Point} from "../types";
import { Container, InteractionEvent } from "pixi.js";

class MouseDragHandler {
  mousePosition: Point | null = null
  mouseDown = false;
  private _target: Container | null = null;
  dragCallbacks: Array<(point: Point) => void> = [];

  attach(target: Container){
    this.detach();
    this._target = target;
    target.on("mousedown", this.boundOnMouseDown);
    target.on("mousemove", this.boundOnMouseMove);
    target.on("mouseup", this.boundOnMouseUp);
  }

  detach() {
    if( !this._target ) return;
    this._target.off("mousedown", this.boundOnMouseDown);
    this._target.off("mousemove", this.boundOnMouseMove);
    this._target.off("mouseup", this.boundOnMouseUp);
    this._target = null;
  }

  boundOnMouseDown = this.onMouseDown.bind(this);
  onMouseDown(e: InteractionEvent) {
    this.mouseDown = true;
    this.mousePosition = {
      x: e.data.global.x,
      y: e.data.global.y
    };
  }

  boundOnMouseMove = this.onMouseMove.bind(this);
  onMouseMove(e: InteractionEvent) {
    if( !this.mouseDown ) return;
    this.mousePosition = {
      x: e.data.global.x,
      y: e.data.global.y
    };
    for( let callback of this.dragCallbacks ){
      callback({...this.mousePosition});
    }
  }

  boundOnMouseUp = this.onMouseUp.bind(this);
  onMouseUp(e: InteractionEvent) {
    this.mouseDown = false;
    this.mousePosition = null;
  }

  onDrag(callback: (point: Point) => void){
    if( !this.dragCallbacks.includes(callback) )
      this.dragCallbacks.push(callback);
  }

  offDrag(callback: (point: Point) => void) {
    this.dragCallbacks = this.dragCallbacks.filter(c => c !== callback);
  }
}

const mouseDragHandler = new MouseDragHandler();
export default mouseDragHandler;