import './Footer.css'

function Footer(){
    return(
        <footer className="bg-primary pt-4">
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-3 col-12 align-left">
                        <a className="navbar-brand" href="index.html">
                            <i className='bx bx-buildings bx-sm text-light'></i>
                            <span className="text-light h5">Aloe</span>
                        </a>
                        <p className="text-light my-lg-4 my-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut.
                        </p>
                        <ul className="list-inline footer-icons light-300">
                            <li className="list-inline-item m-0">
                                <a className="text-light" target="_blank" rel="noreferrer" href="http://facebook.com/">
                                    <i className='bx bxl-facebook-square bx-md'></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                        <h3 className="h4 pb-lg-3 text-light light-300">Our Company</h3>
                            <ul className="list-unstyled text-light light-300">
                                <li className="pb-2">
                                    <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light" href="index.html">Home</a>
                                </li>
                            </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                        <h2 className="h4 pb-lg-3 text-light light-300">Our Works</h2>
                        <ul className="list-unstyled text-light light-300">
                            <li className="pb-2">
                                <i className='bx-fw bx bxs-chevron-right bx-xs'></i><a className="text-decoration-none text-light py-1" href="#branding">Branding</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 my-sm-0 mt-4">
                        <h2 className="h4 pb-lg-3 text-light light-300">For Client</h2>
                        <ul className="list-unstyled text-light light-300">
                            <li className="pb-2">
                                <i className='bx-fw bx bx-phone bx-xs'></i><a className="text-decoration-none text-light py-1" href="tel:010-020-0340">010-020-0340</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="w-100 bg-success py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-lg-6 col-sm-12">
                            <p className="text-lg-start text-center text-light light-300">
                                © Copyright 2021 Aloe. Tous droits réservés.
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <p className="text-lg-end text-center text-light light-300">
                                Designé par <a rel="sponsored" className="text-decoration-none text-light" href="/" target="_blank"><strong>NSarl</strong></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;