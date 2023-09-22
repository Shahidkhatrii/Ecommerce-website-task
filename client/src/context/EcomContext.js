import { createContext, useContext, useState } from "react";

const EcomContext = createContext();

export function EcomContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const retrieveCart = () => {
    setCart(JSON.parse(localStorage.getItem("cart") || []));
  };
  const addToCart = (item) => {
    const index = cart.findIndex(({ id }) => id === item.id);
    console.log(index);
    if (index === -1) {
      console.log("Setting");
      setCart([...cart, { ...item, quantity: 1 }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...item, quantity: 1 }])
      );
    } else {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  const increaseQuantity = (item) => {
    const index = cart.findIndex(({ id }) => id === item.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  const decreaseQuantity = (item) => {
    const index = cart.findIndex(({ id }) => id === item.id);
    if (index !== -1) {
      const newCart = [...cart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity--;
      }
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  const removeFromCart = (item) => {
    const index = cart.findIndex(({ id }) => id === item.id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };
  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    retrieveCart,
    increaseQuantity,
    decreaseQuantity,
  };
  return <EcomContext.Provider value={value}>{children}</EcomContext.Provider>;
}

export function useEcomContext() {
  return useContext(EcomContext);
}
