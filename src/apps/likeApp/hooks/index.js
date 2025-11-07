import { useState } from "react";

export const useLikeCounter = () => {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const handleReset = () => {
    setCount(0);
  };

  return { count, handleLike, handleReset };
};
