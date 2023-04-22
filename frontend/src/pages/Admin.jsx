import { Link } from 'react-router-dom'
import React, { useState } from 'react';

import Product from './components/admin/Product';
import Order from './components/admin/Order';

import "../../public/css/admin/admin-mobile.css"
import "../../public/css/admin/admin-tablet.css"
import "../../public/css/admin/admin-desktop.css"

function Admin() {
    const [selectedContent, setSelectedContent] = useState('Product');

    function handleMenuClick(content) {
        setSelectedContent(content);
    }

    return (
        <div className="admin-page">
            <div className='admin-container'>
                <div className='admin-section-container'>
                    <div className='admin-navbar'>
                        <div className='admin-info'>
                            <div className='admin-navbar-logo'>
                                <img src="../../public/img/logo.png" alt="Logo" />
                            </div>
                            <div className='admin-navbar-img'>
                                <img src="../../public/img/balondeoro.jpg" alt="" />
                            </div>
                            <p className='admin-name'>Julián Eduardo Viera</p>
                            <p className='admin-p'>ADMINISTRADOR</p>
                        </div>
                        <div className='navbar-links'>
                            <Link to="#" onClick={() => handleMenuClick('Product')}><p>Productos</p></Link>
                            <Link to="#" onClick={() => handleMenuClick('Order')}><p>Pedidos</p></Link>
                            <Link to="/">Ir al Sitio</Link>
                        </div>
                    </div>
                    <div className='admin-content'>
                        <div className='info-site'>
                            <div className='info-container-div color-div-one'><p>Ventas</p><p className='result'>$ 300.000</p></div>
                            <div className='info-container-div color-div-two'><p>Pedidos</p><p className='result'>23</p></div>
                            <div className='info-container-div color-div-three'><p>Productos</p><p className='result'>235</p></div>
                            <div className='info-container-div color-div-four'><p>Usuarios</p><p className='result'>1289</p></div>
                        </div>
                        <div className='select-container'>
                            {selectedContent === 'Product' && <Product />}
                            {selectedContent === 'Order' && <Order />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin