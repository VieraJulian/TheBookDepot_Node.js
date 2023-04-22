function AddAddress() {
    return (
        <>
            <form className="address-form second" method="POST">
                <div className="address-inputs">
                    <p className="p-direccion">Añadir dirección</p>
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
        </>
    )
}

export default AddAddress