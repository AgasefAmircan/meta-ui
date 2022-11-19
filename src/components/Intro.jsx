import React from "react";
import { Link } from "react-router-dom";
import Aside from "./Aside";
import Navbar from './Navbar'
const Intro = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="flex-container">
         <Aside/>
        <div className="content-section">
          <section>
            <div className="intro-heading lg-text">Build Faster with Meta UI</div>
            <p className="intro-sub-heading sm-text">
              Meta UI is a light weight CSS library which helps you in
              developing fast , responsive and powerful interfaces.
            </p>
            <div className="intro-heading lg-text">How to use ?</div>
            <p className="intro-sub-heading sm-text">
              To use all the components in your projects just copy the link
              given below and paste it in head tag.
            </p>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fmeta-ui.netlify.app%252Fstyle.css%2522%253E"
              title="MetaUI"
              style={{height:'250px'}}
            ></iframe>
          </section>
          <footer>
            <div className="previous-page sm-text"></div>
            <div className="next-page sm-text">
              <Link to="/avatar">Avatar</Link>
              <i className="fas fa-chevron-right"></i>
            </div>
          </footer>
        </div>
      </div>
    </div>
    </>
  );
};

export default Intro;
