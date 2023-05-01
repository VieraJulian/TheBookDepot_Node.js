import React from "react";

import "../../../../public/css/modal/modal.css"

function ModalOrderDetail() {

    return (
        <>
            <div className="modal fade" id="modalOrderDetail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Detalle del pedido</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>N° Pedido:162893748923</p>
                            <p>Fecha: 02/08/2023</p>
                            <p>Monto Total: $50000.00</p>
                            <p>Estado: Pendiente</p>
                            <p>Metodo de pago</p>
                            <p>Destinatario: Julián Viera</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalOrderDetail