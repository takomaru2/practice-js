import { useState } from "react";

export const useProgress = () => {
  const [progress, setProgress] = useState(0);

  const action = {
    reset: () => setProgress(0),
    completed: (n) => setProgress(n),
    // clamp: (n, thresholdMax) => {
    //   setProgress((prev) => clamp(prev + n, thresholdMax));
    // },
  };

  return [progress, action, setProgress];
};
