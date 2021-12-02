import React, { Component } from 'react';
import Header from '../../components/Carroussel/Carroussel';
import Footer from '../../components/Footer/Footer';
import './services.css';
import image1 from '../../assets/imgs/informatique.jpg';
import image2 from '../../assets/imgs/call-center.jpg';
import image3 from '../../assets/imgs/commercial.jpg';
import image4 from '../../assets/imgs/digital.jpg';
import image5 from '../../assets/imgs/cavrab.jpg';

class Services extends Component{
    render(){
        return(
            <>
                <Header 
                    home="nav-link text-light h5" 
                    service="nav-link active h5" 
                    about="nav-link text-light h5" 
                    contact="nav-link text-light h5"
                />
                <section>
                    <div className="container">
                        <div className="row my-5"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image1} className="card-img" alt="..."/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Service informatique</h5>
                                        <p className="card-text">
                                            This content is a little bit longer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image2} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Call center</h5>
                                        <p className="card-text">
                                            This content is a little bit longer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image3} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">
                                            Service commercial
                                        </h5>
                                        <p className="card-text">
                                            This content is a little bit longer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image4} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Service digital</h5>
                                        <p className="card-text">
                                            This content is a little bit longer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light py-5">
                        <div className="feature-work container my-4">
                            <div className="row d-flex d-flex align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="feature-work-title h4 text-muted light-300">Etendez votre business avec le réseau CAVRAB</h3>
                                    <h1 className="feature-work-heading h3 py-3 semi-bold-600">La monnaie à votre portée</h1>
                                    <p className="feature-work-body text-muted light-300">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere provident quae voluptatibus dolor cum accusantium ullam eius pariatur beatae asperiores.
                                    </p>
                                    {/* <p className="feature-work-body text-muted light-300">
                                        Tout ceci est possible grâce à la mise à disposition de votre organisation
                                    </p> */}
                                </div>
                                <div className="col-lg-6 offset-lg-1 align-left">
                                    <div className="row">
                                        <img className="img-fluid" src={image5} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default Services;