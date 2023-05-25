import { Link } from 'react-router-dom'
import { useGetUserFavorite } from '../../../hooks/useGetUserFavorite'
import { useDeleteProductFavorite } from '../../../hooks/useDeleteProductFavorite'

import "../../../../public/css/components/profile/favorites/favorites-mobile.css"

function ProductFavorite() {
    const { products } = useGetUserFavorite()
    const { handleDeleteFavorites } = useDeleteProductFavorite()

    return (
        <>
            <div className="favorite-container">
                <p className="p-favorites">Mis Favoritos</p>
                <div className="favorite-p-container">
                    {
                        products && products.length > 0 ?
                            products.map(product => {
                                return (
                                    <Link to='#' key={product.id}>
                                        <div className="favorite-product">
                                            <div className="favorite-img-container">
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <div className="favorite-detail">
                                                <p>{product.title}</p>
                                                <p className="favorite-price">$ {product.price}</p>
                                            </div>
                                            <div className="favorite-btns">
                                                <button><i className="fa-solid fa-cart-plus"></i></button>
                                                <button onClick={() => handleDeleteFavorites(product.id)}><i className="fa-solid fa-circle-xmark"></i></button>
                                                <button><i className="fa-brands fa-whatsapp"></i></button>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                            :
                            <div>
                                <div className='nothing-favorite'>
                                    <p>No tienes productos en favoritos</p>
                                    <i className="fa-regular fa-face-frown"></i>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ProductFavorite