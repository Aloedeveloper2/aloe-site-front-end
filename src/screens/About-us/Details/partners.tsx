import React, { Component } from "react";

class Partners extends Component{
    render(){
        return(
            <section className="bg-secondary py-3">
                <div className="container py-5">
                    <h2 className="h2 text-white text-center py-5">Nos partenaires</h2>
                    <div className="row text-center">
                        <div className="col-md-3 mb-3">
                            <div className="card partner-wap py-5">
                                <a href="#"><i className='display-1 text-white bx bxs-buildings'></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card partner-wap py-5">
                                <a href="#"><i className='display-1 bx text-white bxs-check-shield bx-lg'></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card partner-wap py-5">
                                <a href="#"><i className='display-1 text-white bx bxs-bolt-circle'></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className="card partner-wap py-5">
                                <a href="#"><i className='display-1 text-white bx bxs-spa'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Partners;