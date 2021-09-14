import React, { Component } from 'react';
import Header from './contact-navbar';
import Footer from '../../components/Footer/Footer';
import Banner from './Details/banner';
import Form from './Details/form';
class Contact extends Component{
    render(){
        return(
            <>
                <Header />
                <Banner />
                <Form />
                <Footer />
            </>
        )
    }
}

export default Contact;