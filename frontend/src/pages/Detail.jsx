import Navbar from './Navbar'
import Footer from './Footer'

import "../../public/css/detail/detail-mobile.css"
import "../../public/css/detail/detail-tablet.css"
import "../../public/css/detail/detail-desktop.css"

function Detail() {
    return (
        <>
            <div className='detail-container'>
                <Navbar />
                <div className='detail-page'>
                    <div className='detail-img-container'>
                        <div className='detail-bestSeller'>
                            <p>Más Vendidos</p>
                        </div>
                        <img src="../../public/img/portadaEj.png" alt="" />
                    </div>
                    <div className='detail-first'>
                        <div className='detail-description'>
                            <p className='product-title'>Lorem ipsum dolor sit amet consectetur.</p>
                            <p className='detail-description-p'>Colleción: Lorem.</p>
                            <p className='detail-description-p'>Autor: Lorem, ipsum.</p>
                            <p className='detail-description-p'>Editorial: Lorem, ipsum.</p>
                        </div>
                        <div className='detail-price'>
                            <div className='detail-price-info'>
                                <p className='detail-info-price'>$ 3000.00</p>
                                <p className='available-stock'>Disponibilidad: En stock</p>
                                {/* <p className='notAvailable-stock'>Disponibilidad: Sin stock</p> */}
                            </div>
                            <div className='detail-actions'>
                                <button>
                                    <i class="fa-regular fa-heart"></i>
                                    {/* <i className="fa-solid fa-heart"></i> */}
                                </button>
                                <button>
                                    <i class="fa-regular fa-bookmark"></i>
                                    {/* <i class="fa-solid fa-bookmark"></i> */}
                                </button>
                                <button>
                                    <i className="fa-brands fa-whatsapp"></i>
                                </button>
                            </div>
                        </div>
                        <div className='detail-add-to-cart'>
                            <button>Agregar al carrito</button>
                        </div>
                    </div>
                    <div className='detail-details'>
                        <p className='detail-text'>Detalles:</p>
                        <div className='detail-details-info'>
                            <p>Números de páginas: 453</p>
                            <p>Peso: 234</p>
                            <p>Formato: Lorem, ipsum.</p>
                            <p>Edición: 2023</p>
                            <p>Idioma: castellano</p>
                            <p>ISBN: Lorem ipsum, dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Detail;