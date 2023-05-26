import React, { useState, useEffect } from 'react';
import { productsGetEnglish } from '../services/productsGetEnglish';

export function useGetProductEnglish(page, size) {
    const [products, setProducts] = useState(null)
    const [totalPages, setTotalPages] = useState(null)

    useEffect(() => {
        async function getProductsEnglish() {
            const result = await productsGetEnglish(page, size)
            setProducts(result.englishAll)
            setTotalPages(result.totalPages)
        }

        getProductsEnglish()
    }, [page])

    return { products, totalPages }
}