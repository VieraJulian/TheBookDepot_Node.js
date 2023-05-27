import Cookies from 'universal-cookie';
import { cartRemoveOneProduct } from '../services/cartRemoveOneProduct';

export function useCartRemoveOneProduct() {
    const handleRemoveOneProduct = async (id) => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token
        const userId = cookieGet.userId

        const data = {
            id: userId,
            productId: id
        }

        await cartRemoveOneProduct(data, token)
    }

    return { handleRemoveOneProduct }
}