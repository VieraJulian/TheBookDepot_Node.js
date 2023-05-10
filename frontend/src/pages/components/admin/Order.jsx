import ModalOrderDetail from "../modal/ModalOrderDetail";

import "../../../../public/css/components/admin/order/order-mobile.css"
import "../../../../public/css/components/admin/order/order-desktop.css"

function Order() {
    return (
        <>
            <div className="products-order-container">
                <div className="pagination-container">
                    <button><i className="fa-solid fa-caret-left"></i></button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button><i className="fa-solid fa-caret-right"></i></button>
                </div>
            </div>
            <div className="msg-mobile">
                <p>"Esta página puede no funcionar correctamente en dispositivos móviles o tablets."</p>
            </div>
            <div className="order-admin-container">
                <div className="order-admin-header">
                    <p className="p-order-max">N° Pedido</p>
                    <p className="p-order">Fecha</p>
                    <p className="p-order-max">Método de pago</p>
                    <p className="p-order">Total</p>
                    <p className="p-order">Estado</p>
                    <p className="p-order">Detalle</p>
                </div>
                <div className="order-admin-detail">
                    <p className="p-order-max">1680641619</p>
                    <p className="p-order">29/10/21</p>
                    <p className="p-order-max">Mercado pago</p>
                    <p className="p-order">$99000.00</p>
                    <p className="p-order">Pendiente</p>
                    <div className="view-detail-order">
                        <button data-bs-toggle="modal" data-bs-target="#modalOrderDetail"><i class="fa-solid fa-eye"></i></button>
                    </div>
                </div>
                <div className="order-admin-detail">
                    <p className="p-order-max">1680641619</p>
                    <p className="p-order">29/10/21</p>
                    <p className="p-order-max">Mercado pago</p>
                    <p className="p-order">$99000.00</p>
                    <p className="p-order">Pendiente</p>
                    <div className="view-detail-order">
                        <button data-bs-toggle="modal" data-bs-target="#modalOrderDetail"><i class="fa-solid fa-eye"></i></button>
                    </div>
                </div>
                <div className="order-admin-detail">
                    <p className="p-order-max">1680641619</p>
                    <p className="p-order">29/10/21</p>
                    <p className="p-order-max">Mercado pago</p>
                    <p className="p-order">$99000.00</p>
                    <p className="p-order">Pendiente</p>
                    <div className="view-detail-order">
                        <button data-bs-toggle="modal" data-bs-target="#modalOrderDetail"><i class="fa-solid fa-eye"></i></button>
                    </div>
                </div>
                <ModalOrderDetail />
            </div>
        </>
    )
}

export default Order