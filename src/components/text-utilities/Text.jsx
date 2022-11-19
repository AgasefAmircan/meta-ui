import React from "react";
import Navbar from "../Navbar";
import Aside from "../Aside";
import './text.css'
import { Link } from "react-router-dom";
const Text = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex-container">
          <Aside />
          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Text Utilities</div>
              <p className="intro-sub-heading sm-text">
                Text Utilities are used to give different sizes to text and also
                to center text.
              </p>
              <div className="intro-heading lg-text">Heading text</div>

              <div className="text-container">
                <h1>H1 - Heading</h1>
                <h2>H2 - Heading</h2>
                <h3>H3 - Heading</h3>
                <h4>H4 - Heading</h4>
                <h5>H5 - Heading</h5>
                <h6>H6 - Heading</h6>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Ch1%253E%2520H1%2520-%2520Heading%2520%253C%252Fh1%253E%2520%2520%250A%253Ch2%253E%2520H2%2520-%2520Heading%2520%253C%252Fh2%253E%250A%253Ch3%253E%2520H3%2520-%2520Heading%2520%253C%252Fh3%253E%250A%253Ch4%253E%2520H4%2520-%2520Heading%2520%253C%252Fh4%253E%250A%253Ch5%253E%2520H5%2520-%2520Heading%2520%253C%252Fh5%253E%250A%253Ch6%253E%2520H6%2520-%2520Heading%2520%253C%252Fh6%253E"
                style=
								{{height: '220px',
								border: 0,
								transform: 'scale(1)',
								overflow: 'hidden',}}
							
                title="Meta UI"
              ></iframe>
              <div className="intro-heading lg-text mt-4">Small Text</div>
              <div className="text-container">
                <p>Paragraph Text</p>
                <span>Span</span>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cp%253E%2520Paragraph%2520Text%2520%253C%252Fp%253E%250A%253Cspan%253E%2520Span%2520%253C%252Fspan%253E"
                style=
								{{height: '150px',
								border: 0,
								transform: 'scale(1)',
								overflow: 'hidden',}}
							
                title="Meta UI"
              ></iframe>
              <div className="intro-heading lg-text mt-4">Gray Text</div>
              <div className="text-container">
                <h6 className="text-gray">This is gray text example.</h6>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Ch6%2520className%253D%2522text-gray%2522%253EThis%2520is%2520gray%2520text%2520example.%253C%252Fh6%253E%2520"
                style=
								{{height: '130px',
								border: 0,
								transform: 'scale(1)',
								overflow: 'hidden',}}
							
                title="Meta UI"
              ></iframe>
              <div className="intro-heading lg-text mt-4">Text align</div>
              <div className="text-container">
                <p className="text-left">This is text left example.</p>
                <p className="text-center">This is text center example.</p>
                <p className="text-right">This is text right example.</p>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cp%2520className%253D%2522text-left%2522%253EThis%2520is%2520text%2520left%2520example.%253C%252Fp%253E%250A%253Cp%2520className%253D%2522text-center%2522%253EThis%2520is%2520text%2520center%2520example.%253C%252Fp%253E%2520%250A%253Cp%2520className%253D%2522text-right%2522%253EThis%2520is%2520text%2520right%2520example.%253C%252Fp%253E"
                style=
								{{height: '160px',
								border: 0,
								transform: 'scale(1)',
								overflow: 'hidden',}}
							
                title="Meta UI"
              ></iframe>
            </section>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <Link to="/input">Input</Link>
              </div>
              <div className="next-page sm-text">
                <Link to="/list">List</Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Text;