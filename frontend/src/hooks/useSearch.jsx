import { search } from '../services/search';
import { useState } from 'react';

export function useSearch() {
    const [booksFound, setBooksFound] = useState([])

    const clearBooksFound = () => {
        setBooksFound("")
    }

    const foundBookDetail = (e) => {
        e.preventDefault()

        if (booksFound.length > 0) {
            window.location.href = `/products/detail/${booksFound[0].id}`
        }
    }

    const searchValue = async (query) => {
        if (query.trim() === '') {
            setBooksFound([]);
            return;
        }

        const result = await search(query);
        setBooksFound(result);
    };

    return { booksFound, searchValue, clearBooksFound, foundBookDetail }
}