import React from "react";
import { useEditProduct } from "../../../hooks/useEditProduct"

import "../../../../public/css/modal/modal.css"

function ModalEdit({ productS }) {
    const { handleImageChange, handleValueChange, handleOnSubmit } = useEditProduct(productS)

    return (
        <>
            <div className="modal fade" id="modalEdit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar nuevo producto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {
                            productS &&
                            <div className="modal-body">
                                <form className="form-modal" onSubmit={handleOnSubmit}>
                                    <label>Título</label>
                                    <input type="text" name="title" defaultValue={productS.title} onChange={handleValueChange} />
                                    <label>Autor</label>
                                    <input type="text" name="author" defaultValue={productS.author} onChange={handleValueChange} />
                                    <label>Editorial</label>
                                    <input type="text" name="editorial" defaultValue={productS.editorial} onChange={handleValueChange} />
                                    <label>Precio</label>
                                    <input type="text" name="price" defaultValue={productS.price} onChange={handleValueChange} />
                                    <label>Collección</label>
                                    <input type="text" name="collection" defaultValue={productS.collection} onChange={handleValueChange} />
                                    <label>Números de páginas</label>
                                    <input type="number" name="numberPages" defaultValue={productS.numberPages} onChange={handleValueChange} />
                                    <label>Idioma</label>
                                    <input type="text" name="language" defaultValue={productS.language} onChange={handleValueChange} />
                                    <label>Formato</label>
                                    <input type="text" name="format" defaultValue={productS.format} onChange={handleValueChange} />
                                    <label>ISBN</label>
                                    <input type="text" name="isbn" defaultValue={productS.isbn} onChange={handleValueChange} />
                                    <label>Peso en gramos</label>
                                    <input type="number" name="weight" defaultValue={productS.weight} onChange={handleValueChange} />
                                    <label>Edición</label>
                                    <input type="number" name="edition" defaultValue={productS.edition} onChange={handleValueChange} />
                                    <label>Stock</label>
                                    <input type="number" name="stock" defaultValue={productS.stock} onChange={handleValueChange} />
                                    <label>Imagen</label>
                                    <input type="file" name="image" className="file-modal" onChange={handleImageChange} />
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="submit" className="btn btn-primary">Aceptar</button>
                                    </div>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalEdit