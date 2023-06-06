import { Link } from 'react-router-dom'

import "../../public/css/footer/footer-mobile.css"
import "../../public/css/footer/footer-desktop.css"

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
                        <Link to="/products/books">
                            <p>Libros</p>
                        </Link>
                        <Link to="/products/bestSeller">
                            <p>Más vendidos</p>
                        </Link>
                        <Link to="/products/english">
                            <p>Inglés</p>
                        </Link>
                        <Link to="/">
                            <p>Nosotros</p>
                        </Link>
                    </nav>
                    <div className='copy-container'>
                        <p>© 2023 TheBookDepot. Todos los derechos reservados.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer