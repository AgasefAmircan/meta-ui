import React from "react";
import { Link } from "react-router-dom";
import Aside from "../Aside";
import Navbar from "../Navbar";
import Intro from "../Intro";
import Alert from "../alert/Alert";
import './avatar.css'
const Avatar = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="flex-container">
          <Aside/>
          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Avatar</div>
              <p className="intro-sub-heading sm-text">
                Avatar component is used to represent a user, and displays the
                profile picture and we can use initial letters of user in Avatar
                as well.
              </p>

              <div className="intro-heading lg-text">How to use ?</div>
              <p className="intro-sub-heading sm-text">
                To use Avatar component in your projects you just need to
                include className <span>avatar</span> in your <span>img</span>{" "}
                tag.
              </p>

              <div className="img-container">
                <img
                  className="avatar"
                  src="https://meta-ui.netlify.app/assets/first-avatar.jpg"
                  alt="avatar"
                />
                <img
                  className="avatar"
                  src="https://meta-ui.netlify.app/assets/second-avatar.jpg"
                  alt="avatar"
                />
                <img
                  className="avatar"
                  src="https://meta-ui.netlify.app/assets/first-avatar.jpg"
                  alt="avatar"
                />
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%2522your-img-path%2522%2520className%253D%2522avatar%2522%2520alt%253D%2522...%2522%253E"
                style={{height: '250px',
                  border: '0',
                  transform: 'scale(1)',
                  overflow: 'hidden'}}
                title="Meta UI"
              ></iframe>

              <div className="intro-heading lg-text">Avatar Sizes</div>
              <p className="intro-sub-heading sm-text">
                You can change the sizes of avatar by adding className
                <span>avatar-sm</span>, <span>avatar-md</span> or
                <span>avatar-lg</span>
                in the same img tag.
              </p>

              <div className="img-container">
                <img
                  className="avatar avatar-lg"
                  src="https://meta-ui.netlify.app/assets/first-avatar.jpg"
                  alt="avatar"
                />
                <img
                  className="avatar avatar-md"
                  src="https://meta-ui.netlify.app/assets/second-avatar.jpg"
                  alt="avatar"
                />
                <img
                  className="avatar avatar-sm"
                  src="https://meta-ui.netlify.app/assets/first-avatar.jpg"
                  alt="avatar"
                />
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%2522...%2522%2520className%253D%2522avatar%2520avatar-lg%2522%2520alt%253D%2522avatar%2522%253E%250A%253Cimg%2520src%253D%2522...%2522%2520className%253D%2522avatar%2520avatar-md%2522%2520alt%253D%2522avatar%2522%253E%250A%253Cimg%2520src%253D%2522...%2522%2520className%253D%2522avatar%2520avatar-sm%2522%2520alt%253D%2522avatar%2522%253E"
                style=
								{{height: '350px',
								border: '0',
								transform: 'scale(1)',
								overflow: 'hidden'}}
                title="Meta UI"
              ></iframe>
            </section>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <Link to={Intro}>Introduction</Link>
              </div>
              <div className="next-page sm-text">
                <Link to={Alert}>Alert</Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
