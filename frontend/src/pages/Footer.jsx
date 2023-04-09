import { Link } from 'react-router-dom'

import "../../public/css/footer-mobile.css"

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-container'>
                    <picture>
                        <img src="../../public/img/logo.png" alt="Logo" />
                    </picture>
                    <nav className='footer-links'>
                        <Link to="/">
                            <p>Inicio</p>
                        </Link>
                        <Link to="#">
                            <p>Libros</p>
                        </Link>
                        <Link to="#">
                            <p>Mangas</p>
                        </Link>
                        <Link to="#">
                            <p>Más vendidos</p>
                        </Link>
                        <Link to="#">
                            <p>Inglés</p>
                        </Link>
                    </nav>
                    <div className='copy-container'>
                        <p>© 2023 The Book Depot. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer