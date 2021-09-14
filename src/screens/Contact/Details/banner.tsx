import React, { Component } from 'react';
import image from '../../../assets/imgs/banner-img-01.svg'
class Banner extends Component{
    render(){
        return(
            <section className="bg-light">
                <div className="container py-4">
                    <div className="row align-items-center justify-content-between">
                        <div className="contact-header col-lg-4">
                            <h1 className="h2 pb-3 text-primary">Contact</h1>
                            <h3 className="h4 regular-400">Elit, sed do eiusmod tempor</h3>
                            <p className="light-300">
                                Vector illustration is from <a rel="nofollow" href="https://storyset.com/" target="_blank">StorySet</a>.
                                Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            </p>
                        </div>
                        <div className="contact-img col-lg-5 align-items-end col-md-4">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;