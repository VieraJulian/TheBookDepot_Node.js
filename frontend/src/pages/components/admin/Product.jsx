import "../../../../public/css/components-admin/product/product-mobile.css"

function Product() {
    return (
        <>
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
                        <div>
                            <p>Imagen</p>
                            <p>Nombre</p>
                            <p>Precio</p>
                            <p>Stock</p>
                            <p>Vendidos</p>
                            <p>Detalle</p>
                        </div>
                        <div>
                            <div>
                                <p>Imagen</p>
                                <p>Nombre</p>
                                <p>Precio</p>
                                <p>Stock</p>
                                <p>Vendidos</p>
                                <p>Detalle</p>
                            </div>
                            <div>
                                <div className="product-detail-img">
                                    <img src="../../../../public/img/balondeoro.jpg" alt="" />
                                </div>
                                <p>Lorem ipsum dolor sit.</p>
                                <p>$ 5000.00</p>
                                <p>234</p>
                                <p>190</p>
                                <button><i class="fa-solid fa-eye"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product