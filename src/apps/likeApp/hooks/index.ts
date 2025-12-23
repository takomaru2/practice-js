import { useState } from "react";

// 実務では今回は全て型をつけないかも？推論に全部任せるかも
export const useLikeCounter = () => {
  const [count, setCount] = useState<number>(0);

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
