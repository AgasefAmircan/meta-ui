import React from "react";
import Navbar from "../Navbar";
import Aside from "../Aside";
import "./toast.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toast = () => {
  const showToastMessage = () => {
    toast.warning(
      "Warning Notification !",
      {
        position: toast.POSITION.TOP_RIGHT,
      },
    );
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex-container">
          <Aside />
          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Toast</div>
              <div className="intro-sub-heading md-text">
                Toast component is a message that appears at the bottom of the
                interface to provide quick, at-a-glance feedback on the outcome
                of an action.
              </div>

              <button
                className="btn btn-primary btn-toast"
                onClick={showToastMessage}
              >
                Show Toast
                <ToastContainer autoClose={2000} />
              </button> 
              <div className="toast">
                <span className="toast-msg">This is an example of Toast</span>
                <button className="toast-close">Ok</button>
              </div>
            </section>
            <section className="mt-4">
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=678&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520className%253D%2522btn%2520btn-primary%2520btn-toast%2522%253EShow%2520Toast%253C%252Fbutton%253E%250A%253Cdiv%2520className%253D%2522toast%2522%253E%250A%2509%253Cspan%2520className%253D%2522toast-msg%2522%253EThis%2520is%2520an%2520example%2520of%2520Toast%253C%252Fspan%253E%250A%2509%253Cbutton%2520className%253D%2522toast-close%2522%253EOk%253C%252Fbutton%253E%250A%253C%252Fdiv%253E"
                style={{
                  width: "678px",
                  height: "186px",
                  border: 0,
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                title="Meta UI"
              ></iframe>

              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=678&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=const%2520btnToast%2520%253D%2520document.querySelector%28%2522.btn-toast%2522%29%253B%250Aconst%2520toast%2520%253D%2520document.querySelector%28%2522.toast%2522%29%253B%250Aconst%2520toastClose%2520%253D%2520document.querySelector%28%2522.toast-close%2522%29%253B%250A%250Aconst%2520showToast%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509console.log%28%2522show%2522%29%253B%250A%2509toast.classNameList.add%28%2522show-toast%2522%29%253B%250A%2509setTimeout%28%28%29%2520%253D%253E%2520%257B%250A%2509%2509toast.classNameList.remove%28%2522show-toast%2522%29%253B%250A%2509%257D%252C%25202000%29%253B%250A%257D%253B%250A%250Aconst%2520hideToast%2520%253D%2520%28%29%2520%253D%253E%2520%257B%250A%2509toast.classNameList.remove%28%2522show-toast%2522%29%253B%250A%257D%253B%250A%250AtoastClose.addEventListener%28%2522click%2522%252C%2520hideToast%29%253B%250AbtnToast.addEventListener%28%2522click%2522%252C%2520showToast%29%253B"
                style={{
                  width: "678px",
                  height: "428",
                  border: 0,
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                title="Meta UI"
              ></iframe>
            </section>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <Link to="/modal">Modal</Link>
              </div>
              <div className="next-page sm-text">
                <Link to="/introduction">Intorduction</Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Toast;
