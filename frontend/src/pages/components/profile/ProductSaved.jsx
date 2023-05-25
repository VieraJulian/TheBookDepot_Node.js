import { Link } from 'react-router-dom'
import { useGetUserSaved } from '../../../hooks/useGetUserSaved'
import { useDeleteProductSaved } from '../../../hooks/useDeleteProductSaved'

import '../../../../public/css/components/profile/saved/saved-mobile.css'

function ProductSaved() {
    const { products } = useGetUserSaved()
    const { handleDeleteSaved } = useDeleteProductSaved()

    return (
        <>
            <div className="saved-container">
                <p className="p-saved">Productos Guardados</p>
                <div className="saved-p-container">
                    {
                        products && products.length > 0 ?
                            products.map(product => {
                                return (
                                    <Link to={`/products/detail/${product.id}`} key={product.id}>
                                        <div className="saved-product">
                                            <div className="saved-img-container">
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <div className="saved-detail">
                                                <p>{product.title}</p>
                                                <p className="saved-price">$ {product.price}</p>
                                            </div>
                                            <div className="saved-btns">
                                                <button><i className="fa-solid fa-cart-plus"></i></button>
                                                <button onClick={(event) => {
                                                    event.stopPropagation();
                                                    handleDeleteSaved(product.id);
                                                }}><i className="fa-solid fa-circle-xmark"></i></button>
                                                <button><i className="fa-brands fa-whatsapp"></i></button>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                            :
                            <div>
                                <div className='nothing-saved'>
                                    <p>No tienes productos guardados</p>
                                    <i className="fa-regular fa-face-frown"></i>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ProductSaved