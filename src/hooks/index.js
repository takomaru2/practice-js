import { useState } from "react";
import { clamp } from "../utils/clamp/index.js";

/**
 *
 * @param thresholdMax completed時の値
 *
 */
export const useProgress = (thresholdMax) => {
  const [progress, setProgress] = useState(0);

  const action = {
    reset: () => setProgress(0),
    completed: () => setProgress(thresholdMax),
    clamp: (n) => {
      setProgress((prev) => clamp(prev + n, thresholdMax));
    },
  };

  return [progress, action, setProgress];
};
