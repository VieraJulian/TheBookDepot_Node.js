import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useGetAllProduct } from '../hooks/useGetAllProduct'
import { usePaginationProducts } from '../hooks/usePaginationProducts'

import Navbar from './Navbar'
import Footer from './Footer'

import "../../public/css/carousel/carousel-mobile.css"
import "../../public/css/carousel/carousel-desktop.css"
import "../../public/css/home/home-mobile.css"

function Home() {
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(20)
    const { products, totalPages } = useGetAllProduct(page, size)
    const { handleChangePage, handlePrevClick, handleNextClick, paginationNumbers } = usePaginationProducts(page, totalPages, setPage)

    return (
        <>
            <Navbar />
            <div className='home'>
                <div className='home-container'>
                    <div className='carousel-container'>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <Link to="#">
                                    <div className="carousel-item active">
                                        <img src="../../public/img/carousel/slider1.jpg" className="d-block w-100" alt="slider1" />
                                    </div>
                                </Link>
                                <Link to="#">
                                    <div className="carousel-item">
                                        <img src="../../public/img/carousel/slider2.jpg" className="d-block w-100" alt="slider2" />
                                    </div>
                                </Link>
                                <Link to="#">
                                    <div className="carousel-item">
                                        <img src="../../public/img/carousel/slider3.jpg" className="d-block w-100" alt="slider3" />
                                    </div>
                                </Link>
                            </div>
                            <button className="carousel-control-prev a" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='home-articles-container'>
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
                            <div className="pagination-container-home">
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

export default Home