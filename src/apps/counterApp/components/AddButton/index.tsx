import { Button } from "../Button";
import { Dispatch, SetStateAction } from "react";

type AddButtonProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  num: number;
};

export const AddButton = ({ count, setCount, num }: AddButtonProps) => {
  const handleClickAdd = () => {
    setCount(count + num);
  };

  return <Button num={num} handleClick={handleClickAdd} operator={"+"} />;
};
