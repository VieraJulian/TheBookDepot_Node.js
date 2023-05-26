import { productToSaved } from '../services/productsToSaved'
import Cookies from 'universal-cookie';

export function useSaveProduct() {
    const handleProductSaved = (id) => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')

        if (!cookieGet) {
            return
        }

        const token = cookieGet.token
        const idUser = cookieGet.userId

        async function getProductsSaved() {
            const data = {
                id: idUser,
                productId: id
            }

            await productToSaved(data, token)
        }

        getProductsSaved()
    }

    return { handleProductSaved }
}