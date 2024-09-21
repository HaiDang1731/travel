import React from 'react';

const About = () => {
      return (
            <React.Fragment>
                  <section className="hero-wrap hero-wrap-2 " style={{ backgroundImage: "url('images/bg_1.jpg')" }}>
                        <div className="overlay"></div>
                        <div className="container">
                              <div className="row no-gutters slider-text  align-items-end justify-content-center">
                                    <div className="col-md-9 ftco-animate pb-5 text-center">
                                          <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right"></i></a></span> <span>About us <i className="fa fa-chevron-right"></i></span></p>
                                          <h1 className="mb-0 bread">About Us</h1>
                                    </div>
                              </div>
                        </div>
                  </section>


                  <section className="ftco-section services-section">
                        <div className="container">
                              <div className="row d-flex">
                                    <div className="col-md-6 order-md-last heading-section pl-md-5 ftco-animate d-flex align-items-center">
                                          <div className="w-100">
                                                <span className="subheading">Welcome to Pacific</span>
                                                <h2 className="mb-4">It's time to start your adventure</h2>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                <p><a href="#" className="btn btn-primary py-3 px-4">Search Destination</a></p>
                                          </div>
                                    </div>
                                    <div className="col-md-6">
                                          <div className="row">
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                                                      <div className="services services-1 color-1 d-block img" style={{ backgroundImage: "url(images/services-1.jpg)" }}>
                                                            <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-paragliding"></span></div>
                                                            <div className="media-body">
                                                                  <h3 className="heading mb-3">Activities</h3>
                                                                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                                                      <div className="services services-1 color-2 d-block img" style={{ backgroundImage: "url(images/services-2.jpg)" }}>
                                                            <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
                                                            <div className="media-body">
                                                                  <h3 className="heading mb-3">Travel Arrangements</h3>
                                                                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>

                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>


                  <section className="ftco-section ftco-about img" style={{ backgroundImage: "url(images/bg_4.jpg)" }}>
                        <div className="overlay"></div>
                        <div className="container py-md-5">
                              <div className="row py-md-5">
                                    <div className="col-md d-flex align-items-center justify-content-center">
                                          <a href="https://vimeo.com/45830194" className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4">
                                                <span className="fa fa-play"></span>
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </section>


                  <section className="ftco-section ftco-about ftco-no-pt img">
                        <div className="container">
                              <div className="row d-flex">
                                    <div className="col-md-12 about-intro">
                                          <div className="row">
                                                <div className="col-md-6 d-flex align-items-stretch">
                                                      <div className="img d-flex w-100 align-items-center justify-content-center" style={{ backgroundImage: "url(images/about-1.jpg)" }}>
                                                      </div>
                                                </div>
                                                <div className="col-md-6 pl-md-5 py-5">
                                                      <div className="row justify-content-start pb-3">
                                                            <div className="col-md-12 heading-section ftco-animate">
                                                                  <span className="subheading">About Us</span>
                                                                  <h2 className="mb-4">Make Your Tour Memorable and Safe With Us</h2>
                                                                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                                                  <p><a href="#" className="btn btn-primary">Book Your Destination</a></p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>


                  <section className="ftco-section testimony-section bg-bottom" style={{ backgroundImage: "url(images/bg_1.jpg)" }}>
                        <div className="overlay"></div>
                        <div className="container">
                              <div className="row justify-content-center pb-4">
                                    <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
                                          <span className="subheading">Testimonial</span>
                                          <h2 className="mb-4">Tourist Feedback</h2>
                                    </div>
                              </div>
                              <div className="row ftco-animate">
                                    <div className="col-md-12">
                                          <div className="carousel-testimony owl-carousel">
                                                {[1, 2, 3, 4, 5].map((item, index) => (
                                                      <div className="item" key={index}>
                                                            <div className="testimony-wrap py-4">
                                                                  <div className="text">
                                                                        <p className="star">
                                                                              {[...Array(5)].map((_, i) => (
                                                                                    <span className="fa fa-star" key={i}></span>
                                                                              ))}
                                                                        </p>
                                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                                        <div className="d-flex align-items-center">
                                                                              <div className="user-img" style={{ backgroundImage: `url(images/person_${(index % 3) + 1}.jpg)` }}></div>
                                                                              <div className="pl-3">
                                                                                    <p className="name">Roger Scott</p>
                                                                                    <span className="position">Marketing Manager</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
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
                                                <p>We can manage your dream building A small river named Duden flows by their place</p>
                                                <p className="mb-0"><a href="#" className="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            </React.Fragment>
      );
};

export default About;