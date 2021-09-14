import React, { Component } from 'react';
import Header from './about-us-navbar';
import Footer from '../../components/Footer/Footer';
import Illustration from './Details/illustration';
import Performance from './Details/performance';
import WhyUs from './Details/why-us';
import Partners from './Details/partners';
import Team from './Details/team';

class AboutUS extends Component{
    render(){
        return(
            <>
                <Header />
                <Illustration />
                <Team />
                <Partners />
                <Performance />
                <WhyUs />
                <Footer />
            </>
        )
    }
}

export default AboutUS;