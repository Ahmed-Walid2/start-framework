import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-nav fixed-top z-3 py-3">
        <div className="container">
          <Link className="navbar-brand fs-3 fw-bold" to={"/start-framework/"}>
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold w-fit ">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active bg-about px-2 rounded-2"
                      : "nav-link "
                  }
                  aria-current="page"
                  to={"about"}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item fw-bold w-fit ">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active bg-about px-2 rounded-2"
                      : "nav-link "
                  }
                  aria-current="page"
                  to={"portfolio"}
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item fw-bold w-fit">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active bg-about px-2 rounded-2"
                      : "nav-link "
                  }
                  aria-current="page"
                  to={"contact"}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
