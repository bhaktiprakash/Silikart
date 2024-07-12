import React, { createContext, useState, useContext} from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const isProductInCart = cart.some(item => item.serial === product.serial);
        if(isProductInCart){
            alert("Product already in cart")
        }
        else{
            setCart([...cart, product])
            alert("Product added to cart")           
        }
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