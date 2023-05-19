import { useState } from "react";
import { userEditProfile } from "../../../services/usersEditProfile";
import Cookies from 'universal-cookie';
import "../../../../public/css/components/profile/information/information-mobile.css"
import "../../../../public/css/components/profile/information/information-desktop.css"

function Information({ userInfoProfile }) {
    const [image, setImage] = useState(null)
    const [values, setValues] = useState({
        firstName: userInfoProfile.firstName,
        lastName: userInfoProfile.lastName,
        phone: userInfoProfile.phone,
        birthDate: userInfoProfile.birthDate
    })

    const handleValuesChange = (event) => {
        const { target } = event
        const { name, value } = target

        const newValues = {
            ...values,
            [name]: value
        }

        setValues(newValues)
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token
        const id = cookieGet.userId

        const formData = new FormData()

        formData.append('id', id)
        formData.append('firstName', values.firstName)
        formData.append('lastName', values.lastName)
        formData.append('birthDate', values.birthDate)
        formData.append('phone', values.phone)
        formData.append('image', image)


        const result = await userEditProfile(formData, token)

        if (result === 'Edited profile') {
            window.location.href = '/users/profile'
        }
    }

    return (
        <>
            <div className="info-container">
                <p className="p-info">Mi Perfil</p>
                <form className="info-form" onSubmit={handleOnSubmit}>
                    <div className="info-inputs">
                        <label>Nombre:</label>
                        <input type="text" name='firstName' placeholder='Nombre' defaultValue={userInfoProfile.firstName} onChange={handleValuesChange} />
                        <label>Apellidos:</label>
                        <input type="text" name='lastName' placeholder='Apellidos' defaultValue={userInfoProfile.lastName} onChange={handleValuesChange} />
                        <label>Celular:</label>
                        <input type="text" name='phone' placeholder='Celular' defaultValue={userInfoProfile.phone} onChange={handleValuesChange} />
                        <label>Fecha de nacimiento:</label>
                        <input type="date" name='birthDate' placeholder='Fecha de nacimiento' defaultValue={userInfoProfile.birthDate} onChange={handleValuesChange} />
                    </div>
                    <div className="info-img-container">
                        <label>Foto de perfil:</label>
                        <div className="info-div-img">
                            <img src={userInfoProfile.image} alt={userInfoProfile.firstName} />
                        </div>
                        <input type="file" name='image' className="img-profile" onChange={handleImageChange} />
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