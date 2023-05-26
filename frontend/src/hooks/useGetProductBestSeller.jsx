import React, { useState, useEffect } from 'react';
import { productsGetBestSellers } from '../services/productsGetBestSellers';

export function useGetProductBestSeller(page, size) {
    const [products, setProducts] = useState(null)
    const [totalPages, setTotalPages] = useState(null)

    useEffect(() => {
        async function getProductsBestSeller() {
            const result = await productsGetBestSellers(page, size)
            setProducts(result.productsAll)
            setTotalPages(result.totalPages)
        }

        getProductsBestSeller()
    }, [page])

    return { products, totalPages }
}