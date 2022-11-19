import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <Link to="/home" className="logo md-text">
          Meta UI
        </Link>
        <section className="nav-right md-text">
          <a href="https://github.com/agasefamircan" 
          rel="noreferrer"target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.facebook.com/agasef.amircanov/" 
          rel="noreferrer"
          target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/agasefamircan/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
