import React, { useState, useEffect } from 'react';
import { productsGetBestSellers } from '../services/productsGetBestSellers';

export function useGetProductBestSeller(page, size,setLoading) {
    const [products, setProducts] = useState(null)
    const [totalPages, setTotalPages] = useState(null)

    useEffect(() => {
        async function getProductsBestSeller() {
            const result = await productsGetBestSellers(page, size)
            setProducts(result.productsAll)
            setTotalPages(result.totalPages)
            setLoading(false)
        }

        getProductsBestSeller()
    }, [page])

    return { products, totalPages }
}