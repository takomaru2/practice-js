import { Button } from "../Button/index.tsx";

type MinusButtonProps = {
  count: number;
  setCount: (count: number) => void;
  num: number;
};

export const MinusButton = ({ count, setCount, num }: MinusButtonProps) => {
  const handleClickMinus = () => {
    setCount(count - num);
  };

  return <Button num={num} handleClick={handleClickMinus} operator={"-"} />;
};
