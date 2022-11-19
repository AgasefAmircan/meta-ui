import React from "react";
import Navbar from "../Navbar";
import Aside from "../Aside";
import './rating.css'
import { Link } from "react-router-dom";
const Rating = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex-container">
          <Aside />
          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Rating</div>
              <p className="intro-sub-heading sm-text">
                Ratings provide insight regarding others' opinions and
                experiences, and can allow the user to submit a rating of their
                own.
              </p>

              <div className="intro-heading lg-text">How to use ?</div>
              <p className="intro-sub-heading sm-text">
                To use Rating component in your projects you just need to
                include className <span>rating</span> in your code.
              </p>
            </section>

            <section className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </section>
            <iframe
              src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Csection%2520className%253D%2522rating%2522%253E%250A%2509%253Ci%2520className%253D%2522fas%2520fa-star%2522%253E%253C%252Fi%253E%250A%2509%253Ci%2520className%253D%2522fas%2520fa-star%2522%253E%253C%252Fi%253E%250A%2509%253Ci%2520className%253D%2522fas%2520fa-star%2522%253E%253C%252Fi%253E%250A%2509%253Ci%2520className%253D%2522fas%2520fa-star%2522%253E%253C%252Fi%253E%250A%2509%253Ci%2520className%253D%2522fas%2520fa-star%2522%253E%253C%252Fi%253E%250A%253C%252Fsection%253E"
              style=
							{{width: '456px',
							height: '240px',
							border: '0',
							transform: 'scale(1)',
							overflow: 'hidden',
							marginTop: '2rem',}}
						
              title="Meta UI"
            ></iframe>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <Link to="/slider">Slider</Link>
              </div>
              <div className="next-page sm-text">
                <Link to="/modal">Modal</Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rating;