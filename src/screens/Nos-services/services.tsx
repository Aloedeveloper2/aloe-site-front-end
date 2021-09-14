import React, { Component } from 'react';
import Header from '../../components/Carroussel/Carroussel';
import Footer from '../../components/Footer/Footer';
import './services.css';
import image1 from '../../assets/imgs/services-01.jpg';
import image2 from '../../assets/imgs/services-02.jpg';
import image3 from '../../assets/imgs/services-03.jpg';
import image4 from '../../assets/imgs/services-04.jpg';
import image5 from '../../assets/imgs/service-07.jpg';

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
                                        <h5 className="card-title">Conseil stratégique</h5>
                                        {/* <p className="card-text">
                                            This content is a little bit longer.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image2} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Mise à dispotion des plateformes digitales</h5>
                                        {/* <p className="card-text">
                                            This content is a little bit longer.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image3} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">
                                            Mise en relation des administrations et des administrés,
                                            des entreprises et leurs clientèles.
                                        </h5>
                                        {/* <p className="card-text">
                                            This content is a little bit longer.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image4} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Développement des communautés</h5>
                                        {/* <p className="card-text">
                                            This content is a little bit longer.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light py-5">
                        <div className="feature-work container my-4">
                            <div className="row d-flex d-flex align-items-center">
                                <div className="col-lg-5">
                                    <h3 className="feature-work-title h4 text-muted light-300">Notre vision</h3>
                                    <h1 className="feature-work-heading h3 py-3 semi-bold-600">Digitalisation des organisations</h1>
                                    <p className="feature-work-body text-muted light-300">
                                        Notre vision est de propager et de conduire les administrations et les entreprises
                                        vers le digital. Nous accompagnons les organisations dans l'automatisation de leurs travaux,
                                        la facilitation de la réalisation de certaines tâches et bien d'autre encore.
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