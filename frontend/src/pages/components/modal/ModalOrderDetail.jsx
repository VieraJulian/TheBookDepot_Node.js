import React from "react";

import "../../../../public/css/modal/modal.css"

function ModalOrderDetail({ orderS }) {

    return (
        <>
            <div className="modal fade" id="modalOrderDetail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Detalle del pedido</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {
                            orderS &&
                            <div className="modal-body">
                                <p>N° Pedido: {orderS.orderNumber}</p>
                                <p>Fecha: {orderS.date}</p>
                                <p>Monto Total: ${orderS.total}</p>
                                <p>Metodo de pago: {orderS.paymentMethod}</p>
                                {
                                    orderS.address &&
                                    <>
                                        <p>Destinatario: {orderS.address.addresse}</p>
                                        <p>Celular: {orderS.address.phone}</p>
                                        <p>Provincia: {orderS.address.province}</p>
                                        <p>Ciudad: {orderS.address.city}</p>
                                        <p>Dirección: {orderS.address.address}</p>
                                        <p>Estado: {orderS.delivered === true ? "Entregado" : "Pendiente"}</p>
                                    </>
                                }
                            </div>
                        }
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button className="button-order">Pedido entregado</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalOrderDetail