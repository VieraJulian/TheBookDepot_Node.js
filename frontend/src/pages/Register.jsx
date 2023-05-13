import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userRegister } from '../services/usersRegister'

import Navbar from './Navbar'
import Footer from './Footer'

import "../../public/css/register/register-mobile.css"
import "../../public/css/register/register-tablet.css"
import "../../public/css/register/register-desktop.css"

function Register() {
    const [image, setImage] = useState(null);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        phone: '',
        email: '',
        password: ''
    })

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;

        const newValues = {
            ...values,
            [name]: value,
        };

        setValues(newValues);
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData()
        
        formData.append('firstName', values.firstName)
        formData.append('lastName', values.lastName)
        formData.append('birthDate', values.birthDate)
        formData.append('phone', values.phone)
        formData.append('email', values.email)
        formData.append('password', values.password)
        formData.append('image', image)

        await userRegister(formData)
    }

    return (
        <>
            <div className='register-div-container'>
                <Navbar />
                <div className='registerContainer'>
                    <picture className='register-img'>
                        <img src="../../public/img/background/imgRegister.webp" alt="Libros" />
                    </picture>
                    <div className='register'>
                        <div className='register-container'>
                            <div className='register-form-container'>
                                <form className='register-form' onSubmit={handleOnSubmit}>
                                    <p>Regístrate</p>
                                    <fieldset className='btns-container'>
                                        <button className='btn-f'>Facebook</button>
                                        <button className='btn-g'>Google</button>
                                    </fieldset>
                                    <fieldset className='register-int-container'>
                                        <input className='register-input'
                                            type="text"
                                            name='firstName'
                                            placeholder='Nombre'
                                            value={values.firstName}
                                            onChange={handleChange} />
                                        <input className='register-input'
                                            type="text"
                                            name='lastName'
                                            placeholder='Apellidos'
                                            value={values.lastName}
                                            onChange={handleChange} />
                                        <input className='register-input'
                                            type="text"
                                            name='email'
                                            placeholder='Correo'
                                            spellCheck="false"
                                            autoComplete="off"
                                            value={values.email}
                                            onChange={handleChange} />
                                        <input className='register-input'
                                            type="password"
                                            name='password'
                                            placeholder='Contraseña'
                                            spellCheck="false"
                                            autoComplete="off"
                                            value={values.password}
                                            onChange={handleChange} />
                                        <input className='register-input'
                                            type="date"
                                            name='birthDate'
                                            placeholder='Fecha de nacimiento'
                                            value={values.birthDate}
                                            onChange={handleChange} />
                                        <input className='register-input'
                                            type="text"
                                            name='phone'
                                            placeholder='Celular'
                                            value={values.phone}
                                            onChange={handleChange} />
                                        <input type="file"
                                            name='image'
                                            className='register-file'
                                            value={values.image}
                                            onChange={handleImageChange} />
                                    </fieldset>
                                    <button type='submit' className='btn-submit'>Ingresar</button>
                                    <fieldset className='links-container'>
                                        <Link to="#" >¿Ya tienes una cuenta registrada?<span>Ingresar</span></Link>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Register