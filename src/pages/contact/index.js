import React from 'react';

const Contact = () => {
      return (
            <React.Fragment>
                  <section
                        className="hero-wrap hero-wrap-2 "
                        style={{ backgroundImage: "url('images/bg_1.jpg')" }}
                  >
                        <div className="overlay"></div>
                        <div className="container" style={{ height: "100%" }}>
                              <div className="row no-gutters slider-text  align-items-end justify-content-center" style={{ height: "100%" }}>
                                    <div className="col-md-9  pb-5 text-center">
                                          <p className="breadcrumbs">
                                                <span className="mr-2">
                                                      <a href="index.html">Home <i className="fa fa-chevron-right"></i></a>
                                                </span>
                                                <span>Contact us <i className="fa fa-chevron-right"></i></span>
                                          </p>
                                          <h1 className="mb-0 bread">Contact us</h1>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="ftco-section ftco-no-pb contact-section mb-4">
                        <div className="container">
                              <div className="row d-flex contact-info">
                                    <div className="col-md-3 d-flex">
                                          <div className="align-self-stretch box p-4 text-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                      <span className="fa fa-map-marker"></span>
                                                </div>
                                                <h3 className="mb-2">Address</h3>
                                                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                                          </div>
                                    </div>
                                    <div className="col-md-3 d-flex">
                                          <div className="align-self-stretch box p-4 text-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                      <span className="fa fa-phone"></span>
                                                </div>
                                                <h3 className="mb-2">Contact Number</h3>
                                                <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
                                          </div>
                                    </div>
                                    <div className="col-md-3 d-flex">
                                          <div className="align-self-stretch box p-4 text-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                      <span className="fa fa-paper-plane"></span>
                                                </div>
                                                <h3 className="mb-2">Email Address</h3>
                                                <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                          </div>
                                    </div>
                                    <div className="col-md-3 d-flex">
                                          <div className="align-self-stretch box p-4 text-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                      <span className="fa fa-globe"></span>
                                                </div>
                                                <h3 className="mb-2">Website</h3>
                                                <p><a href="#">yoursite.com</a></p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="ftco-section contact-section ftco-no-pt">
                        <div className="container">
                              <div className="row block-9">
                                    <div className="col-md-6 order-md-last d-flex">
                                          <form action="#" className="bg-light p-5 contact-form">
                                                <div className="form-group">
                                                      <input type="text" className="form-control" placeholder="Your Name" />
                                                </div>
                                                <div className="form-group">
                                                      <input type="text" className="form-control" placeholder="Your Email" />
                                                </div>
                                                <div className="form-group">
                                                      <input type="text" className="form-control" placeholder="Subject" />
                                                </div>
                                                <div className="form-group">
                                                      <textarea
                                                            cols="30"
                                                            rows="7"
                                                            className="form-control"
                                                            placeholder="Message"
                                                      ></textarea>
                                                </div>
                                                <div className="form-group">
                                                      <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                                                </div>
                                          </form>
                                    </div>

                                    <div className="col-md-6 d-flex">
                                          <div id="map" className="bg-white"></div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="ftco-intro ftco-section ftco-no-pt">
                        <div className="container">
                              <div className="row justify-content-center">
                                    <div className="col-md-12 text-center">
                                          <div className="img" style={{ backgroundImage: "url(images/bg_2.jpg)" }}>
                                                <div className="overlay"></div>
                                                <h2>We Are Pacific A Travel Agency</h2>
                                                <p>We can manage your dream building. A small river named Duden flows by their place.</p>
                                                <p className="mb-0">
                                                      <a href="#" className="btn btn-primary px-4 py-3">Ask For A Quote</a>
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <footer
                        className="ftco-footer bg-bottom ftco-no-pt"
                        style={{ backgroundImage: "url(images/bg_3.jpg)" }}
                  >
                        <div className="container">
                              <div className="row mb-5">
                                    <div className="col-md pt-5">
                                          <div className="ftco-footer-widget pt-md-5 mb-4">
                                                <h2 className="ftco-heading-2">About</h2>
                                                <p>
                                                      Far far away, behind the word mountains, far from the countries
                                                      Vokalia and Consonantia, there live the blind texts.
                                                </p>
                                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                                                      <li className=""><a href="#"><span className="fa fa-twitter"></span></a></li>
                                                      <li className=""><a href="#"><span className="fa fa-facebook"></span></a></li>
                                                      <li className=""><a href="#"><span className="fa fa-instagram"></span></a></li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="col-md pt-5 border-left">
                                          <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                                                <h2 className="ftco-heading-2">Information</h2>
                                                <ul className="list-unstyled">
                                                      <li><a href="#" className="py-2 d-block">Online Enquiry</a></li>
                                                      <li><a href="#" className="py-2 d-block">General Enquiries</a></li>
                                                      <li><a href="#" className="py-2 d-block">Booking Conditions</a></li>
                                                      <li><a href="#" className="py-2 d-block">Privacy and Policy</a></li>
                                                      <li><a href="#" className="py-2 d-block">Refund Policy</a></li>
                                                      <li><a href="#" className="py-2 d-block">Call Us</a></li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="col-md pt-5 border-left">
                                          <div className="ftco-footer-widget pt-md-5 mb-4">
                                                <h2 className="ftco-heading-2">Experience</h2>
                                                <ul className="list-unstyled">
                                                      <li><a href="#" className="py-2 d-block">Adventure</a></li>
                                                      <li><a href="#" className="py-2 d-block">Hotel and Restaurant</a></li>
                                                      <li><a href="#" className="py-2 d-block">Beach</a></li>
                                                      <li><a href="#" className="py-2 d-block">Nature</a></li>
                                                      <li><a href="#" className="py-2 d-block">Camping</a></li>
                                                      <li><a href="#" className="py-2 d-block">Party</a></li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="col-md pt-5 border-left">
                                          <div className="ftco-footer-widget pt-md-5 mb-4">
                                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                                <div className="block-23 mb-3">
                                                      <ul>
                                                            <li><span className="icon fa fa-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                                            <li><a href="#"><span className="icon fa fa-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                                                            <li><a href="#"><span className="icon fa fa-paper-plane"></span><span className="text">info@yourdomain.com</span></a></li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-12 text-center">
                                          Copyright &copy;
                                          <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with
                                          <i className="fa fa-heart" aria-hidden="true"></i> by
                                          <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    </div>
                              </div>
                        </div>
                  </footer>
            </React.Fragment>
      );
};

export default Contact;
