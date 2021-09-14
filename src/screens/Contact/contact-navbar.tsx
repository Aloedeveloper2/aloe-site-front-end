import React, { Component } from "react";
import logo from '../../assets/imgs/aloe-img/apple-touch-icon.png';

class Header extends Component {
  render() {
    return (
      <>
        <nav id="main_nav" className="navbar navbar-expand-lg navbar-light bg-white shadow">
            <div className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand h1" href="index.html">
                    <i className='bx bx-buildings bx-sm text-dark'></i>
                    <img src={logo} alt="logo" height="80"/>
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbar-toggler-success">
                    <div className="flex-fill mx-xl-5 mb-2">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
                          <li className="nav-item">
                            <a className="nav-link h5" href="/">Accueil</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link h5" href="/services">Nos services</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link h5" href="/about-us">A propos</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link h5 active" aria-current="page" href="/contact">Contact</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link h5" href="/compte"><i className="fas fa-user-circle"></i></a>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
      </>
    )
  }
}

export default Header;
