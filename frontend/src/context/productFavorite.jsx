import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductFavoriteContext = createContext()

export function ProductFavoriteProvider({ children }) {
    const [productsFavorites, setProductsFavorite] = useState(JSON.parse(localStorage.getItem('productsFavorites')) ?? [])

    useEffect(() => {
        localStorage.setItem('productsFavorites', JSON.stringify(productsFavorites))
    }, [productsFavorites])

    const addFavorite = product => {
        const productInFavoritesIndex = productsFavorites.findIndex(p => p.id === product.id)

        if (productInFavoritesIndex >= 0) {
            return
        }

        setProductsFavorite(prevState => ([
            ...prevState,
            {
                id: product.id
            }
        ]))

        toast.success('Añadido a favoritos!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const checkProductInFavorite = product => {
        return productsFavorites.some(item => item.id === product.id)
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
            removeFavoriteProduct,
            checkProductInFavorite
        }}>
            {children}
        </ProductFavoriteContext.Provider>
    )
}