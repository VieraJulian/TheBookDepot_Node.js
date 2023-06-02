import ModalOrderDetail from "../modal/ModalOrderDetail";
import { usePaginationProducts } from "../../../hooks/usePaginationProducts";
import { useState } from "react";
import { useGetOrdersAdmin } from "../../../hooks/useGetOrdersAdmin";

import "../../../../public/css/components/admin/order/order-mobile.css"
import "../../../../public/css/components/admin/order/order-desktop.css"

function Order() {
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(20)
    const [orderS, setOrderS] = useState(null)
    const { orders, totalPages } = useGetOrdersAdmin(page, size)
    const { handleChangePage, handlePrevClick, handleNextClick, paginationNumbers } = usePaginationProducts(page, totalPages, setPage)

    const handleProductModal = (order) => {
        setOrderS(order)
    }

    return (
        <>
            <div className="products-order-container">
                {orders && orders.length > 0 &&
                    <div className="pagination-container">
                        {page !== 1 && (
                            <button onClick={handlePrevClick}><i className="fa-solid fa-caret-left"></i></button>
                        )}
                        {paginationNumbers && paginationNumbers.map((number, i) => (
                            <button className={page === number ? 'active' : ''} onClick={handleChangePage} key={i}>{number}</button>
                        ))}
                        {
                            page !== totalPages && (
                                <button onClick={handleNextClick}><i className="fa-solid fa-caret-right"></i></button>
                            )
                        }
                    </div>
                }
            </div>
            <div className="msg-mobile">
                <p>"Esta página puede no funcionar correctamente en dispositivos móviles o tablets."</p>
            </div>
            <div className="order-admin-container">
                {
                    orders ?
                        <>
                            <div className="order-admin-header">
                                <p className="p-order-max">N° Pedido</p>
                                <p className="p-order">Fecha</p>
                                <p className="p-order-max">Método de pago</p>
                                <p className="p-order">Total</p>
                                <p className="p-order">Estado</p>
                                <p className="p-order">Detalle</p>
                            </div>
                            {
                                orders && orders.length > 0 &&
                                orders.map(order => {
                                    return (
                                        <div className="order-admin-detail" key={order.id}>
                                            <p className="p-order-max">{order.orderNumber}</p>
                                            <p className="p-order">{order.date}</p>
                                            <p className="p-order-max">{order.paymentMethod}</p>
                                            <p className="p-order">${order.total}</p>
                                            <p className="p-order">{order.delivered === true ? "Entregado" : "Pendiente"}</p>
                                            <div className="view-detail-order">
                                                <button data-bs-toggle="modal" data-bs-target="#modalOrderDetail" onClick={() => handleProductModal(order)}><i className="fa-solid fa-eye"></i></button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                        : <p>No hay ordenes</p>
                }
                <ModalOrderDetail orderS={orderS} />
            </div>
        </>
    )
}

export default Order