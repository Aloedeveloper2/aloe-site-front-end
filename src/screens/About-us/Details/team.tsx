import React, { Component } from "react";
import image2 from '../../../assets/imgs/team-04.jpg';
import image3 from '../../../assets/imgs/team-03.jpg';
import image4 from '../../../assets/imgs/team-02.jpg'

class Team extends Component{
    render(){
        return(
            <>
                <section className="container py-5">
                    <div className="pt-5 pb-3 d-lg-flex align-items-center gx-5">
                        <div className="col-lg-3">
                            <h2 className="h2 py-5 typo-space-line">Our Team</h2>
                            <p className="text-muted light-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        <div className="col-lg-9 row">
                            <div className="team-member col-md-4">
                                <img className="team-member-img img-fluid rounded-circle p-4" src={image2} alt="ceo" />
                                <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                    <li>Nguepnang Idris</li>
                                    <li>CEO</li>
                                </ul>
                            </div>
                            <div className="team-member col-md-4">
                                <img className="team-member-img img-fluid rounded-circle p-4" src={image3} alt="marketting" />
                                <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                    <li>Kamdem</li>
                                    <li>Marketting</li>
                                </ul>
                            </div>
                            <div className="team-member col-md-4">
                                <img className="team-member-img img-fluid rounded-circle p-4" src={image4} alt="Card image" />
                                <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                    <li>Marcelle</li>
                                    <li>Digital</li>
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