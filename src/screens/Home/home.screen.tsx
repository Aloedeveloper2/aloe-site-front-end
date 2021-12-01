import React, { Component } from 'react';
import Header from '../../components/Carroussel/Carroussel';
import Footer from '../../components/Footer/Footer';
import './home.css';

import HomeCard from '../../components/home/home-cards/Card';
import HomeCardImage from '../../assets/imgs/objectives.svg';
import Solutions from '../../components/home/solutions';
import Clients from '../../components/home/Clients';

class Home extends Component{
    render(){
        return(
            <>
                <Header 
                    home="nav-link active h5" 
                    service="nav-link text-light h5" 
                    about="nav-link text-light h5" 
                    contact="nav-link text-light h5"
                />
                <section>
                    <div className="container">
                        <div className="row my-3"></div>
                    </div>
                    <div className="container my-3">
                        <div className="bg-light py-3">
                            <div className="feature-work container my-4">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-5">
                                        <h2 className="feature-work-title text-primary light-300">Notre vision</h2>
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
                                        <HomeCard cardImage={HomeCardImage} cardTitle="Objectif titre 1" cardText="Objectif text 1"/>
                                        <HomeCard cardImage={HomeCardImage} cardTitle="Objectif titre 2" cardText="Objectif text 2"/>
                                        <HomeCard cardImage={HomeCardImage} cardTitle="Objectif titre 3" cardText="Objectif text 3"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Solutions />
                    </div>
                    <Clients />
                </section>
                <Footer />
            </>
        )
    }
}

export default Home;