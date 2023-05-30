import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') ?? []))

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (article) => {

        const product = {
            id: article.id,
            quantity: 0
        }

        const productInCartIndex = cart.findIndex(p => p.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            article.stock > newCart[productInCartIndex].quantity ? newCart[productInCartIndex].quantity += 1 : newCart[productInCartIndex].quantity
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