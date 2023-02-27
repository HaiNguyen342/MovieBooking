import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {" "}
        Movie{" "}
      </a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
        <div className="ml-auto">
          {userState.userInfo ? (
            <>
              <span className="mr-3">Hello {userState.userInfo.hoTen}</span>
              <button className="btn btn-danger">Logout</button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-info my-2 my-sm-0 mr-2"
                type="sumit"
              >
                Register
              </button>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="btn btn-outline-success my-2 my-sm-0"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
