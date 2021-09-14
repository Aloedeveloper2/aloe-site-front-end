import React, { Component } from "react";
import image1 from '../../../assets/imgs/banner-img-02.svg';

class Illustration extends Component{
    render(){
        return(
            <>
                <section>
                    <section className="bg-light w-100">
                        <div className="container">
                            <div className="row d-flex align-items-center py-5">
                                <div className="col-lg-6 text-start">
                                    <h1 className="h2 py-5 text-primary typo-space-line">About Us</h1>
                                    <p className="light-300">
                                        Vector illustration credit goes to <a rel="noreferrer" href="http://freepik.com/" target="_blank">FreePik</a> website. Purple Buzz is provided by TemplateMo. Lorem ipsum dolor sit amet, consectetur.
                                    </p>
                                </div>
                                <div className="col-lg-6">
                                    <img src={image1} alt="header"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </>
        )
    }
}

export default Illustration;