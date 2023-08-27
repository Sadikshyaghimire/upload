// import { useState } from 'react';
// import {createContext, useContext} from 'react';


// export const CartContext =createContext(null);


// export const CartProvider = ({children}) => {
//     const [cart, setCart] = useState([]);

//     const addToCart = () => {
//         const productExists = cart.find((item) => item.product.id === product.id);
//         if (!productExists) {
//           setCart([...cart, { product: product, quantity: quantity }]);
//     }
//     return <CartContext.Provider value ={{cart,setCart}}> 
//     {children}
//     </CartContext.Provider>
// }

// export const useCart = () => {
//     const context =useContext(CartContext);

//     if (!context){
//         throw new Error ('useCart must be used within a CartProvider')
//     }
//     return context;
// };
import { useState } from "react";
import { createContext, useContext } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product,quantity) => {
    const productExists = cart.find((item) => item.product.id === product.id);
    if (!productExists) {
      setCart([...cart, { product: product, quantity: quantity }]);
    }
  }
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};