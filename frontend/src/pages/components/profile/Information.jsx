import { useEditProfile } from "../../../hooks/useEditProfile"

import "../../../../public/css/components/profile/information/information-mobile.css"
import "../../../../public/css/components/profile/information/information-desktop.css"

function Information({ userInfoProfile }) {
    const { handleValuesChange, handleImageChange, handleOnSubmit } = useEditProfile({ userInfoProfile })

    return (
        <>
            <div className="info-container">
                <p className="p-info">Mi Perfil</p>
                <form className="info-form" onSubmit={handleOnSubmit}>
                    <div className="info-inputs">
                        <label>Nombre:</label>
                        <input type="text"
                            name='firstName'
                            placeholder='Nombre'
                            defaultValue={userInfoProfile.firstName}
                            onChange={handleValuesChange} />
                        <label>Apellidos:</label>
                        <input type="text"
                            name='lastName'
                            placeholder='Apellidos'
                            defaultValue={userInfoProfile.lastName}
                            onChange={handleValuesChange} />
                        <label>Celular:</label>
                        <input type="text"
                            name='phone'
                            placeholder='Celular'
                            defaultValue={userInfoProfile.phone}
                            onChange={handleValuesChange} />
                        <label>Fecha de nacimiento:</label>
                        <input type="date"
                            name='birthDate'
                            placeholder='Fecha de nacimiento'
                            defaultValue={userInfoProfile.birthDate}
                            onChange={handleValuesChange} />
                    </div>
                    <div className="info-img-container">
                        <label>Foto de perfil:</label>
                        <div className="info-div-img">
                            <img src={userInfoProfile.image} alt={userInfoProfile.firstName} />
                        </div>
                        <input type="file"
                            name='image'
                            className="img-profile"
                            onChange={handleImageChange} />
                    </div>
                    <div className="button-saved-container">
                        <button className="info-saved" type="submit">Guardar cambios</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Information