import { createContext, useEffect, useState } from "react";

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
            clearSaved
        }}>
            {children}
        </ProductSavedContext.Provider>
    )
}