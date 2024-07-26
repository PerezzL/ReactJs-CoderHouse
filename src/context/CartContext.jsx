import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const Context = createContext();

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd, quantity) => {
        const newItem = {
            ...productToAdd,
            quantity
        }
        const isInCart = cart.some((prod) => prod.id === newItem.id)
        if(isInCart) {
            const newCart = cart.map((prod) => prod.id === newItem.id ? {...prod, quantity: prod.quantity + quantity} : prod
        )
        setCart(newCart);
        }else {
            setCart([...cart, newItem]);
        }
    }

    const removeItem = (id) => {
        const newCart = cart.filter((prod) => prod.id !== id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getQuantity = () => {
        let quantity = 0;
        cart.forEach((prod) => {
            quantity += prod.quantity;
        })
        return quantity;
    }

    const getTotalPrice = () => {
        const total = cart.reduce((actual, item) => actual + item.price * item.quantity, 0);
        return total;
    }

  return (
    <Context.Provider
    value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getQuantity,
        getTotalPrice
        }}>
    {children}
    </Context.Provider>
  )
}

export default Context;
