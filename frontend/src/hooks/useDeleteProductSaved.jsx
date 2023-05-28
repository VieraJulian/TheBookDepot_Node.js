import { productsDeleteSaved } from '../services/productsDeleteSaved'
import Cookies from 'universal-cookie';

export function useDeleteProductSaved() {
    const handleDeleteSaved = async (id) => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token
        const idUser = cookieGet.userId

        const data = {
            id: idUser,
            productId: id
        }

        const result = await productsDeleteSaved(data, token)

        if (result === 'Saved deleted') {
        }

    }

    return { handleDeleteSaved }
}