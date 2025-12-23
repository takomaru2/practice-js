import { useState } from "react";

type UseLikeCounterReturn = {
  count: number;
  handleLike: () => void;
  handleReset: () => void;
};

export const useLikeCounter = (): UseLikeCounterReturn => {
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
