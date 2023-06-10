import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useGetProductEnglish } from '../hooks/useGetProductEnglish';
import { usePaginationProducts } from '../hooks/usePaginationProducts'
import Loader from '../components/Loader';

import '../../public/css/english/english-mobile.css'

import Navbar from './Navbar'
import Footer from './Footer'

function English() {
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(15)
    const [loading, setLoading] = useState(true);
    const { products, totalPages } = useGetProductEnglish(page, size, setLoading)
    const { handleChangePage, handlePrevClick, handleNextClick, paginationNumbers } = usePaginationProducts(page, totalPages, setPage)

    return (
        <>
            <Navbar />
            <div className='english'>
                <div className='english-container'>
                    <div className='english-articles-container'>
                        {loading ?
                            <Loader /> :
                            <div className='articles-container'>
                                {products &&
                                    products.map(product => {
                                        return (
                                            <div className='article' key={product.id}>
                                                <Link to={`/products/detail/${product.id}`}>
                                                    <img className='article-img' src={product.image} alt={product.title} />
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                                <div className="pagination-container-english">
                                    {page !== 1 && (
                                        <button onClick={handlePrevClick}><i className="fa-solid fa-caret-left"></i></button>
                                    )}
                                    {paginationNumbers && paginationNumbers.map((number, i) => (
                                        <button className={page === number ? 'active' : ''} onClick={handleChangePage} key={i}>{number}</button>
                                    ))}
                                    {
                                        page !== totalPages && (
                                            <button onClick={handleNextClick}><i className="fa-solid fa-caret-right"></i></button>
                                        )
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default English