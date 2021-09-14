import { Component } from "react";
import Navbar from '../header/Navbar';
import './Carroussel.css';
/* import image1 from '../../assets/imgs/banner-bg-01.jpg';
import image2 from '../../assets/imgs/banner-bg-02.jpg';
import image3 from '../../assets/imgs/banner-bg-03.jpg'; */

type navProps = {
    home: string,
    service:string,
    about:string,
    contact:string,
}

class Carroussel extends Component<navProps>{
    render(){
        return(
            <header>
                <div className="head">
                    <div className="container">
                        <Navbar
                            home = {this.props.home}
                            service = {this.props.service}
                            about = {this.props.about}
                            contact = {this.props.contact}
                        />
                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide carousel-background" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="py-5 row d-flex align-items-center">
                                    <div className="banner-content text-light col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                        <h1 className="banner-heading display-3 mb-0 pb-4 mx-0 px-0 light-300">
                                            Nous sommes au coeur de la <strong>Communication</strong>
                                        </h1>
                                        <p className="banner-body py-3 mx-0 px-0">
                                            Ensemble nous mettons en place une approche très ciblée au profit des administrations et des entrprises <br />
                                            en ce qui concerne le référencement, la qualité des services et l'amélioration de la gouvernance.      
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="py-5 row d-flex align-items-center">
                                    <div className="banner-content text-light col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                        <h1 className="banner-heading display-3 mb-0 pb-4 mx-0 px-0 light-300">
                                            HTML CSS Template with Bootstrap 5 Beta 1
                                        </h1>
                                        <p className="banner-body py-3">
                                            You are not allowed to re-distribute this Purple Buzz HTML template as a downloadable ZIP file on any kind of Free CSS collection websites.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="py-5 row d-flex align-items-center">
                                    <div className="banner-content text-light col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                        <h1 className="banner-heading display-3 mb-0 pb-4 mx-0 px-0 light-300">
                                            Cupidatat non proident, sunt in culpa qui officia
                                        </h1>
                                        <p className="banner-body py-3">
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Carroussel;