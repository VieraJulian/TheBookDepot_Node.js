import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { productDetail } from "../services/productsDetail";

export function useGetArticle({ id }) {
    const [article, setArticle] = useState(null)

    const cookies = new Cookies();
    const cookieGet = cookies.get('response')
    const token = cookieGet.token

    useEffect(() => {
        async function getArticle() {
            const data = await productDetail(id, token)
            setArticle(data)
        }

        getArticle()
    }, [id])

    return { article }
}