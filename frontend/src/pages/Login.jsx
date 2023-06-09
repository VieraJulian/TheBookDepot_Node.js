import React from 'react';
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin';

import Navbar from './Navbar'
import Footer from './Footer'

import "../../public/css/login/login-mobile.css"
import "../../public/css/login/login-tablet.css"
import "../../public/css/login/login-desktop.css"

function Login() {
    const { handleChange, handleOnSubmit, values } = useLogin()

    return (
        <>
            <div className='login-div-container'>
                <Navbar />
                <div className='loginContainer'>
                    <picture className='login-img'>
                        <img src="../../public/img/background/imgLogin.avif" alt="Libros" />
                    </picture>
                    <div className='login'>
                        <div className='login-container'>
                            <div className='login-form-container'>
                                <form className='login-form' onSubmit={handleOnSubmit}>
                                    <p>Ingresar a mi cuenta</p>
                                    <fieldset className='btns-container'>
                                        <button className='btn-f'>Facebook</button>
                                        <button className='btn-g'>Google</button>
                                    </fieldset>
                                    <fieldset className='int-container'>
                                        <input type="text"
                                            name='email'
                                            placeholder='Correo'
                                            spellCheck="false"
                                            autoComplete="off"
                                            value={values.email}
                                            onChange={handleChange} />
                                        <input type="password"
                                            name='password'
                                            placeholder='Contraseña'
                                            spellCheck="false"
                                            autoComplete="off"
                                            value={values.password}
                                            onChange={handleChange} />
                                    </fieldset>
                                    <button type='submit' className='btn-submit'>Ingresar</button>
                                    <fieldset className='links-container'>
                                        <Link to="#" >¿Olvidaste tu contraseña?</Link>
                                        <Link to="#" >¿Todavía no tenés una cuenta?<span>Crear cuenta</span></Link>
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

export default Login