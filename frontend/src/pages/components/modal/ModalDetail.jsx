import React from "react";

import "../../../../public/css/modal/detailModal.css"

function ModalDetail({ product }) {

    return (
        <>
            <div className="modal fade" id="modalDetail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Lorem, ipsum dolor.</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="detailModal-body">
                            <div className="detailModal-info">
                                <p>Autor: Lorem ipsum dolor</p>
                                <p>Editorial: Lorem, ipsum.</p>
                                <p>Precio: $90000.00</p>
                                <p>Colleción: lorem</p>
                                <p>Números de páginas: 234</p>
                                <p>Idioma: castellano</p>
                                <p>Formato: Lorem</p>
                                <p>ISBN: 29365465934879</p>
                                <p>Peso (en gramos): 235</p>
                                <p>Edición: 2023</p>
                                <p>Stock: 123</p>
                            </div>
                            <div className="detailModal-img">
                                <img src="../../../../public/img/portadaEj.png" alt="" />
                            </div>
                            <div className="detailModal-button">
                                <button type="button" className="btn btn-danger">Eliminar</button>
                                <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEdit">Modificar</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDetail