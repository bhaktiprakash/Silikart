import React, { createContext, useState, useContext} from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product])
        console.log(cart);
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item._id !== productId))
    }

    const clearCart = () => {
        setCart([]);
    }

    return (<CartContext.Provider value = {{cart, addToCart, removeFromCart, clearCart}}>
        {children}
    </CartContext.Provider>
    )
}

export const useCart = () => {
    const cartContext = useContext(CartContext)
    return cartContext
}