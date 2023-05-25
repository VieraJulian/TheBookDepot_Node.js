import React from "react";
import { useDeleteProduct } from "../../../hooks/useDeleteProduct";

import "../../../../public/css/modal/detailModal.css"

function ModalDetail({ productS }) {
    const { handleDeleteProduct } = useDeleteProduct()

    return (
        <>
            <div className="modal fade" id="modalDetail" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    {productS && (
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{productS.title}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="detailModal-body">
                                <div className="detailModal-info">
                                    <p>Autor: {productS.author}</p>
                                    <p>Editorial: {productS.editorial}</p>
                                    <p>Precio: ${productS.price}</p>
                                    <p>Colleción: {productS.collection}</p>
                                    <p>Números de páginas: {productS.numberPages}</p>
                                    <p>Idioma: {productS.language}</p>
                                    <p>Formato: {productS.format}</p>
                                    <p>ISBN: {productS.isbn}</p>
                                    <p>Peso (en gramos): {productS.weight}</p>
                                    <p>Edición: {productS.edition}</p>
                                    <p>Stock: {productS.stock}</p>
                                </div>
                                <div className="detailModal-img">
                                    <img src={productS.image} alt={productS.title} />
                                </div>
                                <div className="detailModal-button">
                                    <button type="button" className="btn btn-danger" onClick={() => handleDeleteProduct(productS.id)}>Eliminar</button>
                                    <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEdit">Modificar</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ModalDetail