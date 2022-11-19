import React from "react";
import Navbar from "../Navbar";
import Aside from "../Aside";
import "./slider.css";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex-container">
          <Aside />
          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Slider</div>
              <div className="intro-sub-heading md-text">
                Slider component is mostly used in e-commerce website to select
                from a range of values like product prices.
              </div>
              <div className="slider-container">
                <input type="range" className="slider" min="0" max="100" />
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cinput%2520type%253D%2522range%2522%2520className%253D%2522slider%2522%2520min%253D%25220%2522%2520max%253D%2522100%2522%2520%252F%253E%2520"
                style={{
                  width: "100%",
                  height: "130px",
                  border: "0",
                  marginTop: "2rem",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                title="MetaUI"
              ></iframe>
            </section>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <Link to="/grid">Grid</Link>
              </div>
              <div className="next-page sm-text">
                <Link to="/rating">Rating</Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
