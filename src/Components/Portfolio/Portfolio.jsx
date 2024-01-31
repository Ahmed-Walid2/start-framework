import React from "react";
import port1 from "../../assets/images/port1.png";
import port2 from "../../assets/images/port2.png";
import port3 from "../../assets/images/port3.png";

export default function Portfolio() {
  return (
    <>
      <section className=" py-5 mt-5  text-white text-center  d-flex just-content-center align-items-center">
        <div className="container">
          <h2 className="mb-4 main-color fw-bold">PORTFOLIO COMPONENT</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star main-color"></i>
            <div className="line ms-3"></div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6 col-lg-4  ">
              <div className="inner position-relative overflow-hidden">
                <img className="img-fluid rounded-2 " src={port1} alt="" />
                <div className="layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center rounded-2 align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4  ">
              <div className="inner position-relative overflow-hidden">
                <img className="img-fluid rounded-2 " src={port2} alt="" />
                <div className="layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center rounded-2 align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4  ">
              <div className="inner position-relative overflow-hidden">
                <img className="img-fluid rounded-2 " src={port3} alt="" />
                <div className="layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center rounded-2 align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4  ">
              <div className="inner position-relative overflow-hidden">
                <img className="img-fluid rounded-2 " src={port1} alt="" />
                <div className="layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center rounded-2 align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4  ">
              <div className="inner position-relative overflow-hidden">
                <img className="img-fluid rounded-2 " src={port2} alt="" />
                <div className="layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center rounded-2 align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4  ">
              <div className="inner position-relative overflow-hidden">
                <img className="img-fluid rounded-2 " src={port3} alt="" />
                <div className="layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center rounded-2 align-items-center ">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
