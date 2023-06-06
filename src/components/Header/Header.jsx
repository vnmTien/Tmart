import React, { useRef, useEffect } from 'react'

import { NavLink, Link, useNavigate } from 'react-router-dom'
import './header.css'

import { motion } from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

import { toast } from 'react-toastify'
import { Container, Row} from 'reactstrap'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'

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

  const headerRef = useRef(null);

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const profileActionsRef = useRef(null); 

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
          ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    })
  };

  const logout = () => {
  
    signOut(auth).then(() => {
      toast.success('Logged out');
      navigate('/home');
    }).catch(err => {
      toast.error(err.message);
    })
  }

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  },[]);

  const profileActionsToggle = () => profileActionsRef.current.classList.toggle('show__profile-actions');

  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  const navigateToCart = () => {
    navigate("/cart");
  }

  return (
    <header className='header' ref={headerRef}>
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
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
              <span className="cart__icon" onClick={navigateToCart}>
                <i class="ri-shopping-cart-line"></i>
                <span className='badge'>{totalQuantity}</span>
              </span>

              {/* user */}
              <div className='profile'>
                <motion.img 
                  whileTap={{ scale:1.2 }} 
                  src={ currentUser ? currentUser.photoURL : userIcon } 
                  alt={ currentUser ? currentUser.displayName : 'user' }  
                  onClick={profileActionsToggle}
                  />

                <div className='profile__actions' ref={profileActionsRef} onClick={profileActionsToggle}>
                  {
                    currentUser ? ( <span onClick={logout}>Logout</span> )
                    :
                    ( <div className='d-flex align-items-center justify-content-center flex-column'>
                      <Link to='/signup'>Singup</Link>
                      <Link to='/login'>Login</Link>
                    </div> )
                  }
                </div>
              </div>

              {/* mobile menu */}
              <div className="mobile__menu">
                <span onClick={menuToggle}><i class="ri-menu-line"></i></span>
              </div>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header