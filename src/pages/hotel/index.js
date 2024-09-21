
import React, { useEffect, useState } from 'react';
import DataService from "../../service/data";

const Hotel = () => {
      const hotelsInit = DataService.getHotels();
      const destinations = DataService.getDestination();

      const [hotels, setHotels] = useState([]);
      const [searchCriteria, setSearchCriteria] = useState({
            destination: '',
            checkInDate: '',
            checkOutDate: '',
            priceLimit: ''
      });
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(10);
      const [filteredHotels, setFilteredHotels] = useState(hotelsInit);

      const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;

      useEffect(() => {
            const paginatedHotels = filteredHotels.slice(indexOfFirstItem, indexOfLastItem);
            setHotels(paginatedHotels);
      }, [currentPage, filteredHotels]);

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setSearchCriteria({ ...searchCriteria, [name]: value });
      };

      const handleSearch = (e) => {
            e.preventDefault();
            let filteredHotels = hotelsInit;

            if (searchCriteria.destination) {
                  filteredHotels = filteredHotels.filter(hotel => {
                        const destinationName = destinations.find(des => des.id === hotel.destinationId)?.name;
                        return destinationName.toLowerCase().includes(searchCriteria.destination.toLowerCase());
                  });
            }

            if (searchCriteria.priceLimit) {
                  filteredHotels = filteredHotels.filter(hotel => hotel.price <= parseInt(searchCriteria.priceLimit, 10));
            }

            setFilteredHotels(filteredHotels);
            setCurrentPage(1);
      };

      const paginate = (pageNumber) => {
            setCurrentPage(pageNumber);
      };

      return (
            <React.Fragment>
                  <section className="hero-wrap hero-wrap-2 " style={{ backgroundImage: "url('images/bg_1.jpg')" }}>
                        <div className="overlay"></div>
                        <div className="container" style={{ height: "100%" }}>
                              <div className="row no-gutters slider-text  align-items-end justify-content-center" style={{ height: "100%" }}>
                                    <div className="col-md-9  pb-5 text-center">
                                          <p className="breadcrumbs">
                                                <span className="mr-2">
                                                      <a href="index.html">Home <i className="fa fa-chevron-right"></i></a>
                                                </span>
                                                <span>Hotel <i className="fa fa-chevron-right"></i></span>
                                          </p>
                                          <h1 className="mb-0 bread">Hotel</h1>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="ftco-section ftco-no-pb">
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-12">
                                          <div className="search-wrap-1 ">
                                                <form onSubmit={handleSearch} className="search-property-1">
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
                                                                                    {destinations.map(destination => (
                                                                                          <option key={destination.id} value={destination.name}>
                                                                                                {destination.name}
                                                                                          </option>
                                                                                    ))}
                                                                              </select>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="col-lg d-flex">
                                                                  <div className="form-group p-4">
                                                                        <label htmlFor="checkInDate">Check-in date</label>
                                                                        <div className="form-field">
                                                                              <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                              <input
                                                                                    type="date"
                                                                                    className="form-control"
                                                                                    name="checkInDate"
                                                                                    value={searchCriteria.checkInDate}
                                                                                    onChange={handleInputChange}
                                                                              />
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                            <div className="col-lg d-flex">
                                                                  <div className="form-group p-4">
                                                                        <label htmlFor="checkOutDate">Check-out date</label>
                                                                        <div className="form-field">
                                                                              <div className="icon"><span className="fa fa-calendar"></span></div>
                                                                              <input
                                                                                    type="date"
                                                                                    className="form-control"
                                                                                    name="checkOutDate"
                                                                                    value={searchCriteria.checkOutDate}
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
                                    {hotels.map((hotel) => (
                                          <div className="col-md-4" key={hotel.id}>
                                                <div className="project-wrap hotel">
                                                      <a href="#" className="img" style={{ backgroundImage: `url(${hotel.images})` }}>
                                                            <span className="price">${hotel.price}/person</span>
                                                      </a>
                                                      <div className="text p-4">
                                                            <h3><a href="#">{hotel.name}</a></h3>
                                                            <p className="location"><span className="fa fa-map-marker"></span> {hotel.location}</p>
                                                            <ul>
                                                                  <li><span className="flaticon-shower"></span>{hotel.bath_room_count}</li>
                                                                  <li><span className="flaticon-king-size"></span>{hotel.bed_room_count}</li>
                                                                  <li><span className={hotel.near === 0 ? "flaticon-mountains" : "flaticon-sun-umbrella"}></span>{hotel.near === 0 ? "Near Mountain" : "Near Beach"}</li>
                                                            </ul>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
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

export default Hotel;
