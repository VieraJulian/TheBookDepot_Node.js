import { useContext } from "react";
import { ProductSavedContext } from '../context/productSaved'

export const useProductSaved = () => {
    const context = useContext(ProductSavedContext)

    if(context === undefined){
        throw new Error("useProductSaved must be used within a ProductSavedProvider")
    }

    return context
}