import { cartAddProduct } from "../services/cartAddProducts";
import Cookies from 'universal-cookie';

export function useCartAddProduct() {
    const handleAddCartProduct = async (id) => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')

        if (!cookieGet){
            return
        }

        const token = cookieGet.token
        const idUser = cookieGet.userId

        const data = {
            id: idUser,
            productId: id
        }

        const result = await cartAddProduct(data, token)

        if (result === 'Product added'){
            // Poner una alerta
        }
    }

    return { handleAddCartProduct }
}
