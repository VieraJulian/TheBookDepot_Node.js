import { useEffect, useState } from 'react'
import { userGetSaved } from '../services/usersGetSaved'
import Cookies from 'universal-cookie';

export function useGetUserSaved(){
    const [products, setProducts] = useState(null)

    const cookies = new Cookies();
    const cookieGet = cookies.get('response')
    const token = cookieGet.token
    const id = cookieGet.userId

    useEffect(() => {
        async function getProductsSaved() {
            const result = await userGetSaved(id, token)
            setProducts(result)
        }

        getProductsSaved()
    }, [])

    return { products }
}