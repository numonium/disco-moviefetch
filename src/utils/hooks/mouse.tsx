import { MouseEvent as ReactMouseEvent, useRef } from "react";

export enum MouseButtons {
  none = 0,
  left = 1,
  aux = 2,
  wheel = 2,
  right = 3,
  back = 4,
  forward = 5
};

export enum MouseEventNames {
  blur = "blur",
  click = "click",
  contextmenu = "contextmenu",
  doubleclick = "doubleclick",
  drag = "drag",
  dragend = "dragend",
  dragenter = "dragenter",
  dragexit = "dragexit",
  dragleave = "dragleave",
  dragover = "dragover",
  dragstart = "dragstart",
  drop = "drop",
  focus = "focus",
  mousedown = "mousedown",
  mouseenter = "mouseenter",
  mouseleave = "mouseleave",
  mousemove = "mousemove",
  mouseout = "mouseout",
  mouseover = "mouseover",
  mouseup = "mouseup",
  scroll = "scroll",
  select = "select",
  touchcancel = "touchcancel",
  touchend = "touchend",
  touchmove = "touchmove",
  touchstart = "touchstart",
  wheel = "wheel",
};

export enum MouseEventHandlerNames {
  onBlur = "onBlur",
	onClick = "onClick",
  onContextMenu = "onContextMenu",
  onDoubleClick = "onDoubleClick",
  onDrag = "onDrag",
  onDragEnd = "onDragEnd",
  onDragEnter = "onDragEnter",
  onDragExit = "onDragExit",
  onDragLeave = "onDragLeave",
  onDragOver = "onDragOver",
  onDragStart = "onDragStart",
  onDrop = "onDrop",
  onFocus = "onFocus",
  onMouseDown = "onMouseDown",
  onMouseEnter = "onMouseEnter",
  onMouseLeave = "onMouseLeave",
  onMouseMove = "onMouseMove",
  onMouseOut = "onMouseOut",
  onMouseOver = "onMouseOver",
  onMouseUp = "onMouseUp",
  onScroll = "onScroll",
  onSelect = "onSelect",
  onTouchCancel = "onTouchCancel",
  onTouchEnd = "onTouchEnd",
  onTouchMove = "onTouchMove",
  onTouchStart = "onTouchStart",
  onWheel = "onWheel",
};

export type MouseElement = {
  blur: boolean;
  click: boolean;
  clickButton: MouseButtons;
  clickTimes: number; /* single, double, triple clicks */
  contextMenu: boolean;
  drag: boolean;
  drop: boolean;
  focus: boolean;
  hover: boolean;
  keyDown: boolean;
  keyUp: boolean;
  move: boolean;
}

export type MouseEventHandlers<T> = {
  [K in MouseEventHandlerNames]: (e?: ReactMouseEvent<T>) => void;
};

export const initialElementStatus: () => MouseElement = () => ({
  blur: false,
  click: false,
  clickButton: MouseButtons.none,
  clickTimes: 0,
  contextMenu: false,
  drag: false,
  drop: false,
  focus: false,
  hover: false,
  keyDown: false,
  keyUp: false,
  move: false,
});

export const useMouseElement = () => {
  const status = useRef(initialElementStatus());

  const setStatus = (newStatus: MouseElement) => {
    status.current = newStatus;
  }

  return [status, setStatus];
};

export const useMouse = ({}) => {

}
