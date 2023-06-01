import { useGetUserOrder } from "../../../hooks/useGetUserOrder"

import "../../../../public/css/components/profile/order/order-mobile.css"
import "../../../../public/css/components/profile/order/order-desktop.css"

function Order() {
    const { orders } = useGetUserOrder()

    return (
        <>
            <div className="order-container">
                <p className="order-title">Mis Pedidos</p>
                {
                    orders &&
                    orders.map((order, index) => {
                        return (
                            <div className={"order-detail" + (index > 0 ? ' other' : '')} key={order.orderId}>
                                <div className="order-header">
                                    <div className="order-header-p">
                                        <p>Nº Pedido: {order.orderNumber}</p><span>|</span>
                                        <p>Fecha: {order.date}</p><span>|</span>
                                        <p className="order-total">Monto total: ${order.total}</p>
                                    </div>
                                    <div>
                                        <p className="order-delivered">{order.delivered ? 'Entregado' : 'Pendiente'}</p>
                                    </div>
                                </div>
                                <div className="order-product-container">
                                    {
                                        order.orderItems.map(orderItem => {
                                            return (
                                                <div className="order-product-detail" key={orderItem.id}>
                                                    <div className="order-img-container">
                                                        <img src={orderItem.image} alt={orderItem.title} />
                                                    </div>
                                                    <div className="product-detail">
                                                        <p>{orderItem.title}</p><span>|</span>
                                                        <p>Cantidad: {orderItem.quantity}</p><span>|</span>
                                                        <p className="product-price">Precio: ${orderItem.price}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="order-info">
                                    <p className="paymentMethod">Método de pago: {order.paymentMethod}</p>
                                    {
                                        order.addressOrder ?
                                        <>
                                            <p>Destinatario: {order.addressOrder.addresse}</p>
                                            <p>Celular: {order.addressOrder.phone}</p>
                                            <p>Provincia: {order.addressOrder.province}</p>
                                            <p>Ciudad: {order.addressOrder.city}</p>
                                            <p>Dirección: {order.addressOrder.address}</p>
                                        </>
                                        :
                                        <p>Recoger en local: Avenida Libertad, 1234 - Buenos Aires</p>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Order