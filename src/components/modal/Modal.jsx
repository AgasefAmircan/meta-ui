import React from "react";
import Navbar from "../Navbar";
import Aside from "../Aside";
import { Link } from "react-router-dom";
import "./modal.css";
const Modal = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex-container">
          <Aside />
          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Modal</div>
              <div className="intro-sub-heading md-text">
                Modal component provides a solid foundation for creating
                dialogs, popovers or lightboxes.
              </div>

              <div className="modal-container">
                <h6 className="md-text">Are you sure you want to delete ?</h6>
                <div className="modal-btn-container">
                  <button className="btn btn-primary">Yes</button>
                  <button className="btn btn-secondary">No</button>
                </div>
              </div>

              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=678&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522modal-container%2522%253E%250A%2520%2520%2520%253Ch6%253EAre%2520you%2520sure%2520you%2520want%2520to%2520delete%2520%253F%253C%252Fh6%253E%250A%2520%250A%2509%253Cdiv%2520className%253D%2522modal-btn-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-primary%2522%253EYes%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-secondary%2522%253ENo%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{
                  width: "678px",
                  height: "259px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                  marginTop: "2rem",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </section>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <Link to="/rating">Rating</Link>
              </div>
              <div className="next-page sm-text">
                <Link to="/toast">Toast</Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
