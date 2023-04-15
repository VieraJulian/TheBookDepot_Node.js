import Navbar from './Navbar'
import Footer from './Footer'

import "../../public/css/cart/cart-mobile.css"
import "../../public/css/cart/cart-tablet.css"
import "../../public/css/cart/cart-desktop.css"

function Cart() {
    return (
        <div className="cart-container">
            <Navbar />
            <div className="cart-details">
                <p className='cart-title'>Carrito de compras</p>
                <div className='cart-left'>
                    <div className="cart-item">
                        <div className="cart-item-header">
                            <p className='cart-header-producto'>Producto</p>
                            <p className='cart-header-p'>Precio</p>
                            <p className='cart-header-p'>Cantidad</p>
                            <p className='cart-header-p'>Total</p>
                            <p className='cart-header-action'>Acción</p>
                        </div>
                        <div className="cart-item-content">
                            <div className="cart-item-image">
                                <img src="../../public/img/portadaEj.png" alt="" />
                                <div className="cart-item-info">
                                    <p>Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <p className="cart-item-price">$ 3000.00</p>
                            <div className="cart-item-quantity">
                                <p>1</p>
                                <button className="increment">+</button>
                                <button className="decrement">-</button>
                            </div>
                            <p className="cart-item-total">$ 6000.00</p>
                            <div className="cart-item-actions">
                                <button><i className="fa-sharp fa-solid fa-trash"></i></button>
                                <button><i className="fa-regular fa-bookmark"></i></button>
                            </div>
                        </div>
                        <div className="cart-item-content">
                            <div className="cart-item-image">
                                <img src="../../public/img/portadaEj.png" alt="" />
                                <div className="cart-item-info">
                                    <p>Lorem ipsum dolor sit.</p>
                                </div>
                            </div>
                            <p className="cart-item-price">$ 3000.00</p>
                            <div className="cart-item-quantity">
                                <p>1</p>
                                <button className="increment">+</button>
                                <button className="decrement">-</button>
                            </div>
                            <p className="cart-item-total">$ 6000.00</p>
                            <div className="cart-item-actions">
                                <button><i className="fa-sharp fa-solid fa-trash"></i></button>
                                <button><i className="fa-regular fa-bookmark"></i></button>
                            </div>
                        </div>
                    </div>
                    <form className="cart-shipping" action="">
                        <p className='shipping-title'>Escoge dirección de envío</p>
                        <div className="cart-shipping-options">
                            <div className="cart-shipping-option">
                                <p>Dirección 1:</p><input className='radio' type="radio" name="opcion" value="1" />
                            </div>
                            <div className="cart-shipping-details">
                                <p>Destinatario: Lorem ipsum dolor sit amet.</p>
                                <p>Celular: +111111111111</p>
                                <p>Provincia: Lorem.</p>
                                <p>Ciudad: Lorem, ipsum.</p>
                                <p>Dirección: Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className="cart-shipping-options">
                            <div className="cart-shipping-option">
                                <p>Dirección 2:</p><input className='radio' type="radio" name="opcion" value="1" />
                            </div>
                            <div className="cart-shipping-details">
                                <p>Destinatario: Lorem ipsum dolor sit amet.</p>
                                <p>Celular: +111111111111</p>
                                <p>Provincia: Lorem.</p>
                                <p>Ciudad: Lorem, ipsum.</p>
                                <p>Dirección: Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className="cart-shipping-options">
                            <div className="cart-shipping-option">
                                <p>Recoger en local:</p><input className='radio' type="radio" name="opcion" value="2" />
                            </div>
                            <div className="cart-shipping-details">
                                <p>Dirección del local: Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="cart-summary">
                    <p className='summary-title'>Resumen de pedido</p>
                    <div className="cart-summary-item">
                        <p>Cantidad:</p><p className="item-value">1</p>
                    </div>
                    <div className="cart-summary-item">
                        <p>Total a pagar:</p><p className="item-value">$3000.00</p>
                    </div>
                    <div className="cart-summary-item">
                        <p>Envío:</p><p className="item-value">A tratar</p>
                    </div>
                    <button className='buy'>Pagar ahora</button>
                    <div className="cart-help">
                        <div className='mastercard'><img src="../../public/img/cart/masterCard.png" alt="" /><img src="../../public/img/cart/icon-mp.webp" alt="" /></div>
                        <div className='promo'><img src="../../public/img/cart/2x1.jpg" alt="" /></div>
                        <button className='help-wts'>Ayuda al whatsapp: +11111111111<i className="fa-brands fa-whatsapp wts"></i></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart