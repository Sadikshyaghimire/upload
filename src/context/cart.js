import { useState } from 'react';
import {createContext, useContext} from 'react';


export const CartContext =createContext(null);


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    return <CartContext.Provider value ={{cart,setCart}}> 
    {children}
    </CartContext.Provider>
}

export const useCart = () => {
    const context =useContext(CartContext);

    if (!context){
        throw new Error ('useCart must be used within a CartProvider')
    }
    return context;
};
