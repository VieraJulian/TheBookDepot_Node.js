export function usePaginationProducts( page, totalPages, setPage) {
    const handleChangePage = (event) => {
        const number = parseInt(event.target.innerHTML);
        setPage(number);
    };

    const handlePrevClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextClick = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const paginationNumbers = [];
    let startPage = Math.max(page - 2, 1);
    let endPage = Math.min(page + 1, totalPages);

    if (startPage === 1) {
        endPage = Math.min(startPage + 3, totalPages);
    }

    if (endPage === totalPages) {
        startPage = Math.max(endPage - 3, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationNumbers.push(
            <li key={i} className={i === page ? 'active' : ''} onClick={handleChangePage}>
                {i}
            </li>
        );
    }

    return { handleChangePage, handlePrevClick, handleNextClick, paginationNumbers }
}