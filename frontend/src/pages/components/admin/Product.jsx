import React, { useState } from "react";
import ModalCreate from "../modal/ModalCreate"
import ModalDetail from "../modal/ModalDetail"
import ModalEdit from "../modal/ModalEdit";
import { useGetAllProduct } from "../../../hooks/useGetAllProduct";

import "../../../../public/css/components/admin/product/product-mobile.css"
import "../../../../public/css/components/admin/product/product-desktop.css"

function Product() {
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(1)

    const { products, totalPages } = useGetAllProduct(page, size)

    const handleChangePage = (event) => {
        const number = parseInt(event.target.innerHTML);
        setPage(number);
    };

    const handlePrevClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextClick = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const paginationNumbers = [];
    let startPage = Math.max(page - 2, 1);
    let endPage = Math.min(page + 1, totalPages);

    if (startPage === 1) {
        endPage = Math.min(startPage + 3, totalPages);
    }

    if (endPage === totalPages) {
        startPage = Math.max(endPage - 3, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationNumbers.push(
            <li key={i} className={i === page ? 'active' : ''} onClick={handleChangePage}>
                {i}
            </li>
        );
    }

    return (
        <>
            <div className="msg-mobile">
                <p>"Esta página puede no funcionar correctamente en dispositivos móviles o tablets."</p>
            </div>
            <div className="product-container">
                <button className="add-product" data-bs-toggle="modal" data-bs-target="#modalCreate">AGREGAR NUEVO PRODUCTO</button>
                <div className="products-order-container">
                    <div className="pagination-container">
                        {page !== 1 && (
                            <button onClick={handlePrevClick}><i className="fa-solid fa-caret-left"></i></button>
                        )}
                        {paginationNumbers.map((number, i) => (
                            <button className={page === number ? 'active' : ''} onClick={handleChangePage} key={i}>{number}</button>
                        ))}
                        {
                            page !== totalPages && (
                                <button onClick={handleNextClick}><i className="fa-solid fa-caret-right"></i></button>
                            )
                        }


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