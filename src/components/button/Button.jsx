import React from 'react'
import Navbar from '../Navbar'
import Aside from '../Aside'
import './button.css'
import { Link } from 'react-router-dom'
const Button = () => {
  return (
    <div>
        <Navbar/>
        <div className="container button-iframe">
			<div className="flex-container">
				<Aside/>

				<div className="content-section">
					<section>
						<div className="intro-heading lg-text">Buttons</div>
						<p className="intro-sub-heading sm-text">
							Buttons are also called as call to action. We have different types
							of buttons and their states. It allow users to take actions, and
							make choices, with a single tap.
						</p>

						<div className="intro-heading lg-text">How to use ?</div>
						<p className="intro-sub-heading sm-text">
							You may use a tag or button element, you need to add respective
							classNamees, and you are good to go.
						</p>
					</section>

					<section>
						<div className="intro-heading lg-text">Primary Button</div>

						<div className="btn-container">
							<button className="btn btn-primary">Primary</button>
							<button className="btn btn-secondary">Secondary</button>
							<button className="btn btn-danger">Danger</button>
						</div>

						<iframe
							src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522btn-container%2522%253E%250A%2509%253Cbutton%2520className%253D%2522btn%2520btn-primary%2522%253EPrimary%253C%252Fbutton%253E%250A%2509%253Cbutton%2520className%253D%2522btn%2520btn-secondary%2522%253ESecondary%253C%252Fbutton%253E%250A%2509%253Cbutton%2520className%253D%2522btn%2520btn-danger%2522%253EDanger%253C%252Fbutton%253E%250A%253C%252Fdiv%253E"
							style={{
								height: '250px',
								border: '0',
								transform: 'scale(1)',
								overflow: 'hidden',
							}}
							title="Meta UI"
						>
						</iframe>
					</section>

					<section>
						<div className="intro-heading lg-text">Link Button</div>
						<p className="intro-sub-heading sm-text mb-2">
							If you want to link an url to button then use Link Button
						</p>

						<button className="btn btn-link">
							<a href="your-link">Link</a>
						</button>
					</section>
					<iframe
						src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520className%253D%2522btn%2520btn-link%2522%253E%250A%2509%253Ca%2520href%253D%2522your-link%2522%253ELink%253C%252Fa%253E%2509%2520%2520%250A%253C%252Fbutton%253E"
						style={{
							height: '250px',
							border: '0',
							transform: 'scale(1)',
							overflow: 'hidden',
							marginTop: '4rem'
						}}
						title="Meta UI"
					>
					</iframe>
					<section>
						<div className="intro-heading lg-text">Button with icon</div>
						<p className="intro-sub-heading sm-text">
							Icon button is a combination of a standard button with icon inside
							it. Icon button is used to enhance user experience.
						</p>

						<div className="btn-container">
							<button className="btn btn-primary icon-btn">
								<i className="fas fa-save"></i>
								Save
							</button>
							<button className="btn btn-secondary icon-btn">
								<i className="fas fa-trash"></i>
								Delete
							</button>
						</div>
						<iframe
							src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520className%253D%2522btn%2520btn-primary%2520icon-btn%2522%253E%250A%2509%253Ci%2520className%253D%2522fas%2520fa-save%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520Save%250A%253C%252Fbutton%253E"
							style={{
								height: '230px',
								border: '0',
								transform: 'scale(1)',
								overflow: 'hidden',
							}}
							title="Meta UI"
						>
						</iframe>
					</section>
					<section>
						<div className="intro-heading lg-text">Floating Button</div>

						<div className="btn-container">
							<button className="btn-primary btn-float">
								<i className="fas fa-plus"></i>
							</button>
							<button className="btn-secondary btn-float">
								<i className="fas fa-moon"></i>
							</button>
						</div>

						<iframe
							src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520className%253D%2522btn-primary%2520btn-float%2522%253E%2520%2520%250A%2509%253Ci%2520className%253D%2522fas%2520fa-plus%2522%253E%253C%252Fi%253E%250A%253C%252Fbutton%253E"
							style={{
								height: '220px',
								border: '0',
								transform: 'scale(1)',
								overflow: 'hidden',
							}}
							title="Meta UI"
						>
						</iframe>
					</section>

					<footer>
						<div className="previous-page sm-text">
							<i className="fas fa-chevron-left"></i>
							<Link to="/badges">Badge</Link>
						</div>
						<div className="next-page sm-text">
							<Link to="/cards">Card</Link>
							<i className="fas fa-chevron-right"></i>
						</div>
					</footer>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Button