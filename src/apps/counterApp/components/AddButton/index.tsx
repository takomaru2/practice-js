import { Button } from "../Button";

type AddButtonProps = {
  count: number;
  setCount: (count: number) => void;
  num: number;
};

export const AddButton = ({ count, setCount, num }: AddButtonProps) => {
  const handleClickAdd = () => {
    setCount(count + num);
  };

  return <Button num={num} handleClick={handleClickAdd} operator={"+"} />;
};
