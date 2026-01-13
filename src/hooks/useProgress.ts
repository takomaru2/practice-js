import { useState } from "react";

export const useProgress = () => {
  const [progress, _setProgress] = useState(MIN);
  //セッターを使って絶対にclampしたいマン
  const setProgress = (arg) => {
    if (typeof arg === "function") {
      _setProgress((prev) => clamp(arg(prev)));
    } else {
      _setProgress(clamp(arg));
    }
  };

  const isStart = progress === MIN;
  const isCompleted = progress === MAX;

  const minus = (n) => {
    setProgress((prev) => prev - n, MAX);
  };

  const plus = (n) => {
    setProgress((prev) => prev + n, MAX);
  };

  const reset = () => setProgress(MIN);

  const complete = () => setProgress(MAX);

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

const THRESHOLD = {
  MAX: 100,
  MIN: 0,
};
const { MAX, MIN } = THRESHOLD;

/**
 * @example
 * clamp(-5) // 0
 * clamp(105) // 100
 */
const clamp = (num) => {
  return Math.min(MAX, Math.max(MIN, num));
};
