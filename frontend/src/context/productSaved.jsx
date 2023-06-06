import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductSavedContext = createContext()

export function ProductSavedProvider({ children }) {
    const [saved, setSaved] = useState(JSON.parse(localStorage.getItem('productSaved')) ?? [])

    useEffect(() => {
        localStorage.setItem('productSaved', JSON.stringify(saved))
    }, [saved])

    const addSaved = product => {
        const productInSavedIndex = saved.findIndex(p => p.id === product.id)

        if (productInSavedIndex >= 0){
            return
        }

        setSaved(prevState => ([
            ...prevState,
            {
                id: product.id
            }
        ]))

        toast.success('Producto guardado!', {
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

    const checkProductInSaved = product => {
        return saved.some(item => item.id === product.id)
    }

    const removeSavedProduct = product => {
        const productInSavedIndex = saved.findIndex(p => p.id === product.id)
        
        if (productInSavedIndex >= 0) {
            const newSaved = saved.filter(p => p.id !== product.id)
            return setSaved(newSaved)
        }
    }

    const clearSaved = () => {
        setSaved([])
    }

    return (
        <ProductSavedContext.Provider value={{
            saved,
            addSaved,
            removeSavedProduct,
            clearSaved,
            checkProductInSaved
        }}>
            {children}
        </ProductSavedContext.Provider>
    )
}