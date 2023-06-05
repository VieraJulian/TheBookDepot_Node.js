import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { useCart } from '../hooks/useCart'
import { useSearch } from '../hooks/useSearch';

import "../../public/css/navbar/navbar-mobile.css"
import "../../public/css/navbar/navbar-desktop.css"

function Navbar() {
    const { cart, quantityTotal } = useCart()
    const { booksFound, searchValue, clearBooksFound, foundBookDetail } = useSearch()

    const cookies = new Cookies();
    const cookieGet = cookies.get('response')

    const handleLogout = () => {
        if (cookieGet && cookieGet.userId) {
            cookies.remove('response', { path: '/' });
            window.location.href = '/'
        }
    }

    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-top'>
                        <Link to="/">
                            <p className='navbar-p-bd'>TheBookDepot</p>
                        </Link>
                        <div className="dropdown">
                            <button className='navbar-p-mc'>Mi Cuenta</button>
                            <div className="dropdown-content">
                                {cookieGet ?
                                    <>
                                        <Link to="/users/profile">Mis datos</Link>
                                        {cookieGet.admin === true && <Link to="/admin">Dashboard</Link>}
                                        <Link to="#" onClick={() => handleLogout()}>Cerrar sesión</Link>
                                    </> :
                                    <>
                                        <Link to="/users/login">Login</Link>
                                        <Link to="/users/register">Registrarse</Link>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                    <picture className='navbar-logo'>
                        <Link to="/">
                            <img src="../../public/img/logo.png" alt="Logo" />
                        </Link>
                    </picture>
                    <div className='navbar-center'>
                        <nav>
                            <div>
                                <button className='button-navbar' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                    <i className="fa-solid fa-bars-staggered"></i>
                                </button>
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">TheBookDepot</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                            <li className="nav-item">
                                                <Link className="nav-link active" aria-current="page" to="/">INICIO</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/">LIBROS</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/products/bestSeller">MÁS VENDIDOS</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/products/english">INGLÉS</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    MI CUENTA
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" to="/users/profile">MIS DATOS</Link></li>
                                                    <li><Link className="dropdown-item" to="#" onClick={() => handleLogout()}>CERRAR SESIÓN</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <form className='navbar-search' onSubmit={foundBookDetail}>
                            <input
                                className='input-search'
                                type="text"
                                placeholder='Buscar por título...'
                                spellCheck="false"
                                autoComplete="off"
                                onInput={(e) => searchValue(e.target.value)}
                                list="booksList" />
                            {booksFound.length > 0 && (
                                <div className='searchResult'>
                                    {booksFound.map(book => (
                                        <article className='search-article' key={book.id}>
                                            <Link to={`/products/detail/${book.id}`} onClick={clearBooksFound}>
                                                <picture>
                                                    <img src={book.image} alt="" />
                                                </picture>
                                                <p>{book.title}</p>
                                            </Link>
                                        </article>
                                    ))}
                                </div>
                            )}
                            <button type='submit'>Buscar</button>
                        </form>
                        <div className='cart-detail'>
                            <div className='cart-product'>
                                <p className='cart-quantity'>{quantityTotal ? quantityTotal : 0}</p>
                                <p className='cart-producto'>productos</p>
                            </div>
                        </div>
                        <div className='cart'>
                            <Link to={cookieGet ? "/users/cart" : "/users/login"}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                            <div className='cart-number'>
                                {cart ? cart.length : 0}
                            </div>
                        </div>
                    </div>
                    <div className='navbar-bottom'>
                        <Link to="/">
                            <p>Inicio</p>
                        </Link>
                        <Link to="#">
                            <p>Libros</p>
                        </Link>
                        <Link to="/products/bestSeller">
                            <p>Más Vendidos</p>
                        </Link>
                        <Link to="/products/english">
                            <p>Inglés</p>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar