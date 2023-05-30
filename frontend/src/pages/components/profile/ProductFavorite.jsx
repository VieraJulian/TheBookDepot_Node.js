import { Link } from 'react-router-dom'
import { useDeleteProductFavorite } from '../../../hooks/useDeleteProductFavorite'
import { useCartAddProduct } from '../../../hooks/useCartAddProduct'

import { useProductFavorite } from '../../../hooks/useProductFavorite'

import "../../../../public/css/components/profile/favorites/favorites-mobile.css"

function ProductFavorite() {
    const { handleDeleteFavorites } = useDeleteProductFavorite()
    const { handleAddCartProduct } = useCartAddProduct()
    const { productsFavorites, clearFavorites, removeFavoriteProduct } = useProductFavorite()

    return (
        <>
            <div className="favorite-container">
                <p className="p-favorites">Mis Favoritos</p>
                <div className="favorite-p-container">
                    {
                        productsFavorites && productsFavorites.length > 0 ?
                            productsFavorites.map(product => {
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
                                            <button onClick={() => removeFavoriteProduct(product)}><i className="fa-solid fa-circle-xmark"></i></button>
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
                    <button onClick={() => clearFavorites()}>Elimiar</button>
                </div>
            </div>
        </>
    )
}

export default ProductFavorite