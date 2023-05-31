import { Link } from 'react-router-dom'
import { useProductFavorite } from '../../../hooks/useProductFavorite'
import { useProductInfo } from '../../../hooks/useProductInfo'
import { useCart } from '../../../hooks/useCart';

import "../../../../public/css/components/profile/favorites/favorites-mobile.css"

function ProductFavorite() {
    const { clearFavorites, removeFavoriteProduct, productsFavorites } = useProductFavorite()
    const { addToCart } = useCart()
    const { products } = useProductInfo(productsFavorites)

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
                                            {
                                                product.stock > 0 &&
                                                <button onClick={() => addToCart(product)}><i className="fa-solid fa-cart-plus"></i></button>
                                            }
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
                    {
                    products && products.length > 0 &&
                        <button onClick={() => clearFavorites()}>Eliminar</button>

                    }
                </div>
            </div>
        </>
    )
}

export default ProductFavorite