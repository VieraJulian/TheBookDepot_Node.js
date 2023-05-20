import React, { useState, useEffect } from 'react';
import { productDetail } from "../services/productsDetail";

export function useGetArticle({ id }) {
    const [article, setArticle] = useState(null)

    useEffect(() => {
        async function getArticle() {
            const data = await productDetail(id)
            setArticle(data)
        }

        getArticle()
    }, [id])

    return { article }
}