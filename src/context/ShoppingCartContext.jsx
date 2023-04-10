import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        const existsInCart = cart.find((prod) => prod.id === item.id)
        if (existsInCart) {
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + item.quantity }
                } else {
                    return prod
                }
            })
            setCart(carritoActualizado)
        } else {
            setCart([...cart, item.id])
        }
    }

    const clearCart = () => {
        return setCart([])
    }

    const removeItem = (id) => {
        return setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }
    
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc += prod.price * prod.quantity)
    }
    
    return (
        <CartContext.Provider value={[cart, setCart, clearCart, removeItem, isInCart, addItem, cartQuantity, cartTotal]}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => useContext(CartContext);



