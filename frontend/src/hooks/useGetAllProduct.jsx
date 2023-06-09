import React, { useEffect, useState } from "react";
import { productGetAll } from "../services/productsGetAll";

export function useGetAllProduct(page, size, setLoading) {
    const [products, setProducts] = useState(null)
    const [totalPages, setTotalPages] = useState(null)

    useEffect(() => {
        async function getProducts() {
            const results = await productGetAll(page, size)
            setProducts(results.productsAll)
            setTotalPages(results.totalPages)
            setLoading(false)   
        }

        getProducts()
    }, [page])

    return { products, totalPages }
}