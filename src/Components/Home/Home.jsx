import React from "react";
import homeImg from "../../assets/images/home-img.svg";

export default function Home() {
  return (
    <>
      <section className="home py-5 mt-5 bg-about d-flex flex-column justify-content-center text-center text-white">
        <img className="w-25 mx-auto mb-4" src={homeImg} alt="" />
        <h1 className="fw-bold">START FRAMEWORK</h1>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="line white-line me-3"></div>
          <i className="fa-solid fa-star sec-color"></i>
          <div className="line sec-color ms-3 white-line"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </section>
    </>
  );
}
