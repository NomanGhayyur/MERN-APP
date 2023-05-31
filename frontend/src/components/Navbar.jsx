import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h3 className="navbar-brand" href="#">
          MERN
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/create" className="nav-link" aria-current="page">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/userlist"
                className="nav-link active"
                aria-current="page"
              >
                All Post
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/update"
                className="nav-link active"
                aria-current="page"
              >
                Update Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
