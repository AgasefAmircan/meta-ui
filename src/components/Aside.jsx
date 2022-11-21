import React from 'react'
import { NavLink } from 'react-router-dom'
// import Avatar from './avatar/Avatar'
// import Alert from './alert/Alert'
// import Badges from './badges/Badges'
// import Button from './button/Button'
// import Card from './cards/Cards'
// import Grid from './grid/Grid'
// import Image from './image/Image'
// import Input from './input/Input'
// import List from './list/List'
// import Modal from './modal/Modal'
// import Navigation from './navigation/Navigation'
// import Rating from './rating/Rating'
// import Slider from './slider/Slider'
// import TextUti from './text-utilities/Text'
// import Toast from './toast/Toast'
const Aside = () => {
  return (
    <div>
        <aside>
            <div className="sidebar-main-heading md-text">Get Started</div>
            <div className="sidebar-sub-heading sm-text">
              <NavLink to="/introduction">Introduction</NavLink>
            </div>
            <div className="sidebar-main-heading md-text">Components</div>
            <ul className="all-components sm-text">
              <li>
                <NavLink to='/avatar' >Avatar</NavLink>
              </li>
              <li>
                <NavLink to='/alert'>
                  Alert
                </NavLink>
              </li>
              <li>
                <NavLink to="/badges">Badge</NavLink >
              </li>
              <li>
                <NavLink to="/button">Button</NavLink >
              </li>
              <li>
                <NavLink to="/cards">Card</NavLink >
              </li>
              <li>
                <NavLink to="/image/">Image</NavLink >
              </li>
              <li>
                <NavLink to="/input">Input</NavLink >
              </li>
              <li>
                <NavLink to="/text-utilities">
                  Text Utilities
                </NavLink >
              </li>
              <li>
                <NavLink to="/list">List</NavLink >
              </li>
              <li>
                <NavLink to="/navigation">Navigation</NavLink >
              </li>
              <li>
                <NavLink to="/grid">Grid</NavLink >
              </li>
              <li>
                <NavLink to="/slider">Slider</NavLink >
              </li>
              <li>
                <NavLink to="/rating">Rating</NavLink >
              </li>
              <li>
                <NavLink to="/modal">Modal</NavLink >
              </li>
              <li>
                <NavLink to="/toast">Toast</NavLink >
              </li>
            </ul>
          </aside>
    </div>
  )
}

export default Aside