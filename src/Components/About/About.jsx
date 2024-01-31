import React from "react";

export default function About() {
  return (
    <>
      <section className=" bg-about text-white text-center vh-100 d-flex just-content-center align-items-center ">
        <div className="container">
          <div className="title  ">
            <h2 className="fw-bold">ABOUT COMPONENT</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line white-line me-3"></div>
              <i className="fa-solid fa-star sec-color"></i>
              <div className="line sec-color ms-3 white-line"></div>
            </div>
          </div>
          <div className="container pt-5">
            <div className="row gy-4">
              <div className="col-md-6 ">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
