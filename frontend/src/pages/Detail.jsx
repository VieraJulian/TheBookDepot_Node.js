import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetArticle } from "../hooks/useGetArticle";
import { useCart } from '../hooks/useCart'
import { useProductFavorite } from '../hooks/useProductFavorite'
import { useProductSaved } from "../hooks/useProductSaved";
import { useWhatsapp } from "../hooks/useWhatsapp";
import Loader from '../components/Loader';

import Navbar from './Navbar'
import Footer from './Footer'

import "../../public/css/detail/detail-mobile.css"
import "../../public/css/detail/detail-tablet.css"
import "../../public/css/detail/detail-desktop.css"

function Detail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true);
    const { article } = useGetArticle({ id, setLoading })
    const { addToCart } = useCart()
    const { addFavorite, checkProductInFavorite, removeFavoriteProduct } = useProductFavorite()
    const { addSaved, checkProductInSaved, removeSavedProduct } = useProductSaved()
    const { handleWhatsAppClick } = useWhatsapp()

    return (
        <>
            <div className='detail-container'>
                <Navbar />
                {loading ?
                    <Loader /> :
                    <div className='detail-page'>
                        {article &&
                            <>
                                <div className='detail-img-container'>
                                    {article.sold >= 100
                                        &&
                                        <div className='detail-bestSeller'>
                                            <p>Más Vendidos</p>
                                        </div>
                                    }
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className='detail-first'>
                                    <div className='detail-description'>
                                        <p className='product-title'>{article.title}</p>
                                        <p className='detail-description-p'>Colleción: {article.collection}</p>
                                        <p className='detail-description-p'>Autor: {article.author}</p>
                                        <p className='detail-description-p'>Editorial: {article.editorial}</p>
                                    </div>
                                    <div className='detail-price'>
                                        <div className='detail-price-info'>
                                            <p className='detail-info-price'>$ {article.price}</p>
                                            {article.stock !== 0
                                                ? <p className='available-stock'>Disponibilidad: En stock</p>
                                                : <p className='notAvailable-stock'>Disponibilidad: Sin stock</p>
                                            }
                                        </div>
                                        <div className='detail-actions'>
                                            <button onClick={() => {
                                                checkProductInFavorite(article)
                                                    ? removeFavoriteProduct(article)
                                                    : addFavorite(article)
                                            }}>
                                                {checkProductInFavorite(article)
                                                    ? <i className="fa-solid fa-heart"></i>
                                                    : <i className="fa-regular fa-heart"></i>}
                                            </button>
                                            <button onClick={() => {
                                                checkProductInSaved(article)
                                                    ? removeSavedProduct(article)
                                                    : addSaved(article)
                                            }}>
                                                {checkProductInSaved(article)
                                                    ? <i className="fa-solid fa-bookmark"></i>
                                                    : <i className="fa-regular fa-bookmark"></i>}
                                            </button>
                                            <button onClick={() => handleWhatsAppClick(article)}>
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        article && article.stock > 1 &&
                                        <div className='detail-add-to-cart'>
                                            <button onClick={() => {
                                                addToCart(article)
                                            }}>Agregar al carrito</button>
                                        </div>
                                    }
                                </div>
                                <div className='detail-details'>
                                    <p className='detail-text'>Detalles:</p>
                                    <div className='detail-details-info'>
                                        <p>Números de páginas: {article.numberPages}.</p>
                                        <p>Peso: {article.weight}.</p>
                                        <p>Formato: {article.format}.</p>
                                        <p>Edición: {article.edition}.</p>
                                        <p>Idioma: {article.language}.</p>
                                        <p>ISBN: {article.isbn}.</p>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                }
                <Footer />
            </div>
        </>
    )
}

export default Detail;