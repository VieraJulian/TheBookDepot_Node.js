import { createContext, useState, useEffect } from "react";

export const ProductFavoriteContext = createContext()

export function ProductFavoriteProvider({ children }) {
    const [productsFavorites, setProductsFavorite] = useState(JSON.parse(localStorage.getItem('productsFavorites')) ?? [])

    useEffect(() => {
        localStorage.setItem('productsFavorites', JSON.stringify(productsFavorites))
    }, [productsFavorites])

    const addFavorite = product => {
        const productInFavoritesIndex = productsFavorites.findIndex(p => p.id === product.id)

        if (productInFavoritesIndex >= 0){
            return
        }

        setProductsFavorite(prevState => ([
            ...prevState,
            {
                id: product.id
            }
        ]))
    }

    const removeFavoriteProduct = product => {
        const productInFavoritesIndex = productsFavorites.findIndex(p => p.id === product.id)
        
        if (productInFavoritesIndex >= 0) {
            const newFavorites = productsFavorites.filter(p => p.id !== product.id)
            return setProductsFavorite(newFavorites)
        }
    }

    const clearFavorites = () => {
        setProductsFavorite([])
    }
    
    return (
        <ProductFavoriteContext.Provider value={{
            productsFavorites,
            addFavorite,
            clearFavorites,
            removeFavoriteProduct
        }}>
            {children}
        </ProductFavoriteContext.Provider>
    )
}