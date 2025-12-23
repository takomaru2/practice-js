import { useState } from "react";

type useLikeCounterReturn = {
  count: number;
  handleLike: () => void;
  handleReset: () => void;
};

// 一応練習として全部明示的につけてみる
export const useLikeCounter = (): useLikeCounterReturn => {
  const [count, setCount] = useState<number>(0);

  const handleLike = (): void => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  const handleReset = (): void => {
    setCount(0);
  };

  return { count, handleLike, handleReset };
};
