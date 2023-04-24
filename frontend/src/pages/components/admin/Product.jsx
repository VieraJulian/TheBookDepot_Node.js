import "../../../../public/css/components-admin/product/product-mobile.css"
import "../../../../public/css/components-admin/product/product-desktop.css"

function Product() {
    return (
        <>
            <div className="msg-mobile">
                <p>"Esta página puede no funcionar correctamente en dispositivos móviles o tablets."</p>
            </div>
            <div className="product-container">
                <button className="add-product">AGREGAR NUEVO PRODUCTO</button>
                <div className="products-order-container">
                    <div className="pagination-container">
                        <button><i class="fa-solid fa-caret-left"></i></button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button><i class="fa-solid fa-caret-right"></i></button>
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
                            <div className="info-product">
                                <div className="product-detail-img">
                                    <img src="../../../../public/img/balondeoro.jpg" alt="" />
                                </div>
                                <p className="p-info-nombre">Lorem ipsum dolor sit.</p>
                                <p className="p-info-detail">$5000.00</p>
                                <p className="p-info-detail">234</p>
                                <p className="p-info-detail">190</p>
                                <div className="view-detail">
                                    <button><i class="fa-solid fa-eye"></i></button>
                                </div>
                            </div>
                            <div className="info-product">
                                <div className="product-detail-img">
                                    <img src="../../../../public/img/balondeoro.jpg" alt="" />
                                </div>
                                <p className="p-info-nombre">Lorem ipsum dolor sit.</p>
                                <p className="p-info-detail">$99000.00</p>
                                <p className="p-info-detail">234</p>
                                <p className="p-info-detail">190</p>
                                <div className="view-detail">
                                    <button><i class="fa-solid fa-eye"></i></button>
                                </div>
                            </div>
                            <div className="info-product">
                                <div className="product-detail-img">
                                    <img src="../../../../public/img/balondeoro.jpg" alt="" />
                                </div>
                                <p className="p-info-nombre">Lorem ipsum dolor sit.</p>
                                <p className="p-info-detail">$5000.00</p>
                                <p className="p-info-detail">234</p>
                                <p className="p-info-detail">190</p>
                                <div className="view-detail">
                                    <button><i class="fa-solid fa-eye"></i></button>
                                </div>
                            </div><div className="info-product">
                                <div className="product-detail-img">
                                    <img src="../../../../public/img/balondeoro.jpg" alt="" />
                                </div>
                                <p className="p-info-nombre">Lorem ipsum dolor sit.</p>
                                <p className="p-info-detail">$5000.00</p>
                                <p className="p-info-detail">234</p>
                                <p className="p-info-detail">190</p>
                                <div className="view-detail">
                                    <button><i class="fa-solid fa-eye"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product