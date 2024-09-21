import React from 'react';

const Blog = () => {
      return (
            <div>
                  <div className="contanier">
                        <form className="w-50 mx-auto py-5 shadow p-4">
                              <h3 className="text-white">Login In</h3><hr />
                              <div className="mb-3 ">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                              </div>
                              <div className="mb-3 ">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="Enter your password" />
                              </div>
                              <div className="mb-3 d-flex">
                                    <button className="btn btn-success">Login</button>
                                    <p className="form-label ms-auto mt-2">Create New Account ? </p>
                              </div>
                        </form>
                  </div>
            </div>
      );
};
export default Blog;