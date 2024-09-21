import React, { useEffect, useState } from 'react';

import DataService from '../../service/data'
const Destination = () => {
      const toursInit = DataService.getTours();
      const destinations = DataService.getDestination();
      const [searchCriteria, setSearchCriteria] = useState({
            destination: '',
            checkinDate: '',
            checkoutDate: '',
            priceLimit: ''
      });


      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(10);
      const [filteredTours, setFilteredTours] = useState(toursInit);
      const totalPages = Math.ceil(toursInit.length / itemsPerPage);
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentTours = toursInit.slice(indexOfFirstItem, indexOfLastItem);
      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setSearchCriteria({
                  ...searchCriteria,
                  [name]: value
            });
      };
      const handleSearch = (e) => {
            e.preventDefault();

            let filtered = toursInit;

            if (searchCriteria.destination) {
                  filtered = filtered.filter(tour => {
                        const destinationName = destinations.find(des => des.id === tour.destinationId)?.name.toLowerCase();
                        return destinationName?.includes(searchCriteria.destination.toLowerCase());
                  });
            }

            if (searchCriteria.priceLimit) {
                  filtered = filtered.filter(tour => tour.price <= parseInt(searchCriteria.priceLimit, 10));
            }


            setFilteredTours(filtered);
            setCurrentPage(1);
      };
      const paginate = (pageNumber) => setCurrentPage(pageNumber);
      return (
            <React.Fragment>
                  <section
                        className="hero-wrap hero-wrap-2 js-fullheight"
                        style={{ backgroundImage: "url('images/bg_1.jpg')" }}
                  >
                        <div className="overlay"></div>
                        <div className="container" style={{ height: "100%" }}>
                              <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center" style={{ height: "100%" }}>
                                    <div className="col-md-9  pb-5 text-center">
                                          <p className="breadcrumbs">
                                                <span className="mr-2">
                                                      <a href="index.html">Home <i className="fa fa-chevron-right"></i></a>
                                                </span>
                                                <span>Tour List <i className="fa fa-chevron-right"></i></span>
                                          </p>
                                          <h1 className="mb-0 bread">Tours List</h1>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="ftco-section ftco-no-pb">
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-12">
                                          <div className="search-wrap-1 ">
                                                <form className="search-property-1" onSubmit={handleSearch}>
                                                      <div className="row no-gutters">
                                                            <div className="col-lg d-flex">
                                                                  <div className="form-group p-4 border-0">
                                                                        <label htmlFor="destination">Destination</label>
                                                                        <div className="form-field">
                                                                              <div className="icon"><span className="fa fa-search"></span></div>
                                                                              <select
                                                                                    className="form-control"
                                                                                    name="destination"
                                                                                    value={searchCriteria.destination}
                                                                                    onChange={handleInputChange}
                                                                              >
                                                                                    <option value="">Select Destination</option>
                                                                                    {
                                                                                          destinations.map(destination => (
                                                                                                <option key={destination.id} value={destination.name}>
                                                                                                      {destination.name}
                                                                                                </option>
                                                                                          ))
                                                                                    }
                                                                              </select>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                            <div className="col-lg d-flex">
                                                                  <div className="form-group p-4">
                                                                        <label htmlFor="checkinDate">Check-in date</label>
                                                                        <div className="form-field">
                                                                              <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                              <input
                                                                                    type="date"
                                                                                    className="form-control checkin_date"
                                                                                    name="checkinDate"
                                                                                    value={searchCriteria.checkinDate}
                                                                                    onChange={handleInputChange}
                                                                              />
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="col-lg d-flex">
                                                                  <div className="form-group p-4">
                                                                        <label htmlFor="checkoutDate">Check-out date</label>
                                                                        <div className="form-field">
                                                                              <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                              <input
                                                                                    type="date"
                                                                                    className="form-control checkout_date"
                                                                                    name="checkoutDate"
                                                                                    value={searchCriteria.checkoutDate}
                                                                                    onChange={handleInputChange}
                                                                              />
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="col-lg d-flex">
                                                                  <div className="form-group p-4">
                                                                        <label htmlFor="priceLimit">Price Limit</label>
                                                                        <div className="form-field">
                                                                              <div className="select-wrap">
                                                                                    <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                                                                    <select
                                                                                          className="form-control"
                                                                                          name="priceLimit"
                                                                                          value={searchCriteria.priceLimit}
                                                                                          onChange={handleInputChange}
                                                                                    >
                                                                                          <option value="">Select Price Limit</option>
                                                                                          <option value="5000">$5,000</option>
                                                                                          <option value="10000">$10,000</option>
                                                                                          <option value="50000">$50,000</option>
                                                                                          <option value="100000">$100,000</option>
                                                                                    </select>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="col-lg d-flex">
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
                  </section>

                  <section className="ftco-section">
                        <div className="container">
                              <div className="row">
                                    {
                                          filteredTours != [] ? filteredTours.map((item, index) => (
                                                <div className="col-md-4" key={index}>
                                                      <div className="project-wrap">
                                                            <a href="#" className="img" style={{ backgroundImage: `url(${item.images})` }}>
                                                                  <span className="price">${item.price}/person</span>
                                                            </a>
                                                            <div className="text p-4">
                                                                  <span className="days">{item.count_day} Days Tour</span>
                                                                  <h3><a href="#">{item.name}</a></h3>
                                                                  <p className="location"><span className="fa fa-map-marker"></span> {item.location} {(destinations.find(des => des.id === item.destinationId)).name}</p>
                                                                  <ul>
                                                                        <li><span className="flaticon-shower"></span>{item.bath_room_count}</li>
                                                                        <li><span className="flaticon-king-size"></span>{item.bed_room_count}</li>
                                                                        <li><span className={item.near === 0 ? "flaticon-mountains" : "flaticon-sun-umbrella"}></span>{item.near === 0 ? 'Near Mountain' : "Near Beach"}</li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </div>
                                          )) : currentTours.map((item, index) => (
                                                <div className="col-md-4" key={index}>
                                                      <div className="project-wrap">
                                                            <a href="#" className="img" style={{ backgroundImage: `url(${item.images})` }}>
                                                                  <span className="price">${item.price}/person</span>
                                                            </a>
                                                            <div className="text p-4">
                                                                  <span className="days">{item.count_day} Days Tour</span>
                                                                  <h3><a href="#">{item.name}</a></h3>
                                                                  <p className="location"><span className="fa fa-map-marker"></span> {item.location} {(destinations.find(des => des.id === item.destinationId)).name}</p>
                                                                  <ul>
                                                                        <li><span className="flaticon-shower"></span>{item.bath_room_count}</li>
                                                                        <li><span className="flaticon-king-size"></span>{item.bed_room_count}</li>
                                                                        <li><span className={item.near === 0 ? "flaticon-mountains" : "flaticon-sun-umbrella"}></span>{item.near === 0 ? 'Near Mountain' : "Near Beach"}</li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))
                                    }

                              </div>

                              <div className="row mt-5">
                                    <div className="col text-center">
                                          <div className="block-27">
                                                <ul>
                                                      <li className={currentPage === 1 ? "disabled" : ""} style={{ cursor: "pointer" }}>
                                                            <a onClick={() => paginate(currentPage - 1)}>&lt;</a>
                                                      </li>

                                                      {Array.from({ length: totalPages }, (_, i) => (
                                                            <li key={i} className={currentPage === i + 1 ? "active" : ""} style={{ cursor: "pointer" }}>
                                                                  <a onClick={() => paginate(i + 1)}>{i + 1}</a>
                                                            </li>
                                                      ))}

                                                      <li className={currentPage === totalPages ? "disabled" : ""} style={{ cursor: "pointer" }}>
                                                            <a onClick={() => paginate(currentPage + 1)}>&gt;</a>
                                                      </li>
                                                </ul>
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
                                                <p>We can manage your dream building. A small river named Duden flows by their place.</p>
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

export default Destination;
