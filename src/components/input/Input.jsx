import React from "react";
import Navbar from "../Navbar";
import Aside from "../Aside";
import './input.css'
import { Link } from "react-router-dom";
const Input = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="flex-container">
          <Aside />
          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Input</div>
              <p className="intro-sub-heading sm-text">
                The input tag specifies an input field where the user can enter
                data.
              </p>
              <div className="intro-heading lg-text">Basic Input Field</div>
              <p className="intro-sub-heading sm-text">
                When we want to get input from the user then we will use this
                basic input fields.
              </p>

              <div className="input-container">
                <form className="form">
                  <label className="sm-text">Username : </label>
                  <input type="text" placeholder="Please enter your name" />
                  <label className="sm-text">Password : </label>
                  <input type="text" placeholder="Please enter your name" />
                </form>
              </div>
              <div className="intro-heading lg-text mt-4">
                Input field with validation and errors style
              </div>
              <p className="intro-sub-heading sm-text">
                Input field with validation and errors style show error-message
                and change color according to type of error.
              </p>
              <div className="input-container">
                <form className="form">
                  <label className="sm-text">Username : </label>
                  <input type="text" className="input-success" />
                  <p className="sm-text success-msg">Correct Username</p>

                  <label className="sm-text">Password : </label>
                  <input type="text" className="input-error" />
                  <p className="sm-text error-msg">Incorrect Password</p>
                </form>
              </div>
            </section>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <Link to="/image">Image</Link>
              </div>
              <div className="next-page sm-text">
                <Link to="/text">
                  Text Utilities
                </Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
