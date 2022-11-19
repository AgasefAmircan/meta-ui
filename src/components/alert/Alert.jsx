import React from "react";
import Aside from "../Aside";
import Navbar from "../Navbar";
import "./alert.css";
const Alert = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex-container">
         <Aside/>
          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Alert</div>
              <p className="intro-sub-heading sm-text">
                Alerts displays a short and important message which are used to
                attract user's attention for important information without
                interrupting the user's flow.
              </p>

              <div className="intro-heading lg-text">How to use ?</div>
              <p className="intro-sub-heading sm-text">
                To use Alert component in your projects you just need to include
                className <span>alert</span> in your code.
              </p>
            </section>

            <section className="alert-container sm-text">
              <div className="alert alert-success">
                <span>
                  <i className="fas fa-check-circle"></i>
                </span>
                A success alert example
              </div>
              <div className="alert alert-info">
                <span>
                  <i className="fas fa-info-circle"></i>
                </span>
                An info alert example!!!!
              </div>
              <div className="alert alert-error">
                <span>
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
                A danger alert example
              </div>
              <div className="alert alert-warning">
                <span>
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
                A warning alert example
              </div>
            </section>

            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522alert%2520alert-success%2522%253EA%2520simple%2520success%2520alert.%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520alert-info%2522%253EA%2520simple%2520info%2520alert.%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520alert-error%2522%253EA%2520simple%2520error%2520alert.%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520alert-warning%2522%253EA%2520simple%2520warning%2520alert.%253C%252Fdiv%253E"
              style={{
                height: "300px",
                marginTop: "4rem",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              title="Meta UI"
            ></iframe>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <a href="../avatar/avatar.html">Avatar</a>
              </div>
              <div className="next-page sm-text">
                <a href="../badges/badges.html">Badge</a>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
