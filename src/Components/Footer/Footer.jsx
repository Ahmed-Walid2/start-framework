import React from "react";

export default function Footer() {
  return (
    <footer className="pt-5  text-white  above-footer text-center ">
      <div className="container">
        <div className="row py-5 gy-5">
          <div className="col-md-4">
            <div className="location">
              <h2>Location</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="around-web">
              <h2>AROUND THE WEB</h2>
              <div className="icons">
                <i className="fa-brands fa-facebook mx-1 icon"></i>
                <i className="fa-brands fa-twitter mx-1 icon"></i>
                <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                <i className="fa-solid fa-globe mx-1 icon"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="freelancer">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" footer-color py-2">
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
