import React, { useState, useEffect } from 'react'
import { cartDetail } from '../services/cartDetail'
import Cookies from 'universal-cookie';

export function useCartDetail({ cart }) {
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

            const token = cookieGet.token

            const results = await cartDetail(cart, token)

            setProducts(results.products)
            setQuantity(results.quantityOfProducts)
            setTotal(results.total)
        }

        getCartInfo()
    }, [cart])

    return { products, total, quantity }
}