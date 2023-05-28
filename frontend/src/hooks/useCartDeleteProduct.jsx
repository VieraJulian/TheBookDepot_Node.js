import { cartDeleteProduct } from '../services/cartDeleteProduct';
import Cookies from "universal-cookie"

export function useCartDeleteProduct(){
    const handleProductCartDelete = async (id) => {
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

        await cartDeleteProduct(data, token)
    }

    return { handleProductCartDelete }
}