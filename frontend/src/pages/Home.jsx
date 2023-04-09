import { Link } from 'react-router-dom'

import "../../public/css/carousel-mobile.css"
import "../../public/css/carouser-desktop.css"
import "../../public/css/home-mobile.css"

function Home() {
    return (
        <>
            <div className='home'>
                <div className='home-container'>
                    <div className='carousel-container'>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <Link to="#">
                                    <div className="carousel-item active">
                                        <img src="../../public/img/carousel/slider1.jpg" className="d-block w-100" alt="slider1" />
                                    </div>
                                </Link>
                                <Link to="#">
                                    <div className="carousel-item">
                                        <img src="../../public/img/carousel/slider2.jpg" className="d-block w-100" alt="slider2" />
                                    </div>
                                </Link>
                                <Link to="#">
                                    <div className="carousel-item">
                                        <img src="../../public/img/carousel/slider3.jpg" className="d-block w-100" alt="slider3" />
                                    </div>
                                </Link>
                            </div>
                            <button className="carousel-control-prev a" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='home-articles-container'>
                        <div className='articles-container'>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>
                            <div className='article'>
                                <Link to="#">
                                    <img className='article-img' src="../../public/img/portadaEj.png" alt="libro" />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home