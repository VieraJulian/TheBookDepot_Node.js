import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import Footer from './Footer'

import "../../public/css/profile-mobile.css"

function Profile() {
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
                            <Link to="#"><p>Mi perfil</p></Link>
                            <Link to="#"><p>Mis direcciones</p></Link>
                        </div>
                        <div className='profile-menu-3'>
                            <Link to="#"><p>Mis compras</p></Link>
                            <Link to="#"><p>Mis favoritos</p></Link>
                            <Link to="#"><p>Productos guardados</p></Link>
                        </div>
                        <div className='profile-menu-4'>
                            <Link to="/"><p className='btn-cerrar'>Cerrar</p></Link>
                        </div>
                    </div>
                    <div className='profile-selected'>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Profile