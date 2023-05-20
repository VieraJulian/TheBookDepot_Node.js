import React, { useState } from 'react';
import AddAddress from './AddAdress';
import { useGetUserAddresses } from '../../../hooks/useGetUserAddress';
import { useEditAddress } from '../../../hooks/useEditAddress';

import "../../../../public/css/components/profile/address/address-mobile.css"
import "../../../../public/css/components/profile/address/address-desktop.css"

function Address() {
    const { addresses } = useGetUserAddresses()
    const [selectedContent, setSelectedContent] = useState('')
    const { handleInputChange, handleOnSubmit } = useEditAddress(addresses)

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
                {
                    addresses && addresses.length === 0
                        ? <AddAddress />
                        : null
                }
                {addresses &&
                    addresses.map((address, index) => {
                        return (
                            <form className={'address-form' + (index > 0 ? ' second' : '')} key={address.id} onSubmit={(event) => handleOnSubmit(index, event)}>
                                <div className="address-inputs">
                                    <p className="p-direccion">Dirección {index + 1}</p>
                                    <label>Destinatario:</label>
                                    <input type="text"
                                        name='addresse'
                                        placeholder='Destinatario'
                                        defaultValue={address.addresse}
                                        onChange={(event) => handleInputChange(index, event)} />
                                    <label>Celular:</label>
                                    <input type="text"
                                        name='phone'
                                        placeholder='Celular'
                                        defaultValue={address.phone}
                                        onChange={(event) => handleInputChange(index, event)} />
                                    <label>Provincia:</label>
                                    <input type="text"
                                        name='province'
                                        placeholder='Provincia'
                                        defaultValue={address.province}
                                        onChange={(event) => handleInputChange(index, event)} />
                                    <label>Ciudad:</label>
                                    <input type="text"
                                        name='city'
                                        placeholder='Ciudad'
                                        defaultValue={address.city}
                                        onChange={(event) => handleInputChange(index, event)} />
                                    <label>Dirección:</label>
                                    <input type="text"
                                        name='address'
                                        placeholder='Dirección'
                                        defaultValue={address.address}
                                        onChange={(event) => handleInputChange(index, event)} />
                                    <button className="address-saved">Guardar cambios</button>
                                    <button className="delete-address">Eliminar direccíon</button>
                                </div>
                            </form>)
                    })
                }
                {
                    addresses && addresses.length === 1
                        ?
                        <>
                            <button className="add-address" onClick={() => handleMenuClick('addAddress')}>Nueva dirección</button>
                            {selectedContent === 'addAddress' ? <AddAddress /> : null}
                        </>
                        : null
                }
            </div>
        </>
    )
}

export default Address