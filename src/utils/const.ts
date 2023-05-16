export const DEFAULT_DEBOUNCE_DELAY = 250;
export const DEFAULT_FPS = 30;

export const STAR_ANGLE = Math.PI / 2 * 3;

export type StarModelPosition = {
  x: number;
  y: number;
  size: number;
}

export type StarModel = StarModelPosition & {
  innerRadius: number;
  outerRadius: number;
  strokeStyle: string;
  fillStyle: string;
  strokeWidth: number;
  spikes: number;
  old: StarModelPosition;
}

export const STAR_MODEL: StarModel = {
    x: 0,
    y: 0,
    innerRadius: 0,
    outerRadius: 0,
    strokeStyle: 'rgba(255,255,255,1)',
    fillStyle: 'rgba(255,255,255,1)',
    strokeWidth: 0,
    size: 0,
    spikes: 5,
    old: {
        x: 0,
        y: 0,
        size: 0
    }
};

export const STAR_PRESETS = {
  0: {
      x: 75,
      y: 100,
      innerRadius: 15,
      outerRadius: 30,
      spikes: 5
  },
  1: {
      x: 175,
      y: 100,
      innerRadius: 10,
      outerRadius: 30,
      spikes: 12
  },
  2: {
      x: 75,
      y: 200,
      innerRadius: 15,
      outerRadius: 30,
      spikes: 6
  },
  3: {
      x: 175,
      y: 200,
      innerRadius: 25,
      outerRadius: 30,
      spikes: 20
  }
};

export enum StarShapes {
  circle = "circle",
  poly = "poly",
  line = "line"
};

export const TRIG = {
  angle: STAR_ANGLE,
  cos: Math.cos(STAR_ANGLE),
  sin: Math.sin(STAR_ANGLE)
};

export const TWO_PI = Math.PI * 2;
