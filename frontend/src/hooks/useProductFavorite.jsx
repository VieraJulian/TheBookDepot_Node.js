import { useContext } from "react";
import { ProductFavoriteContext} from '../context/productFavorite'

export const useProductFavorite = () => {
    const context = useContext(ProductFavoriteContext)

    if(context === undefined){
        throw new Error("useProductFavorite must be used within a ProductFavoriteProvider")
    }

    return context
}