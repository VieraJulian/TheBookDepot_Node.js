import { productInfo } from '../services/productsInfo'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

export function useProductInfo({ productsFavorites }) {
    const [ products, setProducts] = useState(null)

    useEffect(() => {
        async function getProductInfo(){
            const cookies = new Cookies();
            const cookieGet = cookies.get('response')
            
            if (!cookieGet) {
                return
            }

            const token = cookieGet.token

            const result = await productInfo(productsFavorites, token)
            setProducts(result)
        }

        getProductInfo()
    }, [productsFavorites])

    return { products }
}