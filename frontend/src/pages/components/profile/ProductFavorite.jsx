import { Link } from 'react-router-dom'
import { useGetUserFavorite } from '../../../hooks/useGetUserFavorite'
import { useDeleteProductFavorite } from '../../../hooks/useDeleteProductFavorite'
import { useCartAddProduct } from '../../../hooks/useCartAddProduct'

import "../../../../public/css/components/profile/favorites/favorites-mobile.css"

function ProductFavorite() {
    const { handleDeleteFavorites } = useDeleteProductFavorite()
    const { products } = useGetUserFavorite({ handleDeleteFavorites })
    const { handleAddCartProduct } = useCartAddProduct()

    return (
        <>
            <div className="favorite-container">
                <p className="p-favorites">Mis Favoritos</p>
                <div className="favorite-p-container">
                    {
                        products && products.length > 0 ?
                            products.map(product => {
                                return (
                                    <div className="favorite-product" key={product.id}>
                                        <Link to={`/products/detail/${product.id}`}>
                                            <div className="favorite-img-container">
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <div className="favorite-detail">
                                                <p>{product.title}</p>
                                                <p className="favorite-price">$ {product.price}</p>
                                            </div>
                                        </Link>
                                        <div className="favorite-btns">
                                            <button onClick={() => handleAddCartProduct(product.id)}><i className="fa-solid fa-cart-plus"></i></button>
                                            <button onClick={(event) => {
                                                event.stopPropagation();
                                                handleDeleteFavorites(product.id)
                                            }}><i className="fa-solid fa-circle-xmark"></i></button>
                                            <button><i className="fa-brands fa-whatsapp"></i></button>
                                        </div>
                                    </div>
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