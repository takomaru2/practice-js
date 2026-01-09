import { Button } from "../Button/index.tsx";
import { Dispatch, SetStateAction } from "react";

type MultiplyButtonProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  num: number;
};

export const MultiplyButton = ({
  count,
  setCount,
  num,
}: MultiplyButtonProps) => {
  const handleClickMultiply = () => {
    setCount(count * num);
  };

  return <Button num={num} handleClick={handleClickMultiply} operator={"x"} />;
};
