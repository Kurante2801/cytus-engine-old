export const Direction = {
	Up: 1,
	Down: -1,
} as const;

export type Direction = (typeof Direction)[keyof typeof Direction];

export enum Layer {
	DRAG_SEGMENT,
	HOLD_BAR,
	DRAG_CHILD,
	NOTE,
	JUDGMENT,
	HOLD_INDICATOR_BACK,
	HOLD_INDICATOR_FORE,
}

export const scanlineThick = 0.05;
export const noteRadius = 0.3125;
export const flickWidth = 0.478515625;
export const effectRadius = 0.6;

// Seconds until an sfx can play again
export const minSFXDistance = 0.02;

export const holdBarWidth = 0.1;
export const longHoldBarWidth = 0.15;
export const holdIndicatorRadius = 0.375;
export const flickArrowRadius = 0.325;

export const maxDegree = Math.PI * 2;
