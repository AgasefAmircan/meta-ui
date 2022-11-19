import React from "react";
import Navbar from "../Navbar";
import Aside from "../Aside";
import './list.css'
import { Link } from "react-router-dom";
const List = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex-container">
          <Aside />
          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Lists</div>
              <div className="intro-heading sm-text">Spaced List</div>

              <ul className="list">
                <div className="list-title">Categories</div>
                <li>Diary</li>
                <li>Bags</li>
                <li>Painting</li>
                <li>Nameplates</li>
              </ul>

              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cul%2520className%253D%2522list%2522%253E%250A%2509%253Cdiv%2520className%253D%2522list-title%2522%253ECategories%253C%252Fdiv%253E%2520%250A%2509%253Cli%253EDiary%253C%252Fli%253E%250A%2509%253Cli%253EBags%253C%252Fli%253E%250A%2509%253Cli%253EPainting%253C%252Fli%253E%250A%2509%253Cli%253ENameplates%253C%252Fli%253E%250A%253C%252Ful%253E"
                style={{
                  height: "250px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                  marginTop: "2rem",
                  }}
                  title="Meta UI"
              ></iframe>
              <div className="intro-heading sm-text mt-4">Stacked List</div>

              <ul className="list list-stacked">
                <li>One Whatsapp Message</li>
                <li>Instagram Notifation</li>
                <li>New Notifation from Discord</li>
              </ul>

              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cul%2520className%253D%2522list%2520list-stacked%2522%253E%250A%2509%253Cli%253EOne%2520Whatsapp%2520Message%253C%252Fli%253E%250A%2509%253Cli%253EInstagram%2520Notifation%253C%252Fli%253E%250A%2509%253Cli%253ENew%2520Notifation%2520from%2520Discord%253C%252Fli%253E%2520%250A%253C%252Ful%253E"
                style={{
                  height: "230px",
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
                <Link to="/text">
                  Text Utilities
                </Link>
              </div>
              <div className="next-page sm-text">
                <Link to="/navigation">Navigation</Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
