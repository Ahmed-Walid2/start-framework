import React from "react";

export default function Contact() {
  return (
    <>
      <section>
        <div className="container mt-5 py-5">
          <h2 className=" text-center mb-4 main-color fw-bold">
            CONATCT SECTION
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star main-color"></i>
            <div className="line ms-3"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="w-50 mx-auto">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    UserName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    User Age
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    User Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    User Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
