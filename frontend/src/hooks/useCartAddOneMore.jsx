import { cartAddOneMoreProduct } from '../services/cartAddOneMoreProducts'
import Cookies from 'universal-cookie';

export function useCartAddOneMore() {
    const handleAddOneMore = async (id) => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')

        if (!cookieGet) {
            return
        }

        const token = cookieGet.token
        const userId = cookieGet.userId

        const data = {
            id: userId,
            productId: id
        }

        await cartAddOneMoreProduct(data, token)
    }

    return { handleAddOneMore }
}