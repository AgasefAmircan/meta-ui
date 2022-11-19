import React from "react";
import Navbar from "../Navbar";
import Aside from "../Aside";
import { Link } from "react-router-dom";
import './grid.css'
const Grid = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex-container">
          <Aside />

          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Grid</div>
              <div className="intro-sub-heading md-text">
                Two items in a Grid
              </div>

              <div className="grid grid-2">
                <div>
                  <img
                    src="https://meta-ui.netlify.app/assets/illustration-hero.svg"
                    alt="grid-example"
                  />
                </div>
                <div>
                  <img
                    src="https://meta-ui.netlify.app/assets/illustration-hero.svg"
                    alt="grid-example"
                  />
                </div>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522grid%2520grid-2%2522%253E%250A%2509%253Cdiv%253E%250A%2509%2509%253Cimg%2520src%253D%2522your-img%2522%2520alt%253D%2522grid-example%2522%2520%252F%253E%2520%250A%2509%253C%252Fdiv%253E%250A%2509%253Cdiv%253E%250A%2509%2509%253Cimg%2520src%253D%2522your-img%2522%2520alt%253D%2522grid-example%2522%2520%252F%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{
                  height: "260px",
                  border: "0",
                  marginTop: "2rem",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                title="Meta UI"
              ></iframe>

              <div className="intro-sub-heading md-text mt-4">
                Three items in a Grid
              </div>

              <div className="grid grid-3">
                <div>
                  <img src="https://meta-ui.netlify.app/assets/illustration-hero.svg" alt="" />
                </div>
                <div>
                  <img src="https://meta-ui.netlify.app/assets/illustration-hero.svg" alt="" />
                </div>
                <div>
                  <img src="https://meta-ui.netlify.app/assets/illustration-hero.svg" alt="" />
                </div>
              </div>

              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522grid%2520grid-3%2522%253E%250A%2509%253Cdiv%253E%250A%2509%2509%253Cimg%2520src%253D%2522your-img%2522%2520alt%253D%2522grid-example%2522%2520%252F%253E%2520%250A%2509%253C%252Fdiv%253E%250A%2509%253Cdiv%253E%250A%2509%2509%253Cimg%2520src%253D%2522your-img%2522%2520alt%253D%2522grid-example%2522%2520%252F%253E%250A%2509%253C%252Fdiv%253E%250A%2509%253Cdiv%253E%250A%2509%2509%253Cimg%2520src%253D%2522your-img%2522%2520alt%253D%2522grid-example%2522%2520%252F%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{
                  height: "300px",
                  border: "0",
                  marginTop: "2rem",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                title="Meta UI"
              ></iframe>
            </section>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <Link to="/navigation">Navigation</Link>
              </div>
              <div className="next-page sm-text">
                <Link to="/slider">Slider</Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
