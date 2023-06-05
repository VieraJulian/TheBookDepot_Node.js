import React, { useEffect, useState } from 'react';

export function useSpanishOnly({ products }) {
    const [spanishOnly, setSpanishOnly] = useState([])
    useEffect(() => {
        if (products) {
            const books = products.filter(b => b.language.toLowerCase() !== "ingles" && b.language.toLowerCase() !== "inglés")
            setSpanishOnly(books)
        }
    }, [products])

    return { spanishOnly }
}