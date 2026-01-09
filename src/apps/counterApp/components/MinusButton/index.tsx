import { Button } from "../Button/index.tsx";
import { Dispatch, SetStateAction } from "react";

type MinusButtonProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  num: number;
};

export const MinusButton = ({ count, setCount, num }: MinusButtonProps) => {
  const handleClickMinus = () => {
    setCount(count - num);
  };

  return <Button num={num} handleClick={handleClickMinus} operator={"-"} />;
};
