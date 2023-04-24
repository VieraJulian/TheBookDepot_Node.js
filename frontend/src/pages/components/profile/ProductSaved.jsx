import { Link } from 'react-router-dom'

import '../../../../public/css/components/profile/saved/saved-mobile.css'

function ProductSaved() {
    return (
        <>
            <div className="saved-container">
                <p className="p-saved">Productos Guardados</p>
                <div className="saved-p-container">
                    <Link to="#">
                        <div className="saved-product">
                            <div className="saved-img-container">
                                <img src="../../../public/img/portadaEj.png" alt="" />
                            </div>
                            <div className="saved-detail">
                                <p>Lorem, ipsum dolor.</p>
                                <p className="saved-price">$ 5000.00</p>
                            </div>
                            <div className="saved-btns">
                                <button><i className="fa-solid fa-cart-plus"></i></button>
                                <button><i className="fa-solid fa-circle-xmark"></i></button>
                                <button><i className="fa-brands fa-whatsapp"></i></button>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <div className='nothing-saved'>
                            <p>No tienes productos guardados</p>
                            <i className="fa-regular fa-face-frown"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSaved