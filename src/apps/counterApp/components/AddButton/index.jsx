import { Button } from "../Button/index.jsx";

export const AddButton = ({ count, setCount, num }) => {
  const handleClickAdd = () => {
    setCount(count + num);
  };

  return <Button num={num} handleClick={handleClickAdd} operator={"+"} />;
};
