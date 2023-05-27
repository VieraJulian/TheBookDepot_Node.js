import React, { useState, useEffect } from 'react'
import { cartDetail } from '../services/cartDetail'
import Cookies from 'universal-cookie';

export function useCartDetail() {
    const [products, setProducts] = useState(null)
    const [total, setTotal] = useState(null)
    const [quantity, setQuantity] = useState(null)

    useEffect(() => {
        async function getCartInfo() {
            const cookies = new Cookies();
            const cookieGet = cookies.get('response')
            
            if (!cookieGet) {
                return
            }

            const id = cookieGet.userId
            const token = cookieGet.token

            const results = await cartDetail(id, token)

            setProducts(results.cartProducts)
            setQuantity(results.quantity)
            setTotal(results.total)
        }

        getCartInfo()
    }, [])

    return { products, total, quantity }
}