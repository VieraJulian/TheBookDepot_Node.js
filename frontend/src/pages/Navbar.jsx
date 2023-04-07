import { Link } from 'react-router-dom'

import "../../public/css/navbar-mobile.css"
import "../../public/css/navbar-desktop.css"

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-top'>
                        <Link to="#">
                            <p className='navbar-p-bd'>TheBookDepot</p>
                        </Link>
                        <Link to="#">
                            <p className='navbar-p-mc'>Mi Cuenta</p>
                        </Link>
                    </div>
                    <picture className='navbar-logo'>
                        <Link to="/">
                            <img src="../../public/img/logo.png" alt="Logo" />
                        </Link>
                    </picture>
                    <div className='navbar-center'>
                        <Link to="#" className='link-bars'>
                            <div className='bars'>
                                <i class="fa-solid fa-bars-staggered"></i>
                            </div>
                        </Link>
                        <div className='navbar-search'>
                            <input type="text"
                                placeholder='Buscar por título...'
                                spellCheck="false"
                                autoComplete="off" />
                            <button>Buscar</button>
                        </div>
                        <div className='cart-detail'>
                            <div className='cart-product'>
                                <p className='cart-quantity'>0</p>
                                <p>producto</p>
                            </div>
                            <p className='p-bar'>|</p>
                            <div className='cart-price'>
                                <p>AR$</p>
                                <p className='cart-total'>0.00</p>
                            </div>
                        </div>
                        <div className='cart'>
                            <Link to="#">
                                <i class="fa-solid fa-cart-shopping"></i>
                            </Link>
                            <div className='cart-number'>
                                0
                            </div>
                        </div>
                    </div>
                    <div className='navbar-bottom'>
                        <Link to="#">
                            <p>Libros</p>
                        </Link>
                        <Link to="#">
                            <p>Más Vendidos</p>
                        </Link>
                        <Link to="#">
                            <p>Español</p>
                        </Link>
                        <Link to="#">
                            <p>Inglés</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar