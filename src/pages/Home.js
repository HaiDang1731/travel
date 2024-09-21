import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
      return (
            <React.Fragment>

                  <div className="hero-wrap d-flex justify-content-center align-items-center " style={{ backgroundImage: "url(images/bg_5.jpg)" }} >

                        <div className="container">
                              <div className="row no-gutters slider-text  align-items-center" data-scrollax-parent="true">
                                    <div className="col-md-7 ">
                                          <span className="subheading">Welcome to Pacific</span>
                                          <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
                                          <p className="caps">Travel to the any corner of the world, without going around in circles</p>
                                    </div>

                                    <Link to="https://vimeo.com/45830194" className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4">
                                          <span className="fa fa-play"></span>
                                    </Link>
                              </div>
                        </div>
                  </div>

                  <section className="ftco-section ftco-no-pb ftco-no-pt">
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-12">
                                          <div className="ftco-search d-flex justify-content-center">
                                                <div className="row">
                                                      <div className="col-md-12 nav-link-wrap">
                                                            <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                                  <a className="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Search Tour</a>
                                                                  <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Hotel</a>
                                                            </div>
                                                      </div>
                                                      <div className="col-md-12 tab-wrap">
                                                            <div className="tab-content" id="v-pills-tabContent">
                                                                  {/* Search Tour Form */}
                                                                  <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
                                                                        <form action="#" className="search-property-1">
                                                                              <div className="row no-gutters">
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4 border-0">
                                                                                                <label htmlFor="#">Destination</label>
                                                                                                <div className="form-field">
                                                                                                      <div className="icon"><span className="fa fa-search"></span></div>
                                                                                                      <input type="text" className="form-control" placeholder="Search place" />
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4">
                                                                                                <label htmlFor="#">Check-in date</label>
                                                                                                <div className="form-field">
                                                                                                      <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                                                      <input type="text" className="form-control checkin_date" placeholder="Check In Date" />
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4">
                                                                                                <label htmlFor="#">Check-out date</label>
                                                                                                <div className="form-field">
                                                                                                      <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                                                      <input type="text" className="form-control checkout_date" placeholder="Check Out Date" />
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4">
                                                                                                <label htmlFor="#">Price Limit</label>
                                                                                                <div className="form-field">
                                                                                                      <div className="select-wrap">
                                                                                                            <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                                                                            <select className="form-control">
                                                                                                                  <option value="">$100</option>
                                                                                                                  <option value="">$10,000</option>
                                                                                                                  <option value="">$50,000</option>
                                                                                                                  <option value="">$100,000</option>
                                                                                                                  <option value="">$200,000</option>
                                                                                                            </select>
                                                                                                      </div>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group d-flex w-100 border-0">
                                                                                                <div className="form-field w-100 align-items-center d-flex">
                                                                                                      <input type="submit" value="Search" className="align-self-stretch form-control btn btn-primary" />
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </form>
                                                                  </div>
                                                                  {/* Hotel Form */}
                                                                  <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
                                                                        <form action="#" className="search-property-1">
                                                                              <div className="row no-gutters">
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4 border-0">
                                                                                                <label htmlFor="#">Destination</label>
                                                                                                <div className="form-field">
                                                                                                      <div className="icon"><span className="fa fa-search"></span></div>
                                                                                                      <input type="text" className="form-control" placeholder="Search place" />
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4">
                                                                                                <label htmlFor="#">Check-in date</label>
                                                                                                <div className="form-field">
                                                                                                      <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                                                      <input type="text" className="form-control checkin_date" placeholder="Check In Date" />
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4">
                                                                                                <label htmlFor="#">Check-out date</label>
                                                                                                <div className="form-field">
                                                                                                      <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                                                      <input type="text" className="form-control checkout_date" placeholder="Check Out Date" />
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4">
                                                                                                <label htmlFor="#">Price Limit</label>
                                                                                                <div className="form-field">
                                                                                                      <div className="select-wrap">
                                                                                                            <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                                                                            <select className="form-control">
                                                                                                                  <option value="">$100</option>
                                                                                                                  <option value="">$10,000</option>
                                                                                                                  <option value="">$50,000</option>
                                                                                                                  <option value="">$100,000</option>
                                                                                                                  <option value="">$200,000</option>
                                                                                                            </select>
                                                                                                      </div>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group d-flex w-100 border-0">
                                                                                                <div className="form-field w-100 align-items-center d-flex">
                                                                                                      <input type="submit" value="Search" className="align-self-stretch form-control btn btn-primary" />
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                        </form>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="ftco-section services-section">
                        <div className="container">
                              <div className="row d-flex">
                                    <div className="col-md-6 order-md-last heading-section pl-md-5  d-flex align-items-center">
                                          <div className="w-100">
                                                <span className="subheading">Welcome to Pacific</span>
                                                <h2 className="mb-4">It's time to start your adventure</h2>
                                                <p>
                                                      A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                                </p>
                                                <p>
                                                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                                </p>
                                                <p>
                                                      <a href="#" className="btn btn-primary py-3 px-4">Search Destination</a>
                                                </p>
                                          </div>
                                    </div>
                                    <div className="col-md-6">
                                          <div className="row">
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                                      <div className="services services-1 color-1 d-block img" style={{ backgroundImage: "url(images/services-1.jpg)" }}>
                                                            <div className="icon d-flex align-items-center justify-content-center">
                                                                  <span className="flaticon-paragliding"></span>
                                                            </div>
                                                            <div className="media-body">
                                                                  <h3 className="heading mb-3">Activities</h3>
                                                                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                                      <div className="services services-1 color-2 d-block img" style={{ backgroundImage: "url(images/services-2.jpg)" }}>
                                                            <div className="icon d-flex align-items-center justify-content-center">
                                                                  <span className="flaticon-route"></span>
                                                            </div>
                                                            <div className="media-body">
                                                                  <h3 className="heading mb-3">Travel Arrangements</h3>
                                                                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                                      <div className="services services-1 color-3 d-block img" style={{ backgroundImage: "url(images/services-3.jpg)" }}>
                                                            <div className="icon d-flex align-items-center justify-content-center">
                                                                  <span className="flaticon-tour-guide"></span>
                                                            </div>
                                                            <div className="media-body">
                                                                  <h3 className="heading mb-3">Private Guide</h3>
                                                                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                                      <div className="services services-1 color-4 d-block img" style={{ backgroundImage: "url(images/services-4.jpg)" }}>
                                                            <div className="icon d-flex align-items-center justify-content-center">
                                                                  <span className="flaticon-map"></span>
                                                            </div>
                                                            <div className="media-body">
                                                                  <h3 className="heading mb-3">Location Manager</h3>
                                                                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>


                  <section className="ftco-section img ftco-select-destination" style={{ backgroundImage: "url(images/bg_3.jpg)" }}>
                        <div className="container">
                              <div className="row justify-content-center pb-4">
                                    <div className="col-md-12 heading-section text-center ">
                                          <span className="subheading">Pacific Provide Places</span>
                                          <h2 className="mb-4">Select Your Destination</h2>
                                    </div>
                              </div>
                        </div>
                        <div className="container container">
                              <div className="row justify-content-center pb-4">

                                    <div className="col-md-12" style={{ display: "flex", flexWrap: "nowrap", gap: "20px" }}>

                                          <div className="item" style={{ flex: "1 1 20%" }}>
                                                <div className="project-destination">
                                                      <a href="#" className="img" style={{ backgroundImage: "url(images/place-1.jpg)" }}>
                                                            <div className="text">
                                                                  <h3>Philippines</h3>
                                                                  <span>8 Tours</span>
                                                            </div>
                                                      </a>
                                                </div>
                                          </div>
                                          <div className="item" style={{ flex: "1 1 20%" }}>
                                                <div className="project-destination">
                                                      <a href="#" className="img" style={{ backgroundImage: "url(images/place-2.jpg)" }}>
                                                            <div className="text">
                                                                  <h3>Canada</h3>
                                                                  <span>2 Tours</span>
                                                            </div>
                                                      </a>
                                                </div>
                                          </div>
                                          <div className="item" style={{ flex: "1 1 20%" }}>
                                                <div className="project-destination">
                                                      <a href="#" className="img" style={{ backgroundImage: "url(images/place-3.jpg)" }}>
                                                            <div className="text">
                                                                  <h3>Thailand</h3>
                                                                  <span>5 Tours</span>
                                                            </div>
                                                      </a>
                                                </div>
                                          </div>
                                          <div className="item" style={{ flex: "1 1 20%" }}>
                                                <div className="project-destination">
                                                      <a href="#" className="img" style={{ backgroundImage: "url(images/place-4.jpg)" }}>
                                                            <div className="text">
                                                                  <h3>Australia</h3>
                                                                  <span>5 Tours</span>
                                                            </div>
                                                      </a>
                                                </div>
                                          </div>
                                          <div className="item" style={{ flex: "1 1 20%" }}>
                                                <div className="project-destination">
                                                      <a href="#" className="img" style={{ backgroundImage: "url(images/place-1.jpg)" }}>
                                                            <div className="text">
                                                                  <h3>Philippines</h3>
                                                                  <span>8 Tours</span>
                                                            </div>
                                                      </a>
                                                </div>
                                          </div>

                                    </div>


                              </div>
                        </div>
                  </section>


                  <section className="ftco-section">
                        <div className="container">
                              <div className="row justify-content-center pb-4">
                                    <div className="col-md-12 heading-section text-center ">
                                          <span className="subheading">Destination</span>
                                          <h2 className="mb-4">Tour Destination</h2>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-4 ">
                                          <div className="project-wrap">
                                                <a href="#" className="img" style={{ backgroundImage: "url(images/destination-1.jpg)" }}>
                                                      <span className="price">$550/person</span>
                                                </a>
                                                <div className="text p-4">
                                                      <span className="days">8 Days Tour</span>
                                                      <h3><a href="#">Banaue Rice Terraces</a></h3>
                                                      <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                                      <ul>
                                                            <li><span className="flaticon-shower"></span>2</li>
                                                            <li><span className="flaticon-king-size"></span>3</li>
                                                            <li><span className="flaticon-mountains"></span>Near Mountain</li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 ">
                                          <div className="project-wrap">
                                                <a href="#" className="img" style={{ backgroundImage: "url(images/destination-2.jpg)" }}>
                                                      <span className="price">$550/person</span>
                                                </a>
                                                <div className="text p-4">
                                                      <span className="days">10 Days Tour</span>
                                                      <h3><a href="#">Banaue Rice Terraces</a></h3>
                                                      <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                                      <ul>
                                                            <li><span className="flaticon-shower"></span>2</li>
                                                            <li><span className="flaticon-king-size"></span>3</li>
                                                            <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 ">
                                          <div className="project-wrap">
                                                <a href="#" className="img" style={{ backgroundImage: "url(images/destination-3.jpg)" }}>
                                                      <span className="price">$550/person</span>
                                                </a>
                                                <div className="text p-4">
                                                      <span className="days">7 Days Tour</span>
                                                      <h3><a href="#">Banaue Rice Terraces</a></h3>
                                                      <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                                      <ul>
                                                            <li><span className="flaticon-shower"></span>2</li>
                                                            <li><span className="flaticon-king-size"></span>3</li>
                                                            <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 ">
                                          <div className="project-wrap">
                                                <a href="#" className="img" style={{ backgroundImage: "url(images/destination-4.jpg)" }}>
                                                      <span className="price">$550/person</span>
                                                </a>
                                                <div className="text p-4">
                                                      <span className="days">8 Days Tour</span>
                                                      <h3><a href="#">Banaue Rice Terraces</a></h3>
                                                      <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                                      <ul>
                                                            <li><span className="flaticon-shower"></span>2</li>
                                                            <li><span className="flaticon-king-size"></span>3</li>
                                                            <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 ">
                                          <div className="project-wrap">
                                                <a href="#" className="img" style={{ backgroundImage: "url(images/destination-5.jpg)" }}>
                                                      <span className="price">$550/person</span>
                                                </a>
                                                <div className="text p-4">
                                                      <span className="days">10 Days Tour</span>
                                                      <h3><a href="#">Banaue Rice Terraces</a></h3>
                                                      <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                                      <ul>
                                                            <li><span className="flaticon-shower"></span>2</li>
                                                            <li><span className="flaticon-king-size"></span>3</li>
                                                            <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 ">
                                          <div className="project-wrap">
                                                <a href="#" className="img" style={{ backgroundImage: "url(images/destination-6.jpg)" }}>
                                                      <span className="price">$550/person</span>
                                                </a>
                                                <div className="text p-4">
                                                      <span className="days">7 Days Tour</span>
                                                      <h3><a href="#">Banaue Rice Terraces</a></h3>
                                                      <p className="location"><span className="fa fa-map-marker"></span> Banaue, Ifugao, Philippines</p>
                                                      <ul>
                                                            <li><span className="flaticon-shower"></span>2</li>
                                                            <li><span className="flaticon-king-size"></span>3</li>
                                                            <li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
                                                      </ul>
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
                                                      <div
                                                            className="img d-flex w-100 align-items-center justify-content-center"
                                                            style={{ backgroundImage: "url(images/about-1.jpg)" }}
                                                      ></div>
                                                </div>
                                                <div className="col-md-6 pl-md-5 py-5">
                                                      <div className="row justify-content-start pb-3">
                                                            <div className="col-md-12 heading-section ">
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

                  {/* Feedback */}
                  <section className="ftco-section testimony-section bg-bottom" style={{ backgroundImage: "url(images/bg_1.jpg)" }}>
                        <div className="overlay"></div>
                        <div className="container">

                              <div className="row justify-content-center pb-4">
                                    <div className="col-md-7 text-center heading-section heading-section-white ">
                                          <span className="subheading">Testimonial</span>
                                          <h2 className="mb-4">Tourist Feedback</h2>
                                    </div>
                              </div>
                              <div className="container">
                                    <div className="row justify-content-center pb-4">
                                          <div className="col-md-12" >
                                                <div className="carousel-testimony owl-carousel" style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto", gap: "20px" }}>

                                                      <div className="item" style={{ flex: "1 1 20%" }}>
                                                            <div className="testimony-wrap py-4">
                                                                  <div className="text">
                                                                        <p className="star">
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                        </p>
                                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                                        <div className="d-flex align-items-center">
                                                                              <div className="user-img" style={{ backgroundImage: "url(images/person_1.jpg)" }}></div>
                                                                              <div className="pl-3">
                                                                                    <p className="name">Roger Scott</p>
                                                                                    <span className="position">Marketing Manager</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="item" style={{ flex: "1 1 20%" }}>
                                                            <div className="testimony-wrap py-4">
                                                                  <div className="text">
                                                                        <p className="star">
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                        </p>
                                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                                        <div className="d-flex align-items-center">
                                                                              <div className="user-img" style={{ backgroundImage: "url(images/person_2.jpg)" }}></div>
                                                                              <div className="pl-3">
                                                                                    <p className="name">Roger Scott</p>
                                                                                    <span className="position">Marketing Manager</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="item" style={{ flex: "1 1 20%" }}>
                                                            <div className="testimony-wrap py-4">
                                                                  <div className="text">
                                                                        <p className="star">
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                        </p>
                                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                                        <div className="d-flex align-items-center">
                                                                              <div className="user-img" style={{ backgroundImage: "url(images/person_3.jpg)" }}></div>
                                                                              <div className="pl-3">
                                                                                    <p className="name">Roger Scott</p>
                                                                                    <span className="position">Marketing Manager</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="item" style={{ flex: "1 1 20%" }}>
                                                            <div className="testimony-wrap py-4">
                                                                  <div className="text">
                                                                        <p className="star">
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                        </p>
                                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                                        <div className="d-flex align-items-center">
                                                                              <div className="user-img" style={{ backgroundImage: "url(images/person_1.jpg)" }}></div>
                                                                              <div className="pl-3">
                                                                                    <p className="name">Roger Scott</p>
                                                                                    <span className="position">Marketing Manager</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div className="item" style={{ flex: "1 1 20%" }}>
                                                            <div className="testimony-wrap py-4">
                                                                  <div className="text">
                                                                        <p className="star">
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                              <span className="fa fa-star"></span>
                                                                        </p>
                                                                        <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                                        <div className="d-flex align-items-center">
                                                                              <div className="user-img" style={{ backgroundImage: "url(images/person_2.jpg)" }}></div>
                                                                              <div className="pl-3">
                                                                                    <p className="name">Roger Scott</p>
                                                                                    <span className="position">Marketing Manager</span>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>



                  <section className="ftco-section">
                        <div className="container">
                              <div className="row justify-content-center pb-4">
                                    <div className="col-md-12 heading-section text-center ">
                                          <span className="subheading">Our Blog</span>
                                          <h2 className="mb-4">Recent Post</h2>
                                    </div>
                              </div>
                              <div className="row d-flex">

                                    <div className="col-md-4 d-flex ">
                                          <div className="blog-entry justify-content-end">
                                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('images/image_1.jpg')" }}>
                                                </a>
                                                <div className="text">
                                                      <div className="d-flex align-items-center mb-4 topp">
                                                            <div className="one">
                                                                  <span className="day">11</span>
                                                            </div>
                                                            <div className="two">
                                                                  <span className="yr">2020</span>
                                                                  <span className="mos">September</span>
                                                            </div>
                                                      </div>
                                                      <h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
                                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                      <p><a href="#" className="btn btn-primary">Read more</a></p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 d-flex ">
                                          <div className="blog-entry justify-content-end">
                                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('images/image_2.jpg')" }}>
                                                </a>
                                                <div className="text">
                                                      <div className="d-flex align-items-center mb-4 topp">
                                                            <div className="one">
                                                                  <span className="day">11</span>
                                                            </div>
                                                            <div className="two">
                                                                  <span className="yr">2020</span>
                                                                  <span className="mos">September</span>
                                                            </div>
                                                      </div>
                                                      <h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
                                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                      <p><a href="#" className="btn btn-primary">Read more</a></p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 d-flex ">
                                          <div className="blog-entry">
                                                <a href="blog-single.html" className="block-20" style={{ backgroundImage: "url('images/image_3.jpg')" }}>
                                                </a>
                                                <div className="text">
                                                      <div className="d-flex align-items-center mb-4 topp">
                                                            <div className="one">
                                                                  <span className="day">11</span>
                                                            </div>
                                                            <div className="two">
                                                                  <span className="yr">2020</span>
                                                                  <span className="mos">September</span>
                                                            </div>
                                                      </div>
                                                      <h3 className="heading"><a href="#">Most Popular Place In This World</a></h3>
                                                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                      <p><a href="#" className="btn btn-primary">Read more</a></p>
                                                </div>
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
                                                <p className="mb-0">
                                                      <a href="#" className="btn btn-primary px-4 py-3">Ask For A Quote</a>
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            </React.Fragment>
      );
};

export default Home;