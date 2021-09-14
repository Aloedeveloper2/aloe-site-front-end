import React, { Component } from "react";
import logo from '../../assets/imgs/aloe-img/apple-touch-icon.png';
import './Navbar.css';

type navProps = {
  home: string,
  service:string,
  about:string,
  contact:string,
}

class Header extends Component<navProps> {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" height="80"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fas fa-bars fa-2x text-light"></i></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="nav">
                <li className="nav-item">
                  <a className={this.props.home} aria-current="page" href="/">Accueil</a>
                </li>
                <li className="nav-item">
                  <a className={this.props.service} href="/services">Nos services</a>
                </li>
                <li className="nav-item">
                  <a className={this.props.about} href="/about-us">A propos</a>
                </li>
                <li className="nav-item">
                  <a className={this.props.contact} href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light h5" href="/compte"><i className="fas fa-user-circle"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Header;
