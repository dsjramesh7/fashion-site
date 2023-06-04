import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Home</a>
          <form class="d-flex" role="search">
            {/* <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <button className="btn" type="submit">
              <i class="bi bi-share pe-2"></i>  
              Share
            </button>
            <button className="btn" type="submit">
            <i class="bi bi-heart pe-2"></i>
              Save
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
