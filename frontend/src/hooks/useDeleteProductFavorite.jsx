import { productsDeleteFavorites } from '../services/productsDeleteFavorites'
import Cookies from 'universal-cookie';

export function useDeleteProductFavorite() {
    const handleDeleteFavorites = async (id) => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token
        const userId = cookieGet.userId

        const data = {
            id: userId,
            productId: id
        }

        const result = await productsDeleteFavorites(data, token)
    }

    return { handleDeleteFavorites }
}