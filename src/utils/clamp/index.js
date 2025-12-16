import { THRESHOLD } from "../../constants/THRESHOLD/index.js";

/**
 * @example
 * clamp(-5) // 0
 * clamp(105) // 100
 */
export const clamp = (num) => {
  return Math.min(THRESHOLD.MAX, Math.max(THRESHOLD.MIN, num));
};
