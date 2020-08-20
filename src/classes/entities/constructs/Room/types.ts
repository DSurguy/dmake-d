export enum RoomSide {
  top,
  right,
  bottom,
  left
}

export type RoomDoor = {
  side: RoomSide;
  position: number;
  length: number;
}