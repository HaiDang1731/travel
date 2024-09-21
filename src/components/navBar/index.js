import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
      const currentPath = window.location.pathname;
      const { currentUser, logout } = useContext(AuthContext);

      const navigate = useNavigate();
      const logoutOfPage = () => {
            logout();
            navigate("/login")
      }
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
                                          <li className={`nav-item ${currentPath === "/hotels" ? "active" : ""}`}>
                                                <a href="/hotels" className="nav-link">Hotel</a>
                                          </li>
                                          <li className={`nav-item ${currentPath === "/blogs" ? "active" : ""}`}>
                                                <a href="/blogs" className="nav-link">Blog</a>
                                          </li>
                                          <li className={`nav-item ${currentPath === "/contact" ? "active" : ""}`}>
                                                <a href="/contact" className="nav-link">Contact</a>
                                          </li>
                                          {currentUser ? (
                                                <li className='nav-item '>
                                                      <a className="nav-link" onClick={logoutOfPage} style={{ cursor: "pointer" }}>Logout</a>
                                                </li>
                                          ) : (
                                                <li className='nav-item '>
                                                      <Link className="nav-link" to="/login">
                                                            Login
                                                      </Link>
                                                </li>
                                          )}
                                    </ul>
                              </div>
                        </div>
                  </nav>

                  <style jsx>{`
                        .nav-item .nav-link.active {
                              color: red; 
                        }
                  `}</style>
            </React.Fragment >
      );
};

export default Navbar;
