import { productToSaved } from '../services/productsToSaved'
import Cookies from 'universal-cookie';

export function useSaveProduct() {
    const cookies = new Cookies();
    const cookieGet = cookies.get('response')
    const token = cookieGet.token
    const idUser = cookieGet.userId

    const handleProductSaved = (id) => {
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