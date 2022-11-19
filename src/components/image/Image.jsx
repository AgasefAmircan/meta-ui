import React from 'react'
import Navbar from '../Navbar'
import Aside from '../Aside'
import './image.css'
import { Link } from 'react-router-dom'
export const Image = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
			<div className="flex-container">
				<Aside/>
				<div className="content-section">
					<section>
						<div className="intro-heading lg-text">Image</div>
						<p className="intro-sub-heading sm-text">
							Image Components are used to dsiplay Images on websites.
						</p>
						<div className="intro-heading lg-text">Responsive Image</div>
						<p className="intro-sub-heading sm-text">
							Responsive Images can be used to fit the parent's width. They
							expand upto the width of the container they are in. You just need
							to add image-responsive to the make image responsive.
						</p>
						<div>
							<img
								src="https://meta-ui.netlify.app/assets/illustration-hero.svg"
								alt="img-example"
								className="image-responsive"
							/>
						</div>
						<div className="intro-heading lg-text mt-4">Round Image</div>
						<p className="intro-sub-heading sm-text">
							You just need to add image-round to the make image rounded.
						</p>
						<div>
							<img
								src="https://meta-ui.netlify.app/assets/illustration-hero.svg"
								alt="img-example"
								className="image-round"
							/>
						</div>
					</section>

					<footer>
						<div className="previous-page sm-text">
							<i className="fas fa-chevron-left"></i>
							<Link to="/cards">Card</Link>
						</div>
						<div className="next-page sm-text">
							<Link to="/input">Input</Link>
							<i className="fas fa-chevron-right"></i>
						</div>
					</footer>
				</div>
			</div>
		</div>
    </div>
  )
}