import React, { Component } from "react";
import image2 from '../../../assets/imgs/team-04.jpg';
import image3 from '../../../assets/imgs/team-03.jpg';
import image4 from '../../../assets/imgs/team-02.jpg'

class Team extends Component{
    render(){
        return(
            <>
                <section className="container py-5">
                <h2 className="h2 text-center py-3">Notre équipe</h2>
                    <div className="pt-5 pb-3 d-lg-flex align-items-center gx-5">
                        <div className="row">
                            <div className="team-member col-md-2">
                                <img className="team-member-img img-fluid rounded-circle p-4" src={image2} alt="ceo" />
                                <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                    <li>NGUEPNANG Idris</li>
                                    <li>PDG</li>
                                </ul>
                            </div>
                            <div className="team-member col-md-2">
                                <img className="team-member-img img-fluid rounded-circle p-4" src={image3} alt="marketting" />
                                <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                    <li>KAMDEM Ludovic</li>
                                    <li>DG</li>
                                </ul>
                            </div>
                            <div className="team-member col-md-2">
                                <img className="team-member-img img-fluid rounded-circle p-4" src={image4} alt="Card image" />
                                <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                    <li>MANGA Marcelle</li>
                                    <li>Digital</li>
                                </ul>
                            </div>
                            <div className="team-member col-md-2">
                                <img className="team-member-img img-fluid rounded-circle p-4" src={image4} alt="Card image" />
                                <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                    <li>MESSI Leon Emmanuel</li>
                                    <li>Digital</li>
                                </ul>
                            </div>
                            <div className="team-member col-md-2">
                                <img className="team-member-img img-fluid rounded-circle p-4" src={image4} alt="Card image" />
                                <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                    <li>ASSIGUENA Sorelle</li>
                                    <li>Commercial</li>
                                </ul>
                            </div>
                            <div className="team-member col-md-2">
                                <img className="team-member-img img-fluid rounded-circle p-4" src={image4} alt="Card image" />
                                <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                    <li>SOMAN Brady</li>
                                    <li>Call center</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Team;