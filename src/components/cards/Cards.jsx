import React from "react";
import Navbar from "../Navbar";
import Aside from "../Aside";
import { Link } from "react-router-dom";
import './cards.css'
const Cards = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="flex-container">
          <Aside />

          <div className="content-section">
            <section>
              <div className="intro-heading lg-text">Cards</div>
              <p className="intro-sub-heading sm-text">
                The card component can contain a variety of content, including a
                heading, image, content and buttons.
              </p>

              <div className="intro-heading lg-text">How to use ?</div>
              <p className="intro-sub-heading sm-text">
                We have six different types of cards, you just need to copy the
                code of that card which you want to use.
              </p>

              <div className="intro-heading lg-text">Text only card</div>
              <div className="card text-card">
                <p className="sm-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque aliquam ex, ullam aut maxime quis nisi. Maxime, hic
                  molestias porro, aperiam amet aliquid quisquam omnis
                  blanditiis quos sapiente dolores eos.
                </p>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2522%253E%250A%2520%2520%253Cp%253E%2520text%2520here%2520%253C%252Fp%253E%2520%2520%2520%250A%253C%252Fdiv%253E"
                style={{
                  width: "303px",
                  height: "200px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                  marginTop: "2rem",
                  marginBottom: "4rem",
                }}
                title="Meta UI"
              ></iframe>

              <div className="intro-heading lg-text">Card with shadow</div>
              <p className="intro-sub-heading sm-text">
                To add shadow to any card add card-shadow className.
              </p>
              <div className="card card-shadow">
                <img
                  src="https://meta-ui.netlify.app/assets/illustration-hero.svg"
                  alt="card-example"
                />
                <h1>Card Shadow</h1>
                <p className="sm-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates ut pariatur vel quod maxime necessitatibus!
                </p>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520card-shadow%2522%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fyour-img%2522%2520alt%253D%2522card-example%2522%253E%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%253Ch1%253ECard%2520shadow%2520example%253C%252Fh1%253E%250A%2509%253Cp%253E%2520Text%2520Here%2520%253C%252Fp%253E%250A%253C%252Fdiv%253E"
                style={{
					height: "230px",
					border: "0",
					transform: "scale(1)",
					overflow: "hidden",
					marginTop: "2rem",
					marginBottom: "4rem",
				  }}
				  title="Meta UI"
              ></iframe>

              <div className="intro-heading lg-text">
                Card with text overlay
              </div>
              <p className="intro-sub-heading sm-text">
                To overlay text over other items, you need to add text-overlay
                className to the text which you want to overlay.
              </p>
              <div className="card card-overlay card-shadow">
                <img
                  src="https://meta-ui.netlify.app/assets/illustration-hero.svg"
                  alt="card-example"
                />
                <h1 className="text-overlay">Card Overlay</h1>
                <p className="sm-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates ut pariatur vel quod maxime necessitatibus!
                </p>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520card-overlay%2522%253E%250A%2509%253Cimg%2520src%253D%2522your-img%2522%2520alt%253D%2522card-example%2522%252F%253E%250A%2509%253Ch1%2520className%253D%2522text-overlay%2522%253ECard%2520Overlay%253C%252Fh1%253E%250A%2509%253Cp%253E%2520text%2520here%2520%253C%252Fp%253E%250A%253C%252Fdiv%253E"
                style={{
					height: "250px",
					border: "0",
					transform: "scale(1)",
					overflow: "hidden",
					marginTop: "2rem",
					marginBottom: "4rem",
				  }}
				  title="Meta UI"
              ></iframe>

              <div className="intro-heading lg-text">Horizontal Card</div>
              <p className="intro-sub-heading sm-text">
                To create a horizontal card add className card-horizontal to the
                card.
              </p>
              <div className="card-horizontal card-shadow">
                <img
                  src="https://meta-ui.netlify.app/assets/illustration-hero.svg"
                  alt="card-example"
                />
                <div>
                  <h1 className="md-text">Horizontal card</h1>
                  <p className="sm-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit, laudantium.
                  </p>
                </div>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card-horizontal%2522%253E%250A%2509%253Cimg%2520src%253D%2522your-img%2522%2520alt%253D%2522card-example%2522%252F%253E%250A%2509%253Cdiv%253E%250A%2509%2509%253Ch1%253E%2520Horizontal%2520card%253C%252Fh1%253E%250A%2509%2509%253Cp%253E%250A%2509%2509Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%250A%2509%2509Velit%252C%2520laudantium.%250A%2509%2509%253C%252Fp%253E%250A%2509%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{
					height: "320px",
					border: "0",
					transform: "scale(1)",
					overflow: "hidden",
					marginTop: "2rem",
					marginBottom: "4rem",
				  }}
				  title="Meta UI"
              ></iframe>

              <div className="intro-heading lg-text">Card with badges</div>
              <p className="intro-sub-heading sm-text">
                To create a card with badge add className card-badge to the
                parent div and add className badge-text to any tag or text which
                you want to use as a badge.
              </p>
              <div className="card card-badge card-shadow">
                <img
                  src="https://meta-ui.netlify.app/assets/diary5.jpg"
                  alt="card-example"
                />
                <span className="badge-text sm-text">Music</span>
                <h1>Card Badge</h1>
                <p className="sm-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates ut pariatur vel quod maxime necessitatibus!
                </p>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520card-badge%2522%253E%250A%2509%253Cimg%2520src%253D%2522your-img%2522%2509alt%253D%2522card-example%2522%252F%253E%250A%2509%253Cspan%2520className%253D%2522badge-text%2522%253EMusic%253C%252Fspan%253E%250A%2509%253Ch1%253ECard%2520Badge%253C%252Fh1%253E%250A%2509%253Cp%253E%250A%2509%2509Lorem%2520ipsum%2520dolor%252C%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520%250A%2509%2509Voluptates%2520ut%2520pariatur%2520vel%2520quod%2520maxime%2520necessitatibus%21%250A%2509%253C%252Fp%253E%250A%2520%253C%252Fdiv%253E"
                style={{
					height: "300px",
					border: "0",
					transform: "scale(1)",
					overflow: "hidden",
					marginTop: "2rem",
					marginBottom: "4rem",
				  }}
				  title="Meta UI"
              ></iframe>

              <div className="intro-heading lg-text">Card with dismiss</div>
              <p className="intro-sub-heading sm-text">
                To create a card with dismiss icon add className card-dismiss to
                the parent div and add className dismiss to any icon which you
                want to use as a dismiss icon.
              </p>
              <div className="card card-dismiss card-shadow">
                <img
                  src="https://meta-ui.netlify.app/assets/illustration-hero.svg"
                  alt="card-example"
                />
                <span className="dismiss md-text">
                  <i className="far fa-times-circle"></i>
                </span>
                <h1>Card Dismiss</h1>
                <p className="sm-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates ut pariatur vel quod maxime necessitatibus!
                </p>
              </div>
              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520card-dismiss%2522%253E%250A%2509%253Cimg%2520src%253D%2522your-img%2522%2509alt%253D%2522card-example%2522%252F%253E%250A%2509%253Cspan%2520className%253D%2522dismiss%2522%253E%2520your-icon%2520%253C%252Fspan%253E%250A%2509%253Ch1%253ECard%2520Dismiss%253C%252Fh1%253E%250A%2509%253Cp%253E%250A%2509%2509Lorem%2520ipsum%2520dolor%252C%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520%250A%2509%2509Voluptates%2520ut%2520pariatur%2520vel%2520quod%2520maxime%2520necessitatibus%21%250A%2509%253C%252Fp%253E%250A%2520%253C%252Fdiv%253E"
                style={{
					height: "300px",
					border: "0",
					transform: "scale(1)",
					overflow: "hidden",
					marginTop: "2rem",
					marginBottom: "4rem",
				  }}
				  title="Meta UI"
              ></iframe>

              <div className="intro-heading lg-text">E-commerce Card</div>
              <div className="card product-card card-shadow">
                <a href="#" className="product-card-link">
                  <img
                    src="https://meta-ui.netlify.app/assets/diary5.jpg"
                    className="product-card-image"
                    alt="paintings"
                  />
                </a>

                <div className="price-container text-center">
                  <p className="item-name">Sun Painting</p>
                  <span className="currency">Rs 999.00</span>
                </div>

                <a href="#">
                  <button className="btn btn-primary">Add to cart</button>
                </a>
              </div>

              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2520product-card%2520card-shadow%2522%253E%250A%2509%253Ca%2520href%253D%2522%2523%2522%2520className%253D%2522product-card-link%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522..%252F..%252Fassets%252Fdiary5.jpg%2522%2520className%253D%2522product-card-image%2522%2520alt%253D%2522paintings%2522%252F%253E%2520%250A%2520%2520%2520%2520%253C%252Fa%253E%250A%250A%2509%253Cdiv%2520className%253D%2522price-container%2520text-center%2522%253E%250A%2509%2509%253Cp%2520className%253D%2522item-name%2522%253ESun%2520Painting%253C%252Fp%253E%250A%2509%2509%253Cspan%2520className%253D%2522currency%2522%253ERs%2520999.00%253C%252Fspan%253E%250A%2509%253C%252Fdiv%253E%250A%250A%2509%253Ca%2520href%253D%2522%2523%2522%253E%250A%2509%2509%253Cbutton%2520className%253D%2522btn%2520btn-primary%2522%253EAdd%2520to%2520cart%253C%252Fbutton%253E%250A%2509%253C%252Fa%253E%250A%253C%252Fdiv%253E"
                style={{
					height: "400px",
					border: "0",
					transform: "scale(1)",
					overflow: "hidden",
					marginTop: "2rem",
				  }}
				  title="Meta UI"
              ></iframe>
              <div className="intro-heading lg-text mt-4">
                E-commerce Card Horizontal
              </div>
              <div className="card-horizontal product-card-horizontal card-shadow">
                <img src="https://meta-ui.netlify.app/assets/diary5.jpg" alt="card-example" />
                <div className="card-content">
                  <h1>Folk Dance Painting</h1>
                  <h6>Rs 999.00</h6>
                  <div className="product-quantity-container">
                    <span>Quantity:</span>
                    <div className="product-quantity">
                      <button className="product-quantity-decrease">-</button>
                      <input type="text" className="product-quantity-input" />
                      <button className="product-quantity-increase">+</button>
                    </div>
                  </div>
                  <a href="#">
                    <button className="btn btn-primary">
                      Move to Wishlist
                    </button>
                  </a>
                </div>
              </div>

              <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card-horizontal%2520product-card-horizontal%2520card-shadow%2522%253E%250A%2509%253Cimg%2520src%253D%2522..%252F..%252Fassets%252Fdiary5.jpg%2522%2520alt%253D%2522card-example%2522%2520%252F%253E%250A%2509%253Cdiv%2520className%253D%2522card-content%2522%253E%250A%2509%2509%253Ch1%253EFolk%2520Dance%2520Painting%253C%252Fh1%253E%250A%2509%2509%253Ch6%253ERs%2520999.00%253C%252Fh6%253E%250A%2509%2509%253Cdiv%2520className%253D%2522product-quantity-container%2522%253E%250A%2509%2509%2509%253Cspan%253EQuantity%253A%253C%252Fspan%253E%250A%2509%2509%2509%253Cdiv%2520className%253D%2522product-quantity%2522%253E%250A%2509%2509%2509%2509%253Cbutton%2520className%253D%2522product-quantity-decrease%2522%253E-%253C%252Fbutton%253E%250A%2509%2509%2509%2509%253Cinput%2520type%253D%2522text%2522%2520className%253D%2522product-quantity-input%2522%2520%252F%253E%250A%2509%2509%2509%2509%253Cbutton%2520className%253D%2522product-quantity-increase%2522%253E%252B%253C%252Fbutton%253E%250A%2509%2509%2509%253C%252Fdiv%253E%250A%2509%2509%253C%252Fdiv%253E%250A%2509%2509%253Ca%2520href%253D%2522%2523%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-primary%2522%253EMove%2520to%2520Wishlist%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style={{
					height: "428px",
					border: "0",
					transform: "scale(1)",
					overflow: "hidden",
					marginTop: "2rem",
					marginBottom: "4rem",
				  }}
				  title="Meta UI"
              ></iframe>
            </section>

            <footer>
              <div className="previous-page sm-text">
                <i className="fas fa-chevron-left"></i>
                <Link to="/button">Button</Link>
              </div>
              <div className="next-page sm-text">
                <Link to="/image">Image</Link>
                <i className="fas fa-chevron-right"></i>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
