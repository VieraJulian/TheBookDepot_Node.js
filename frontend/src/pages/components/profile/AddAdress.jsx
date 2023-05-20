import { useCreateAddress } from "../../../hooks/useCreateAddress"

function AddAddress() {
    const { handleValuesChange, handleOnSubmit, values } = useCreateAddress()

    return (
        <>
            <form className="address-form second" onSubmit={handleOnSubmit}>
                <div className="address-inputs">
                    <p className="p-direccion">Añadir dirección</p>
                    <label>Destinatario:</label>
                    <input type="text"
                        name='addresse'
                        placeholder='Destinatario'
                        value={values.addresse}
                        onChange={handleValuesChange} />
                    <label>Celular:</label>
                    <input type="text"
                        name='phone'
                        placeholder='Celular'
                        value={values.phone}
                        onChange={handleValuesChange} />
                    <label>Provincia:</label>
                    <input type="text"
                        name='province'
                        placeholder='Provincia'
                        value={values.province}
                        onChange={handleValuesChange} />
                    <label>Ciudad:</label>
                    <input type="text"
                        name='city'
                        placeholder='Ciudad'
                        value={values.city}
                        onChange={handleValuesChange} />
                    <label>Dirección:</label>
                    <input type="text"
                        name='address'
                        placeholder='Dirección'
                        value={values.address}
                        onChange={handleValuesChange} />
                    <button className="info-saved">Guardar cambios</button>
                </div>
            </form>
        </>
    )
}

export default AddAddress