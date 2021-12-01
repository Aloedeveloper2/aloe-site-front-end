import React, {Component} from 'react';
import image1 from '../../assets/imgs/services-01.jpg';
import image2 from '../../assets/imgs/services-02.jpg';
import image3 from '../../assets/imgs/services-03.jpg';
import image4 from '../../assets/imgs/services-04.jpg';

class Solutions extends Component{
    render(){
        return(
            <>
                <h2 className="h2 text-center py-5 ">Nos solutions</h2>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image1} className="card-img" alt="..."/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Conseil stratégique</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image2} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Mise à dispotion des plateformes digitales</h5>
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
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-white">
                                    <img src={image4} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">Développement des communautés</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
            </>
        )
    }
}

export default Solutions