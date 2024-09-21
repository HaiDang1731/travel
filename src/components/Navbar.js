import React from 'react';

const Navbar = () => {
      const currentPath = window.location.pathname; // Lấy đường dẫn hiện tại

      return (
            <React.Fragment>
                  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                        <div className="container">
                              <a className="navbar-brand" href="index.html">Pacific<span>Travel Agency</span></a>
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="oi oi-menu"></span> Menu
                              </button>

                              <div className="collapse navbar-collapse" id="ftco-nav">
                                    <ul className="navbar-nav ml-auto">
                                          <li className={`nav-item ${currentPath === "/" ? "active" : ""}`}>
                                                <a href="/" className="nav-link">Home</a>
                                          </li>
                                          <li className={`nav-item ${currentPath === "/about" ? "active" : ""}`}>
                                                <a href="/about" className="nav-link">About</a>
                                          </li>
                                          <li className={`nav-item ${currentPath === "/destination" ? "active" : ""}`}>
                                                <a href="/destination" className="nav-link">Destination</a>
                                          </li>
                                          <li className={`nav-item ${currentPath === "/hotel" ? "active" : ""}`}>
                                                <a href="/hotel" className="nav-link">Hotel</a>
                                          </li>
                                          <li className={`nav-item ${currentPath === "/blog" ? "active" : ""}`}>
                                                <a href="/blog" className="nav-link">Blog</a>
                                          </li>
                                          <li className={`nav-item ${currentPath === "/contact" ? "active" : ""}`}>
                                                <a href="/contact" className="nav-link">Contact</a>
                                          </li>
                                    </ul>
                              </div>
                        </div>
                  </nav>

                  <style jsx>{`
                        .nav-item .nav-link.active {
                              color: red; 
                        }
                  `}</style>
            </React.Fragment>
      );
};

export default Navbar;
