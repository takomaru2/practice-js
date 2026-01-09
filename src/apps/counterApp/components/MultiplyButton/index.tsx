import { Button } from "../Button/index.tsx";

type MultiplyButtonProps = {
  count: number;
  setCount: (count: number) => void;
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
