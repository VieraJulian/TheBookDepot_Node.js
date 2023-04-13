import { Link } from 'react-router-dom'

import "../../../public/css/components/favorites/favorites-mobile.css"

function ProductFavorite() {
    return (
        <>
            <div className="favorite-container">
                <p className="p-favorites">Mis Favoritos</p>
                <div className="favorite-p-container">
                    <Link to="#">
                        <div className="favorite-product">
                            <div className="favorite-img-container">
                                <img src="../../../public/img/portadaEj.png" alt="" />
                            </div>
                            <div className="favorite-detail">
                                <p>Lorem, ipsum dolor.</p>
                                <p className="favorite-price">$ 5000.00</p>
                            </div>
                            <div className="favorite-btns">
                                <button><i class="fa-solid fa-cart-plus"></i></button>
                                <button><i class="fa-solid fa-circle-xmark"></i></button>
                                <button><i class="fa-brands fa-whatsapp"></i></button>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <div className='nothing-favorite'>
                            <p>No tienes productos guardados </p>
                            <i class="fa-regular fa-face-frown"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductFavorite