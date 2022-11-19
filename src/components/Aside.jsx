import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './avatar/Avatar'
import Alert from './alert/Alert'
import Badges from './badges/Badges'
import Button from './button/Button'
import Card from './cards/Cards'
import Grid from './grid/Grid'
import Image from './image/Image'
import Input from './input/Input'
import List from './list/List'
import Modal from './modal/Modal'
import Navigation from './navigation/Navigation'
import Rating from './rating/Rating'
import Slider from './slider/Slider'
import TextUti from './text-utilities/Text'
import Toast from './toast/Toast'
const Aside = () => {
  return (
    <div>
        <aside>
            <div className="sidebar-main-heading md-text">Get Started</div>
            <div className="sidebar-sub-heading sm-text">
              <Link to="/introduction">Introduction</Link>
            </div>
            <div className="sidebar-main-heading md-text">Components</div>
            <ul className="all-components sm-text">
              <li>
                <Link to='/avatar'>Avatar</Link>
              </li>
              <li>
                <Link to='/alert' className="active">
                  Alert
                </Link>
              </li>
              <li>
                <Link to="/badges">Badge</Link >
              </li>
              <li>
                <Link to="/button">Button</Link >
              </li>
              <li>
                <Link to="/cards">Card</Link >
              </li>
              <li>
                <Link to="/image/">Image</Link >
              </li>
              <li>
                <Link to="/input">Input</Link >
              </li>
              <li>
                <Link to="/text-utilities">
                  Text Utilities
                </Link >
              </li>
              <li>
                <Link to="/list">List</Link >
              </li>
              <li>
                <Link to="/navigation">Navigation</Link >
              </li>
              <li>
                <Link to="/grid">Grid</Link >
              </li>
              <li>
                <Link to="/slider">Slider</Link >
              </li>
              <li>
                <Link to="/rating/">Rating</Link >
              </li>
              <li>
                <Link to="/modal">Modal</Link >
              </li>
              <li>
                <Link to="/toast">Toast</Link >
              </li>
            </ul>
          </aside>
    </div>
  )
}

export default Aside