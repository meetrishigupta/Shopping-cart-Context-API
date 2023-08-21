import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModal";
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
  const [showCart, setshowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (prod) => {
   const index = cart.findIndex((item) => item.id === prod.id);
   if(index === -1){
    setCart([...cart,{...prod,qty:1}]);
    console.log(cart);
    setTotal(total+prod.price);

   }
   else{
      cart[index].qty++;
      setCart(cart)
      console.log(cart)
      setTotal(total+cart[index].price)
   }
   setItem(item+1)
  };

  const handleRemove = (id) => {
   const index = cart.findIndex((item)=> item.id === id);
   if(index !== -1){
    cart[index].qty--;
    setItem(item-1);
    setTotal(total-cart[index].price);
    if(cart[index].qty == 0){
      cart.splice(index,1);
    }
   }
  };

  const handleReset = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
  };

  const toggle = () => {
    setshowCart(!showCart);
  };
  return (
    //default Context Provider
    <itemContext.Provider
      value={{
        total,
        setTotal,
        item,
        setItem,
        handleAdd,
        handleRemove,
        handleReset,
        toggle,
        cart,
      }}
    >
      {showCart && <CartModal />}
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, UseValue };
export default CustomitemContext;
