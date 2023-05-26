import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useGetProductBestSeller } from '../hooks/useGetProductBestSeller'
import { usePaginationProducts } from '../hooks/usePaginationProducts'

import '../../public/css/bestSeller/bestSeller-mobile.css'

import Navbar from './Navbar'
import Footer from './Footer'

function BestSeller() {
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(1)
    const { products, totalPages } = useGetProductBestSeller(page, size)
    const { handleChangePage, handlePrevClick, handleNextClick, paginationNumbers } = usePaginationProducts(page, totalPages, setPage)


    return (
        <>
            <Navbar />
            <div className='bestSeller'>
                <div className='bestSeller-container'>
                    <div className='bestSeller-articles-container'>
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
                            <div className="pagination-container-bestSeller">
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
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default BestSeller