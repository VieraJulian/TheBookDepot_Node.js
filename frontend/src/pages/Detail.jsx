import { useParams } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import { useGetArticle } from "../hooks/useGetArticle";
import { useProductAddFavorites } from "../hooks/useProductAddFavorites";
import { useSaveProduct } from "../hooks/useSaveProduct";
import { useCartAddProduct } from "../hooks/useCartAddProduct";

// Carrito new
import { useCart } from '../hooks/useCart'

import "../../public/css/detail/detail-mobile.css"
import "../../public/css/detail/detail-tablet.css"
import "../../public/css/detail/detail-desktop.css"

function Detail() {
    const { id } = useParams()
    const { article } = useGetArticle({ id })
    const { handleAddFavorite } = useProductAddFavorites()
    const { handleProductSaved } = useSaveProduct()
    const { handleAddCartProduct } = useCartAddProduct()

    // Carrito new
    const { addToCart, cart } = useCart()

    console.log(cart)

    return (
        <>
            <div className='detail-container'>
                <Navbar />
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
                                        <button onClick={() => handleAddFavorite(article.id)}>
                                            <i className="fa-regular fa-heart"></i>
                                            {/* <i className="fa-solid fa-heart"></i> */}
                                        </button>
                                        <button onClick={() => handleProductSaved(article.id)}>
                                            <i className="fa-regular fa-bookmark"></i>
                                            {/* <i class="fa-solid fa-bookmark"></i> */}
                                        </button>
                                        <button>
                                            <i className="fa-brands fa-whatsapp"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='detail-add-to-cart'>
                                    <button onClick={() => {
                                        addToCart(article)
                                    }}>Agregar al carrito</button>
                                </div>
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
                <Footer />
            </div>
        </>
    )
}

export default Detail;