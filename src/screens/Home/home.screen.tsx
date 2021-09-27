import Navbar from '../../components/header/Navbar';
import Footer from '../../components/Footer/home.footer';
import './home.css'
import React, { Component } from 'react';

class Home extends Component{
    render(){
        return (
            <div id="home">
                <section className="text-light">
                    <div className="container">
                        <Navbar 
                            home="nav-link active h5" 
                            service="nav-link text-light h5" 
                            about="nav-link text-light h5" 
                            contact="nav-link text-light h5"
                        />
                        <div className="row" id="div1">
                            <div className="col-sm-5 mt-5" id="vision">
                                Notre ambition est de digitaliser les services tant des administrations que des 
                                entreprises au Cameroun et en Afrique.
                            </div>
                        </div>
                        <Footer />
                    </div>
                </section>
            </div>
        );
    }
}
export default Home;