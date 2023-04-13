import React, { useState } from 'react';

import AddAddress from './AddAdress';

import "../../../public/css/components/address/address-mobile.css"
import "../../../public/css/components/address/address-desktop.css"

function Address() {
    const [selectedContent, setSelectedContent] = useState('');

    function handleMenuClick(content) {
        if (selectedContent === content) {
            setSelectedContent('');
        } else {
            setSelectedContent(content);
        }
    }

    return (
        <>
            <div className="address-container">
                <p className="p-address">Mis Direcciones</p>
                <form className="address-form" method="POST">
                    <div className="address-inputs">
                        <p className="p-direccion">Dirección 1</p>
                        <label>Destinatario:</label>
                        <input type="text" name='addresse' placeholder='Destinatario' />
                        <label>Celular:</label>
                        <input type="text" name='phone' placeholder='Celular' />
                        <label>Provincia:</label>
                        <input type="text" name='province' placeholder='Provincia' />
                        <label>Ciudad:</label>
                        <input type="text" name='city' placeholder='Ciudad' />
                        <label>Dirección:</label>
                        <input type="text" name='address' placeholder='Dirección' />
                        <button className="info-saved">Guardar cambios</button>
                    </div>
                </form>
                <form className="address-form second" method="POST">
                    <div className="address-inputs">
                        <p className="p-direccion">Dirección 2</p>
                        <label>Destinatario:</label>
                        <input type="text" name='addresse' placeholder='Destinatario' />
                        <label>Celular:</label>
                        <input type="text" name='phone' placeholder='Celular' />
                        <label>Provincia:</label>
                        <input type="text" name='province' placeholder='Provincia' />
                        <label>Ciudad:</label>
                        <input type="text" name='city' placeholder='Ciudad' />
                        <label>Dirección:</label>
                        <input type="text" name='address' placeholder='Dirección' />
                        <button className="info-saved">Guardar cambios</button>
                    </div>
                </form>
                <button className="add-address" onClick={() => handleMenuClick('addAddress')}>Nueva dirección</button>
                {selectedContent === 'addAddress' ? <AddAddress /> : null}
            </div>
        </>
    )
}

export default Address