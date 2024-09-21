import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import dataService from '../../service/data';

const Home = () => {

      var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
      };
      const tours = dataService.getTours();
      const destinations = dataService.getDestination();
      const [searchParams, setSearchParams] = useState({
            destination: '',
            checkInDate: '',
            checkOutDate: '',
            priceLimit: ''
      });
      const [filteredTours, setFilteredTours] = useState([]);
      const [blogs, setBlogs] = useState([]);

      useEffect(() => {
            const tours = dataService.getTours();
            setFilteredTours(tours);

            const fetchedBlogs = dataService.getPost();
            setBlogs(fetchedBlogs);
      }, []);

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setSearchParams({
                  ...searchParams,
                  [name]: value
            });
      };

      const handleSearch = (e) => {
            e.preventDefault();
            const { destination, checkInDate, checkOutDate, priceLimit } = searchParams;
            const filtered = dataService.getTours().filter(tour => {
                  return (
                        (!destination || tour.location.toLowerCase().includes(destination.toLowerCase())) &&
                        (!priceLimit || tour.price <= priceLimit)
                  );
            });
            setFilteredTours(filtered);
      };
      return (
            <React.Fragment>
                  <div className="hero-wrap" style={{ backgroundImage: 'url(images/bg_5.jpg)' }}>
                        <div className="overlay"></div>
                        <div className="container" style={{ height: '100%' }}>
                              <div className="row no-gutters slider-text align-items-center" style={{ height: '100%' }}>
                                    <div className="col-md-7">
                                          <span className="subheading">Welcome to Pacific</span>
                                          <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
                                          <p className="caps">Travel to any corner of the world, without going around in circles</p>
                                    </div>
                                    <Link href="https://vimeo.com/45830194" className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4">
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
                                                <div className="row" id="search-tour">
                                                      <div className="col-md-12 nav-link-wrap">
                                                            <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                                  <Link className="nav-link active mr-md-1">Search Tour</Link>
                                                            </div>
                                                      </div>
                                                      <div className="col-md-12 tab-wrap">
                                                            <div className="tab-content" id="v-pills-tabContent">
                                                                  <div className="tab-pane show active">
                                                                        <form className="search-property-1" onSubmit={handleSearch}>
                                                                              <div className="row no-gutters">
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4 border-0">
                                                                                                <label htmlFor="destination">Destination</label>
                                                                                                <div className="form-field">
                                                                                                      <input
                                                                                                            type="text"
                                                                                                            name="destination"
                                                                                                            value={searchParams.destination}
                                                                                                            onChange={handleInputChange}
                                                                                                            className="form-control"
                                                                                                            placeholder="Search place"
                                                                                                      />
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4">
                                                                                                <div className="form-field">
                                                                                                      <label>Check-in/Check-out Dates</label>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                                    <div className="col-md d-flex">
                                                                                          <div className="form-group p-4">
                                                                                                <label htmlFor="priceLimit">Price Limit</label>
                                                                                                <div className="form-field">
                                                                                                      <select
                                                                                                            name="priceLimit"
                                                                                                            value={searchParams.priceLimit}
                                                                                                            onChange={handleInputChange}
                                                                                                            className="form-control"
                                                                                                      >
                                                                                                            <option value="">Select price</option>
                                                                                                            <option value="100">$100</option>
                                                                                                            <option value="10000">$10,000</option>
                                                                                                            <option value="50000">$50,000</option>
                                                                                                      </select>
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

                  <section className="ftco-section ">
                        <div className="container">
                              <div className="row d-flex">
                                    <div className="col-md-6 order-md-last heading-section pl-md-5  d-flex align-items-center">
                                          <div className="w-100">
                                                <span className="subheading">Welcome to Pacific</span>
                                                <h2 className="mb-4">It's time to start your adventure</h2>
                                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                                      A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                                <p><a href="#search-tour" className="btn btn-primary py-3 px-4">Search Destination</a></p>
                                          </div>
                                    </div>
                                    <div className="col-md-6">
                                          <div className="row">
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                                      <div className="services services-1 color-1 d-block img" style={{ backgroundImage: 'url(images/services-1.jpg)' }}>
                                                            <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-paragliding"></span></div>
                                                            <div className="media-body">
                                                                  <h3 className="heading mb-3">Activities</h3>
                                                                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                                      <div className="services services-1 color-2 d-block img" style={{ backgroundImage: 'url(images/services-2.jpg)' }}>
                                                            <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route"></span></div>
                                                            <div className="media-body">
                                                                  <h3 className="heading mb-3">Travel Arrangements</h3>
                                                                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                                      <div className="services services-1 color-3 d-block img" style={{ backgroundImage: 'url(images/services-3.jpg)' }}>
                                                            <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-tour-guide"></span></div>
                                                            <div className="media-body">
                                                                  <h3 className="heading mb-3">Private Guide</h3>
                                                                  <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ">
                                                      <div className="services services-1 color-4 d-block img" style={{ backgroundImage: 'url(images/services-4.jpg)' }}>
                                                            <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-map"></span></div>
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

                  <section className="ftco-section img ftco-select-destination" style={{ backgroundImage: 'url(images/bg_3.jpg)' }}>
                        <div className="container">
                              <div className="row justify-content-center pb-4">
                                    <div className="col-md-12 heading-section text-center ">
                                          <span className="subheading">Pacific Provide Places</span>
                                          <h2 className="mb-4">Select Your Destination</h2>
                                    </div>
                              </div>
                        </div>
                        <div className="container ">
                              <div className="row">
                                    <div className="col-md-12">
                                          <Slider  {...settings}>
                                                {destinations.map((item) => (<Link style={{ padding: "2rem" }}>
                                                      <div className="project-destination">
                                                            <a href="#" className="img" style={{ backgroundImage: `url(${item.image})` }}>
                                                                  <div className="text">
                                                                        <h3>{item.name}</h3>
                                                                        <span>{Number(tours.filter((tour => tour.destinationId == item.id)).length)} Tours</span>
                                                                  </div>
                                                            </a>
                                                      </div>
                                                </Link>))}
                                          </Slider>
                                    </div>
                              </div>
                        </div>
                  </section >

                  <section className="ftco-section">
                        <div className="container">
                              <div className="row justify-content-center pb-4">
                                    <div className="col-md-12 heading-section text-center">
                                          <span className="subheading">Destination</span>
                                          <h2 className="mb-4">Tour Destination</h2>
                                    </div>
                              </div>
                              <div className="row">
                                    {filteredTours.map(item => (
                                          <div className="col-md-4" key={item.id}>
                                                <div className="project-wrap">
                                                      <a href="#" className="img" style={{ backgroundImage: `url(${item.images})` }}>
                                                            <span className="price">${item.price}/person</span>
                                                      </a>
                                                      <div className="text p-4">
                                                            <span className="days">{item.count_day} Days Tour</span>
                                                            <h3><a href="#">{item.name}</a></h3>
                                                            <p className="location"><span className="fa fa-map-marker"></span> {item.location} {(dataService.getDestination().find(des => des.id === item.destinationId)).name}</p>
                                                            <ul>
                                                                  <li><span className="flaticon-shower"></span>{item.bath_room_count}</li>
                                                                  <li><span className="flaticon-king-size"></span>{item.bed_room_count}</li>
                                                                  <li><span className={item.near === 0 ? "flaticon-mountains" : "flaticon-sun-umbrella"}></span>{item.near === 0 ? 'Near Mountain' : 'Near Beach'}</li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>

                  <section className="ftco-section ftco-about img" style={{ backgroundImage: 'url(images/bg_4.jpg)' }}   >
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
                                                      <div className="img d-flex w-100 align-items-center justify-content-center" style={{ backgroundImage: 'url(images/about-1.jpg)' }}    >
                                                      </div>
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

                  <section className="ftco-section testimony-section bg-bottom" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}     >
                        <div className="overlay"></div>
                        <div className="container">
                              <div className="row justify-content-center pb-4">
                                    <div className="col-md-7 text-center heading-section heading-section-white ">
                                          <span className="subheading">Testimonial</span>
                                          <h2 className="mb-4">Tourist Feedback</h2>
                                    </div>
                              </div>
                              <div className="row ">
                                    <div className="col-md-12">
                                          <div className="carousel-testimony owl-carousel">
                                                <div >
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
                                                                        <div className="user-img" style={{ backgroundImage: 'url(images/person_1.jpg)' }}      ></div>
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
                  </section>
                  <section className="ftco-section">
                        <div className="container">
                              <div className="row justify-content-center pb-4">
                                    <div className="col-md-12 heading-section text-center">
                                          <span className="subheading">Our Blog</span>
                                          <h2 className="mb-4">Recent Posts</h2>
                                    </div>
                              </div>
                              <div className="row d-flex">
                                    {blogs.map(blog => (
                                          <div className="col-md-4 d-flex" key={blog.id}>
                                                <div className="blog-entry justify-content-end">
                                                      <Link to={`/blog/${blog.id}`} className="block-20" style={{ backgroundImage: `url(${blog.image})` }}></Link>
                                                      <div className="text">
                                                            <div className="d-flex align-items-center mb-4 topp">
                                                                  <div className="one">
                                                                        <span className="day">{blog.date.day}</span>
                                                                  </div>
                                                                  <div className="two">
                                                                        <span className="yr">{blog.date.year}</span>
                                                                        <span className="mos">{blog.date.month}</span>
                                                                  </div>
                                                            </div>
                                                            <h3 className="heading"><a href="#">{blog.title}</a></h3>
                                                            <p>{blog.description}</p>
                                                            <p><a href="#" className="btn btn-primary">Read more</a></p>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>
                  <section className="ftco-intro ftco-section ftco-no-pt">
                        <div className="container">
                              <div className="row justify-content-center">
                                    <div className="col-md-12 text-center">
                                          <div className="img" style={{ backgroundImage: 'url("images/bg_2.jpg")' }}  >
                                                <div className="overlay"></div>
                                                <h2>We Are Pacific A Travel Agency</h2>
                                                <p>We can manage your dream building A small river named Duden flows by their place</p>
                                                <p className="mb-0"><a href="#" className="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            </React.Fragment >
      );
};

export default Home;
