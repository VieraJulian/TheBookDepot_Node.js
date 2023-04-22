import { Link } from 'react-router-dom'
import React, { useState } from 'react';

import Navbar from './Navbar'
import Footer from './Footer'
import Information from './components/profile/Information'
import Address from './components/profile/Address'
import Order from './components/profile/Order'
import ProductFavorite from './components/profile/ProductFavorite';
import ProductSaved from './components/profile/ProductSaved'

import "../../public/css/profile/profile-mobile.css"
import "../../public/css/profile/profile-tablet.css"
import "../../public/css/profile/profile-desktop.css"

function Profile() {
    const [selectedContent, setSelectedContent] = useState('Information');

    function handleMenuClick(content) {
        setSelectedContent(content);
    }

    return (
        <>
            <div className='profile-page'>
                <Navbar />
                <div className='profile-container'>
                    <div className='profile-menu'>
                        <div className='profile-menu-1'>
                            <div className='img-container'>
                                <img src="../../public/img/balondeoro.jpg" alt="" />
                            </div>
                            <p className='p-name'>Julián Eduardo Viera</p>
                        </div>
                        <div className='profile-menu-2'>
                            <Link to="#" onClick={() => handleMenuClick('Information')}><p>Mi perfil</p></Link>
                            <Link to="#" onClick={() => handleMenuClick('Address')}><p>Mis direcciones</p></Link>
                        </div>
                        <div className='profile-menu-3'>
                            <Link to="#" onClick={() => handleMenuClick('Order')}><p>Mis compras</p></Link>
                            <Link to="#" onClick={() => handleMenuClick('ProductFavorite')}><p>Mis favoritos</p></Link>
                            <Link to="#" onClick={() => handleMenuClick('ProductSaved')}><p>Productos guardados</p></Link>
                        </div>
                        <div className='profile-menu-4'>
                            <Link to="/"><p className='btn-cerrar'>Cerrar</p></Link>
                        </div>
                    </div>
                    <div className='profile-selected'>
                        {selectedContent === 'Information' && <Information />}
                        {selectedContent === 'Address' && <Address />}
                        {selectedContent === 'Order' && <Order />}
                        {selectedContent === 'ProductFavorite' && <ProductFavorite />}
                        {selectedContent === 'ProductSaved' && <ProductSaved />}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Profile