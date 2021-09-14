import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <nav className="navbar fixed-bottom navbar-light bg-transparent mb-4">
                <div className="container">
                    {/* <div className="row"> */}
                        <form class="col-sm-8">
                            <div className="row">
                                <div class="col-sm-3 col-md-6">
                                    <input type="email" class="form-control" id="inputPassword2" placeholder="Adresse Email" />
                                </div>
                                <div class="col-sm-9 col-md-6">
                                    <button type="submit" class="btn btn-primary mb-3">Contactez nous</button>
                                </div>
                            </div>
                        </form>
                        <div className="col-sm-4">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="https://fr-fr.facebook.com/"><i className="fab fa-facebook-square"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="https://fr.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    {/* </div> */}
                </div>
            </nav>
        )
    }
}

export default Footer;