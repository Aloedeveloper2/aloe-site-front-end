import React, {Component} from 'react';
import image1 from '../../assets/imgs/mairies.png';
import image2 from '../../assets/imgs/tchopetyamo.png';
import image3 from '../../assets/imgs/ff.jpg';
import image4 from '../../assets/imgs/services-04.jpg';

class Clients extends Component{
    render(){
        return(
            <section className="bg-light">
                <div className="container py-3">
                    <h2 className="text-center">Nos clients</h2>
                    <h4 className="text-center pb-5">Ils nous font confiance</h4>
                    <div className="row">
                            <div className="col-md-4">
                                <div className="card text-center" style={{width: "15rem"}}>
                                    <img className="card-img-top mx-auto" style={{width: "12rem"}} src={image1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h6 className="card-title">Communautés urbaines</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center" style={{width: "15rem"}}>
                                    <img className="card-img-top mx-auto" style={{width: "12rem"}} src={image2} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Tchop et Yamo</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center" style={{width: "15rem"}}>
                                    <img className="card-img-top mx-auto" src={image3} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Femme Fatale</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image2} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Mise à dispotion des plateformes digitales</h5>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image3} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">
                                            Mise en relation des administrations et des administrés,
                                            des entreprises et leurs clientèles.
                                        </h5>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image4} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Développement des communautés</h5>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                </div>
            </section>
        )
    }
}

export default Clients;