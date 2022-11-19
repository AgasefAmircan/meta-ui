import React from 'react'
import { Link } from 'react-router-dom'
const Main = () => {
  return (
    <div className='container'>
         <main>
        <section className="description xl-text">
          Meta UI is a light weight CSS library which helps you in developing
          fast , responsive and powerful interfaces.
        </section>
        <section className="landing-btn-container sm-text">
          <Link to="/introduction" className="btn btn-primary">
            Get Started
          </Link>
          <a
            href="https://github.com/agasefamircan"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            Github
          </a>
        </section>
      </main>
    </div>
  )
}

export default Main