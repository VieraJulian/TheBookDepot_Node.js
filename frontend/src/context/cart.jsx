import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? [])
    const [quantityTotal, setQuantityTotal] = useState(0)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        let acumulador = 0;
        cart.map(p => acumulador += p.quantity)
        setQuantityTotal(acumulador)
    }, [cart])

    const addToCart = product => {
        const stock = product.stock
        const id = product.id

        const productInCartIndex = cart.findIndex(p => p.id === id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            stock > newCart[productInCartIndex].quantity ? newCart[productInCartIndex].quantity += 1 : newCart[productInCartIndex].quantity
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                id: id,
                quantity: 1
            }
        ]))
    }

    const removeCartProduct = product => {
        const productInCartIndex = cart.findIndex(p => p.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = cart.filter(p => p.id !== product.id)
            return setCart(newCart)
        }
    }
    
    const reduceCartProductQuantity = product => {
        const productInCartIndex = cart.findIndex(p => p.id === product.id)
        
        if (productInCartIndex >= 0) {
            let newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity > 1 ? newCart[productInCartIndex].quantity -= 1 :  newCart = cart.filter(p => p.id !== product.id)
            return setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            quantityTotal,
            addToCart,
            reduceCartProductQuantity,
            removeCartProduct,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}