import React from 'react'
import { Link } from 'react-router-dom'
import Aside from '../Aside'
import Navbar from '../Navbar'
import './badges.css'
const Badges = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
			<div className="flex-container">
				<Aside/>

				<div className="content-section">
					<section>
						<div className="intro-heading lg-text">Badges</div>
						<p className="intro-sub-heading sm-text">
							Badges are used to display a notification count, numbers or
							online/offline status information.
						</p>

						<div className="intro-heading lg-text">How to use ?</div>
						<p className="intro-sub-heading sm-text">
							To use Badge component in your projects you just need to include
							className <span>badge</span> in your code.
						</p>

						<div className="intro-heading lg-text">Badges on avatar</div>
						<p className="intro-sub-heading sm-text">
							This badge is used to display the current status of user. We have
							three types of status badges ie
							<span>online | offline | dnd</span> that can be integrated with
							Avatars.
						</p>
					</section>

					<div className="badge-container">
						<div className="badge">
							<img
								src="https://meta-ui.netlify.app/assets/first-avatar.jpg"
								className="avatar avatar-lg"
							/>
							<span className="status-badge online"></span>
						</div>
						<div className="badge">
							<img
								src="https://meta-ui.netlify.app/assets/second-avatar.jpg"
								className="avatar avatar-md"
							/>
							<span className="status-badge offline"></span>
						</div>
						<div className="badge">
							<img
								src="https://meta-ui.netlify.app/assets/first-avatar.jpg"
								className="avatar avatar-sm"
							/>
							<span className="status-badge dnd"></span>
						</div>
					</div>

					<iframe
						src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522badge-container%2522%253E%250A%2509%253Cdiv%2520className%253D%2522badge%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522your-img-path%2522%2520className%253D%2522avatar%2520avatar-lg%2522%2520alt%253D%2522avatar-badge%2522%253E%250A%2509%2509%253Cspan%2520className%253D%2522status-badge%2520online%2522%253E%253C%252Fspan%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
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
						<div className="intro-heading lg-text">Badges on icons</div>
						<p className="intro-sub-heading sm-text">
							This Badge is used to show notifications like shopping cart.
						</p>
					</section>

					<div className="badge-container">
						<div className="badge">
							<i className="fas fa-shopping-cart avatar lg-text"></i>
							<span className="badge-icon offline">16</span>
						</div>

						<div className="badge">
							<i className="fas fa-envelope avatar lg-text"></i>
							<span className="badge-icon dnd">12</span>
						</div>
					</div>

					<iframe
						src="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C1%29&t=seti&wt=none&l=auto&width=774&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=18px&ph=44px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522badge-container%2522%253E%250A%2509%253Cdiv%2520className%253D%2522badge%2522%253E%2509%2509%2509%2509%2509%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520className%253D%2522fas%2520fa-shopping-cart%2520avatar%2520lg-text%2522%253E%253C%252Fi%253E%250A%2509%2509%253Cspan%2520className%253D%2522badge-icon%2520offline%2522%253E10%253C%252Fspan%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
						style={{
							height: '250px',
							border: '0',
							transform: 'scale(1)',
							overflow: 'hidden',
						}}
						title="Meta UI"
					>
					</iframe>

					<footer>
						<div className="previous-page sm-text">
							<i className="fas fa-chevron-left"></i>
							<Link to="/alert">Alert</Link>
						</div>
						<div className="next-page sm-text">
							<Link to="/button">Button</Link>
							<i className="fas fa-chevron-right"></i>
						</div>
					</footer>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Badges