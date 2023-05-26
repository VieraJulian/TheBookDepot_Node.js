import { productsAddFavorites } from "../services/productsAddFavorites";
import Cookies from "universal-cookie"

export function useProductAddFavorites(){
    const handleAddFavorite = async (id) => {

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

        await productsAddFavorites(data, token)
    }

    return { handleAddFavorite }
}