import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

import "../../public/css/register/register-mobile.css"
import "../../public/css/register/register-tablet.css"
import "../../public/css/register/register-desktop.css"

function Register() {
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
                                <form className='register-form'>
                                    <p>Regístrate</p>
                                    <fieldset className='btns-container'>
                                        <button className='btn-f'>Facebook</button>
                                        <button className='btn-g'>Google</button>
                                    </fieldset>
                                    <fieldset className='register-int-container'>
                                        <input className='register-input' type="text" name='firstName' placeholder='Nombre'/>
                                        <input className='register-input' type="text" name='lastName' placeholder='Apellidos'/>
                                        <input className='register-input' type="text" name='email' placeholder='Correo' spellCheck="false"
                                            autoComplete="off" />
                                        <input className='register-input' type="password" name='password' placeholder='Contraseña' spellCheck="false"
                                            autoComplete="off" />
                                        <input className='register-input' type="date" name='birtDate' placeholder='Fecha de nacimiento'/>
                                        <input className='register-input' type="text" name='phone' placeholder='Celular'/>
                                        <input type="file" name='image' className='register-file'/>
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