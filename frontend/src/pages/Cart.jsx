import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartDetail } from '../hooks/useCartDetail'
import { useGetUserAddresses } from '../hooks/useGetUserAddress'
import { useProductSaved } from '../hooks/useProductSaved'
import { useCart } from '../hooks/useCart';
import { useCartPay } from '../hooks/useCartPay'

import Navbar from './Navbar'
import Footer from './Footer'

import "../../public/css/cart/cart-mobile.css"
import "../../public/css/cart/cart-tablet.css"
import "../../public/css/cart/cart-desktop.css"

function Cart() {
    const { cart, clearCart, addToCart, reduceCartProductQuantity, removeCartProduct } = useCart()
    const { products, total, quantity } = useCartDetail({ cart })
    const { addSaved } = useProductSaved()
    const [addressId, setAddressId] = useState(null)
    const { addresses } = useGetUserAddresses()
    const { pay } = useCartPay({ clearCart, addressId })


    const handleAddressSelect = (id) => {
        setAddressId(id)
    }

    return (
        <div className="cart-container">
            <Navbar />
            <div className="cart-details">
                <p className='cart-title'>Carrito de compras</p>
                <div className='cart-left'>
                    <div className="cart-item">
                        {products && products.length > 0 ?
                            <div className="cart-item-header">
                                <p className='cart-header-producto'>Producto</p>
                                <p className='cart-header-p'>Precio</p>
                                <p className='cart-header-p'>Cantidad</p>
                                <p className='cart-header-p'>Total</p>
                                <p className='cart-header-action'>Acción</p>
                            </div>
                            :
                            <div className='cart-empty'>
                                <p>No hay productos en el carrito</p>
                                <Link to='/'>Añadir</Link>
                            </div>
                        }
                        {
                            products &&
                            products.map(product => {
                                return (
                                    <div className="cart-item-content" key={product.id}>
                                        <div className="cart-item-image">
                                            <img src={product.image} alt={product.title} />
                                            <div className="cart-item-info">
                                                <p>{product.title}</p>
                                            </div>
                                        </div>
                                        <p className="cart-item-price">$ {product.price}</p>
                                        <div className="cart-item-quantity">
                                            <p>{product.quantity}</p>
                                            <button className="increment" onClick={() => addToCart(product)}>+</button>
                                            <button className="decrement" onClick={() => reduceCartProductQuantity(product)}>-</button>
                                        </div>
                                        <p className="cart-item-total">$ {product.totalPrice}</p>
                                        <div className="cart-item-actions">
                                            <button onClick={() => removeCartProduct(product)}><i className="fa-sharp fa-solid fa-trash"></i></button>
                                            <button onClick={() => addSaved(product)}><i className="fa-regular fa-bookmark"></i></button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            products && products.length > 0 &&
                            <button className='clearCart' onClick={clearCart}>
                                Vaciar Carrito
                            </button>
                        }
                    </div>
                    {
                        products && products.length > 0 &&
                        <form className="cart-shipping">
                            <p className='shipping-title'>Escoge dirección de envío</p>
                            {
                                addresses &&
                                addresses.map((address, index) => {
                                    return (
                                        <div className="cart-shipping-options" key={address.id}>
                                            <div className="cart-shipping-option">
                                                <p>Dirección {index + 1}:</p><input className='radio' type="radio" name="opcion" onClick={() => handleAddressSelect(address.id)} />
                                            </div>
                                            <div className="cart-shipping-details">
                                                <p>Destinatario: {address.addresse}</p>
                                                <p>Celular: {address.phone}</p>
                                                <p>Provincia: {address.province}</p>
                                                <p>Ciudad: {address.city}</p>
                                                <p>Dirección: {address.address}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="cart-shipping-options">
                                <div className="cart-shipping-option">
                                    <p>Recoger en local:</p><input className='radio' type="radio" name="opcion" onClick={() => handleAddressSelect(null)} defaultChecked />
                                </div>
                                <div className="cart-shipping-details">
                                    <p>Dirección del local: Avenida Libertad, 1234 - Buenos Aires</p>
                                </div>
                            </div>
                        </form>
                    }
                </div>
                {
                    products && products.length > 0 &&
                    <div className="cart-summary">
                        <p className='summary-title'>Resumen de pedido</p>
                        <div className="cart-summary-item">
                            <p>Cantidad:</p><p className="item-value">{quantity}</p>
                        </div>
                        <div className="cart-summary-item">
                            <p>Total a pagar:</p><p className="item-value">${total}</p>
                        </div>
                        <div className="cart-summary-item">
                            <p>Envío:</p><p className="item-value">A tratar</p>
                        </div>
                        <button className='buy' onClick={() => pay()}>Pagar ahora</button>
                        <div className="cart-help">
                            <div className='mastercard'><img src="../../public/img/cart/masterCard.png" alt="" /><img src="../../public/img/cart/icon-mp.webp" alt="" /></div>
                            <div className='promo'><img src="../../public/img/cart/2x1.jpg" alt="" /></div>
                            <button className='help-wts'>Ayuda al whatsapp: +98751827463<i className="fa-brands fa-whatsapp wts"></i></button>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Cart