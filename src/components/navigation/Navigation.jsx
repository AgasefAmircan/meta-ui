import React from "react";
import Navbar from "../Navbar";
import Aside from "../Aside";
import './navigation.css'
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex-container">
          <Aside />
          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Navigation</div>

              <div className="nav-bar">
                <div className="nav-brand-title">
                  <a href="#">Website Name</a>
                </div>
                <div className="nav-center sm-text">
                  <a href="#">Home</a>
                  <a href="#">Products</a>
                </div>
                <div className="nav-links sm-text">
                  <a href="#">
                    <i className="fas fa-search"></i>
                  </a>
                  <a href="#">
                    <i className="far fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                  <a href="#" className="btn btn-nav">
                    Login
                  </a>
                </div>
              </div>

              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522nav-bar%2522%253E%250A%2509%253Cdiv%2520className%253D%2522nav-brand-title%2522%253E%250A%2509%2509%253Ca%2520href%253D%2522%2523%2522%253EWebsite%2520Name%253C%252Fa%253E%250A%2509%253C%252Fdiv%253E%250A%2509%253Cdiv%2520className%253D%2522nav-center%2522%253E%250A%2509%2509%253Ca%2520href%253D%2522%2523%2522%253EHome%253C%252Fa%253E%250A%2509%2509%253Ca%2520href%253D%2522%2523%2522%253EProducts%253C%252Fa%253E%250A%2509%253C%252Fdiv%253E%250A%2509%253Cdiv%2520className%253D%2522nav-links%2522%253E%250A%2509%2509%253Ca%2520href%253D%2522%2523%2522%253E%253Ci%2520className%253D%2522fas%2520fa-search%2522%253E%253C%252Fi%253E%253C%252Fa%253E%250A%2509%2509%253Ca%2520href%253D%2522%2523%2522%253E%253Ci%2520className%253D%2522far%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fa%253E%250A%2509%2509%253Ca%2520href%253D%2522%2523%2522%253E%253Ci%2520className%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fa%253E%250A%2509%2509%253Ca%2520href%253D%2522%2523%2522%2520className%253D%2522btn%2520btn-nav%2522%253ELogin%253C%252Fa%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{
                  height: "400px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                  marginTop: "2rem",
                  }}
                  title="Meta UI"
              ></iframe>
            </section>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <Link to="/list">List</Link>
              </div>
              <div className="next-page sm-text">
                <Link to="/grid">Grid</Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
