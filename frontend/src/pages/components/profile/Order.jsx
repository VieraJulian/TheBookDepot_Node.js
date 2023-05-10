import "../../../../public/css/components/profile/order/order-mobile.css"
import "../../../../public/css/components/profile/order/order-desktop.css"

function Order() {
    return (
        <>
            <div className="order-container">
                <p className="order-title">Mis Pedidos</p>
                <div className="order-detail">
                    <div className="order-header">
                        <div className="order-header-p">
                            <p>Nº Pedido: 1680641619</p><span>|</span>
                            <p>Fecha: 29/10/21</p><span>|</span>
                            <p className="order-total">Monto total: $5000.00</p>
                        </div>
                        <div>
                            <p className="order-delivered">Entregado</p>
                        </div>
                    </div>
                    <div className="order-product-container">
                        <div className="order-product-detail">
                            <div className="order-img-container">
                                <img src="../../../public/img/portadaEj.png" alt="" />
                            </div>
                            <div className="product-detail">
                                <p>Lorem, ipsum dolor.</p><span>|</span>
                                <p>Cantidad: 1</p><span>|</span>
                                <p className="product-price">Precio: $3000.00</p>
                            </div>
                        </div>
                        <div className="order-product-detail">
                            <div className="order-img-container">
                                <img src="../../../public/img/portadaEj.png" alt="" />
                            </div>
                            <div className="product-detail">
                                <p>Lorem, ipsum dolor.</p><span>|</span>
                                <p>Cantidad: 1</p><span>|</span>
                                <p className="product-price">Precio: $3000.00</p>
                            </div>
                        </div>
                        <div className="order-product-detail">
                            <div className="order-img-container">
                                <img src="../../../public/img/portadaEj.png" alt="" />
                            </div>
                            <div className="product-detail">
                                <p>Lorem, ipsum dolor.</p><span>|</span>
                                <p>Cantidad: 1</p><span>|</span>
                                <p className="product-price">Precio: $3000.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-info">
                        <p className="paymentMethod">Método de pago: Mercado Pago</p>
                        <p>Destinatario: Julian Eduardo Viera</p>
                        <p>Celular: +543442111111</p>
                        <p>Provincia: Entre Ríos</p>
                        <p>Ciudad: San José</p>
                        <p>Dirección: Junín 2020</p>
                    </div>
                </div>
                <div className="order-detail other">
                    <div className="order-header">
                        <div className="order-header-p">
                            <p>Nº Pedido: 1680641619</p><span>|</span>
                            <p>Fecha: 29/10/21</p><span>|</span>
                            <p className="order-total">Monto total: $5000.00</p>
                        </div>
                        <div>
                            <p className="order-delivered">Entregado</p>
                        </div>
                    </div>
                    <div className="order-product-container">
                        <div className="order-product-detail">
                            <div className="order-img-container">
                                <img src="../../../public/img/portadaEj.png" alt="" />
                            </div>
                            <div className="product-detail">
                                <p>Lorem, ipsum dolor.</p><span>|</span>
                                <p>Cantidad: 1</p><span>|</span>
                                <p className="product-price">Precio: $3000.00</p>
                            </div>
                        </div>
                        <div className="order-product-detail">
                            <div className="order-img-container">
                                <img src="../../../public/img/portadaEj.png" alt="" />
                            </div>
                            <div className="product-detail">
                                <p>Lorem, ipsum dolor.</p><span>|</span>
                                <p>Cantidad: 1</p><span>|</span>
                                <p className="product-price">Precio: $3000.00</p>
                            </div>
                        </div>
                        <div className="order-product-detail">
                            <div className="order-img-container">
                                <img src="../../../public/img/portadaEj.png" alt="" />
                            </div>
                            <div className="product-detail">
                                <p>Lorem, ipsum dolor.</p><span>|</span>
                                <p>Cantidad: 1</p><span>|</span>
                                <p className="product-price">Precio: $3000.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-info">
                        <p className="paymentMethod">Método de pago: Mercado Pago</p>
                        <p>Destinatario: Julian Eduardo Viera</p>
                        <p>Celular: +543442111111</p>
                        <p>Provincia: Entre Ríos</p>
                        <p>Ciudad: San José</p>
                        <p>Dirección: Junín 2020</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order