import { usersGetFavorites } from '../services/usersGetFavorites'
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';

export function useGetUserFavorite({ handleDeleteFavorites }) {
    const [products, setProducts] = useState(null)

    const cookies = new Cookies();
    const cookieGet = cookies.get('response')
    const token = cookieGet.token
    const id = cookieGet.userId

    useEffect(() => {
        async function getFavoritesProducts() {
            const result = await usersGetFavorites(id, token)

            setProducts(result)
        }

        getFavoritesProducts()
    }, [ handleDeleteFavorites ])

    return { products }
}