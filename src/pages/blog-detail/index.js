import React from "react";
import { useParams } from "react-router-dom";
import dataService from "../../service/data";

export default function BlogDetail() {
    const { id } = useParams();
    const blog = dataService.getPost().find((item) => item.id == id);

    return (
        <React.Fragment>
            <section className="hero-wrap hero-wrap-2 " style={{ backgroundImage: "url('../images/bg_1.jpg')" }}>
                <div className="overlay"></div>
                <div className="container" style={{ height: '100%' }}>
                    <div className="row no-gutters slider-text align-items-end justify-content-center" style={{ height: '100%' }}>
                        <div className="col-md-9 pb-5 text-center">
                            <p className="breadcrumbs">
                                <span className="mr-2"><a href="/">Home <i className="fa fa-chevron-right"></i></a></span>
                                <span className="mr-2"><a href="/blogs">Blog <i className="fa fa-chevron-right"></i></a></span>
                                <span>Blog Single <i className="fa fa-chevron-right"></i></span>
                            </p>
                            <h1 className="mb-0 bread">Blog Details</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 py-md-5 mt-md-5">
                            <h2 className="mb-3">{blog.title}</h2>
                            <p>{blog.description}</p>
                            <p><img src={'/images/' + blog.image} alt={blog.title} className="img-fluid" /></p>

                            <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                            <p>Temporibus ad error suscipit exercitationem hic...</p>

                            <div className="tag-widget post-tag-container mb-5 mt-5">
                                <div className="tagcloud">
                                    <a href="#" className="tag-cloud-link">Life</a>
                                    <a href="#" className="tag-cloud-link">Sport</a>
                                    <a href="#" className="tag-cloud-link">Tech</a>
                                    <a href="#" className="tag-cloud-link">Travel</a>
                                </div>
                            </div>

                            <div className="about-author d-flex p-4 bg-light">
                                <div className="bio mr-5">
                                    <img src="../images/person_1.jpg" alt="Author" className="img-fluid mb-4" />
                                </div>
                                <div className="desc">
                                    <h3>George Washington</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                                </div>
                            </div>

                            <div className="pt-5 mt-5">
                                <h3 className="mb-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>6 Comments</h3>
                                <ul className="comment-list">
                                    <li className="comment">
                                        <div className="vcard bio">
                                            <img src="../images/person_1.jpg" alt="User" />
                                        </div>
                                        <div className="comment-body">
                                            <h3>John Doe</h3>
                                            <div className="meta">September 11, 2020 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet...</p>
                                            <p><a href="#" className="reply">Reply</a></p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="comment-form-wrap pt-5">
                                    <h3 className="mb-5" style={{ fontSize: '20px', fontWeight: 'bold' }}>Leave a comment</h3>
                                    <form action="#" className="p-5 bg-light">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="website">Website</label>
                                            <input type="url" className="form-control" id="website" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea id="message" cols="30" rows="10" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                                        </div>
                                    </form>
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
                            <div className="img" style={{ backgroundImage: "url(../images/bg_2.jpg)" }}>
                                <div className="overlay"></div>
                                <h2>We Are Pacific A Travel Agency</h2>
                                <p>We can manage your dream building...</p>
                                <p className="mb-0"><a href="#" className="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
