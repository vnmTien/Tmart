import React from 'react'

import { NavLink, Link } from 'react-router-dom'
import './header.css'

import { motion } from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'


import { Container, Row } from 'reactstrap'

const navLink = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nar__wrapper">
            <Link to='/home'><div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>T-mart</h1>
              </div>
            </div></Link>

            {/* Navigation */}
            <div className="navigation">
              <ul className="menu">
                {
                  navLink.map((item,index) => (
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* cart */}
            <div className="nav__icons">

              <span className='fav__icon'>
                <i class="ri-heart-line"></i>
                <span className='badge'>1</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-cart-line"></i>
                <span className='badge'>1</span>
              </span>

              {/* user */}
              <span>
                <motion.img whileTap={{ scale:1.2 }} src={userIcon} alt="user" />
              </span>
            </div>

              {/* mobile menu */}
            <div className="mobile__menu">
              <span><i class="ri-menu-line"></i></span>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header