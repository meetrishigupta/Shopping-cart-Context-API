import { createContext, useContext, useState } from "react";

const itemContext = createContext();

//Custom Hook
const UseValue = () => {
  const value = useContext(itemContext);
  return value;
};

//act as a Component
function CustomitemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  const handleAdd = (price) => {
    setTotal(total + price);
    setItem(item + 1);
  };

  const handleRemove = (price) => {
    if (total <= 0) {
      return;
    }
    setTotal(total - price);
    setItem(item - 1);
  };
  return (
    //default Context Provider
    <itemContext.Provider
      value={{ total, setTotal, item, setItem, handleAdd, handleRemove }}
    >
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, UseValue };
export default CustomitemContext;
