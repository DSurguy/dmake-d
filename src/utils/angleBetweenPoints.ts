import {Point} from "../types";

//https://stackoverflow.com/questions/9614109/how-to-calculate-an-angle-from-points#answer-9614122
export default function angleBetweenPoints(originPoint: Point, targetPoint: Point) {
  const dy = originPoint.y - targetPoint.y;
  const dx = originPoint.x - targetPoint.x;
  let theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}