import { useState } from "react";

export const useProgress = () => {
  const [progress, _setProgress] = useState(MIN);
  //セッターを使って絶対にclampしたいマン
  // argsの型はnumberかprev
  type SetProgressArg = number | ((prev: number) => number);

  const setProgress = (arg: SetProgressArg): void => {
    if (typeof arg === "function") {
      _setProgress((prev) => clamp(arg(prev)));
    } else {
      _setProgress(clamp(arg));
    }
  };

  const isStart = progress === MIN;
  const isCompleted = progress === MAX;

  const minus = (n: number) => {
    setProgress((prev: number) => prev - n);
  };

  const plus = (n: number) => {
    setProgress((prev: number) => prev + n);
  };

  const reset = (): void => setProgress(MIN);

  const complete = (): void => setProgress(MAX);

  return {
    progress,
    isStart,
    isCompleted,
    minus,
    plus,
    reset,
    complete,
  };
};

type THRESHOLD = {
  MAX: number;
  MIN: number;
};

const THRESHOLD: THRESHOLD = {
  MAX: 100,
  MIN: 0,
};
const { MAX, MIN } = THRESHOLD;

/**
 * @example
 * clamp(-5) // 0
 * clamp(105) // 100
 */

const clamp = (num: number): number => {
  return Math.min(MAX, Math.max(MIN, num));
};
