import { productInfo } from '../services/productsInfo'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

export function useProductInfo(product) {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        async function getProductInfo() {
            const cookies = new Cookies();
            const cookieGet = cookies.get('response')

            if (!cookieGet) {
                return
            }

            const token = cookieGet.token

            const result = await productInfo(product, token)
            setProducts(result)
        }

        getProductInfo()
    }, [product])

    return { products }
}