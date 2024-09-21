import React, { useState, useEffect } from 'react';
import dataService from "../../service/data"
const Blog = () => {
      const blogInit = dataService.getPost();

      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage] = useState(2);
      const [blogs, setBlogs] = useState(blogInit.slice(0, itemsPerPage));

      const totalPages = Math.ceil(blogInit.length / itemsPerPage);

      useEffect(() => {
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            setBlogs(blogInit.slice(indexOfFirstItem, indexOfLastItem));
      }, [currentPage, itemsPerPage]);

      const paginate = (pageNumber) => {
            if (pageNumber >= 1 && pageNumber <= totalPages) {
                  setCurrentPage(pageNumber);
            }
      };

      return (
            <React.Fragment>

                  <section className="hero-wrap hero-wrap-2 " style={{ backgroundImage: "url('images/bg_1.jpg')" }} >
                        <div className="overlay"></div>
                        <div className="container" style={{ height: "100%" }}>
                              <div className="row no-gutters slider-text align-items-end justify-content-center" style={{ height: "100%" }}>
                                    <div className="col-md-9 pb-5 text-center">
                                          <p className="breadcrumbs">
                                                <span className="mr-2"><a href="index.html">Home <i className="fa fa-chevron-right"></i></a></span>
                                                <span>Blog <i className="fa fa-chevron-right"></i></span>
                                          </p>
                                          <h1 className="mb-0 bread">Blog</h1>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="ftco-section">
                        <div className="container">
                              <div className="row d-flex">
                                    {blogs.map((blog) => (
                                          <div className="col-md-4 d-flex" key={blog.id}>
                                                <div className="blog-entry justify-content-end">
                                                      <a href="blog-single.html" className="block-20" style={{ backgroundImage: `url(${blog.image})` }}></a>
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
                                          <div className="img" style={{ backgroundImage: "url('images/bg_2.jpg')" }}>
                                                <div className="overlay"></div>
                                                <h2>We Are Pacific A Travel Agency</h2>
                                                <p>We can manage your dream building. A small river named Duden flows by their place.</p>
                                                <p className="mb-0"><a href="#" className="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            </React.Fragment>
      );
};

export default Blog;
