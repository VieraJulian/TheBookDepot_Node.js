import React from "react";
import { useEditProduct } from "../../../hooks/useEditProduct";

import "../../../../public/css/modal/modal.css"

function ModalCreate() {
    const { handleImageChange, handleChange, handleOnSubmit, values } = useEditProduct()
    return (
        <>
            <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar nuevo producto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form-modal" onSubmit={handleOnSubmit}>
                                <label>Título</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange} />
                                <label>Autor</label>
                                <input
                                    type="text"
                                    name="author"
                                    value={values.author}
                                    onChange={handleChange} />
                                <label>Editorial</label>
                                <input
                                    type="text"
                                    name="editorial"
                                    value={values.editorial}
                                    onChange={handleChange} />
                                <label>Precio</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange} />
                                <label>Collección</label>
                                <input
                                    type="text"
                                    name="collection"
                                    value={values.collection}
                                    onChange={handleChange} />
                                <label>Números de páginas</label>
                                <input
                                    type="number"
                                    name="numberPages"
                                    value={values.numberPages}
                                    onChange={handleChange} />
                                <label>Idioma</label>
                                <input
                                    type="text"
                                    name="language"
                                    value={values.language}
                                    onChange={handleChange} />
                                <label>Formato</label>
                                <input
                                    type="text"
                                    name="format"
                                    value={values.format}
                                    onChange={handleChange} />
                                <label>ISBN</label>
                                <input
                                    type="text"
                                    name="isbn"
                                    value={values.isbn}
                                    onChange={handleChange} />
                                <label>Peso en gramos</label>
                                <input
                                    type="number"
                                    name="weight"
                                    value={values.weight}
                                    onChange={handleChange} />
                                <label>Edición</label>
                                <input
                                    type="number"
                                    name="edition"
                                    value={values.edition}
                                    onChange={handleChange} />
                                <label>Stock</label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={values.stock}
                                    onChange={handleChange} />
                                <label>Imagen</label>
                                <input
                                    type="file"
                                    name="image"
                                    className="file-modal"
                                    onChange={handleImageChange} />
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" className="btn btn-primary">Aceptar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCreate