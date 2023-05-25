import { productDelete } from "../services/productsDelete";
import Cookies from "universal-cookie"

export function useDeleteProduct() {
    const handleDeleteProduct = async (id) => {
        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token

        const result = await productDelete(id, token);

        if (result === 'Product deleted') {
            window.location.href = '/admin'
        }
    }

    return { handleDeleteProduct }
}