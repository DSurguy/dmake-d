import {Point} from "../types";

/**
 * TODO
 *
 * Handle zoom, it appears to skew these positions
 */

class MouseDragHandler {
  mousePosition: Point | null = null
  mouseDown = false;
  private _target: HTMLElement | null = null;

  attach(target: HTMLElement){
    this.detach();
    this._target = target;
    target.addEventListener("mousedown", this.boundOnMouseDown);
    target.addEventListener("mousemove", this.boundOnMouseMove);
    target.addEventListener("mouseup", this.boundOnMouseUp);
    target.addEventListener("mouseenter", this.boundOnMouseEnter);
    target.addEventListener("mouseleave", this.boundOnMouseLeave);
  }

  detach() {
    if( !this._target ) return;
    this._target.removeEventListener("mousedown", this.boundOnMouseDown);
    this._target.removeEventListener("mousemove", this.boundOnMouseMove);
    this._target.removeEventListener("mouseup", this.boundOnMouseUp);
    this._target.removeEventListener("mouseenter", this.boundOnMouseEnter);
    this._target.removeEventListener("mouseleave", this.boundOnMouseLeave);
    this._target = null;
  }

  boundOnMouseDown = this.onMouseDown.bind(this);
  onMouseDown(e: MouseEvent) {
    this.mouseDown = true;
    this.mousePosition = {
      x: e.offsetX,
      y: e.offsetY
    };
  }

  boundOnMouseMove = this.onMouseMove.bind(this);
  onMouseMove(e: MouseEvent) {
    if( !this.mouseDown ) return;
    this.mousePosition = {
      x: e.offsetX,
      y: e.offsetY
    };
  }

  boundOnMouseUp = this.onMouseUp.bind(this);
  onMouseUp(e: MouseEvent) {
    this.mouseDown = false;
    this.mousePosition = null;
  }

  boundOnMouseEnter = this.onMouseEnter.bind(this);
  onMouseEnter(e: MouseEvent) {
    //happens before move
  }

  boundOnMouseLeave = this.onMouseLeave.bind(this);
  onMouseLeave(e: MouseEvent) {
    //happens after move potentially
  }
}

const mouseDragHandler = new MouseDragHandler();
export default mouseDragHandler;