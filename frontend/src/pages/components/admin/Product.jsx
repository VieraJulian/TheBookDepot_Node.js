import React, { useState } from "react";
import ModalCreate from "../modal/ModalCreate"
import ModalDetail from "../modal/ModalDetail"
import ModalEdit from "../modal/ModalEdit";
import { useGetAllProduct } from "../../../hooks/useGetAllProduct";

import "../../../../public/css/components/admin/product/product-mobile.css"
import "../../../../public/css/components/admin/product/product-desktop.css"

function Product() {
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(5)

    const { products } = useGetAllProduct(page, size)

    return (
        <>
            <div className="msg-mobile">
                <p>"Esta página puede no funcionar correctamente en dispositivos móviles o tablets."</p>
            </div>
            <div className="product-container">
                <button className="add-product" data-bs-toggle="modal" data-bs-target="#modalCreate">AGREGAR NUEVO PRODUCTO</button>
                <div className="products-order-container">
                    <div className="pagination-container">
                        <button><i className="fa-solid fa-caret-left"></i></button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button><i className="fa-solid fa-caret-right"></i></button>
                    </div>
                    <div className="detail-product">
                        <div className="info-product-container">
                            <div className="info-product-header">
                                <p className="p-imagen">Imagen</p>
                                <p className="p-nombre">Nombre</p>
                                <p className="p-precio">Precio</p>
                                <p className="p-stock">Stock</p>
                                <p className="p-vendido">Vendidos</p>
                                <p className="p-detalle">Detalle</p>
                            </div>
                            {products &&
                                products.map((product) => {
                                    return (
                                        <div className="info-product" key={product.id}>
                                            <div className="product-detail-img">
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <p className="p-info-nombre">{product.title}</p>
                                            <p className="p-info-detail">${product.price}</p>
                                            <p className="p-info-detail">{product.stock}</p>
                                            <p className="p-info-detail">{product.sold}</p>
                                            <div className="view-detail">
                                                <button data-bs-toggle="modal" data-bs-target="#modalDetail"><i className="fa-solid fa-eye"></i></button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <ModalDetail />
                            <ModalCreate />
                            <ModalEdit />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product