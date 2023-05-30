import { createContext, useEffect, useState } from "react";

// 1. Crear el contexto
export const CartContext = createContext()

// 2. Crear el Provider, para proveer el contexto
export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const carritoLS = JSON.parse(localStorage.getItem('cart')) ?? [];
        setCart(carritoLS)
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(p => p.id === product.id)

        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const clearCart = () => {
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}