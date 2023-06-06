import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products.js';

import Helmet from '../components/Helmet/Helmet.js';
import '../Styles/home.css';

import { Container, Row, Col } from 'reactstrap';

import heroImg from '../assets/images/hero-img.png';
import couterImg from '../assets/images/counter-timer-img.png';

import Services from '../Services/Services.jsx';
import ProductsList from '../components/UI/ProductsList.jsx';
import Clock from '../components/UI/Clock.jsx';


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  // const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => 
  {
    const filterTrendingProducts = products.filter(item => item.category.includes('trending'));
    const filterBestSalesProducts = products.filter(item => item.category.includes('best seller'));
    const filterMobileProducts = products.filter(item => item.category.includes('new'));
    // const filterWirelessProducts = products.filter(item => item.category === 'wireless');
    const filterPopularProducts = products.filter(item => item.category.includes('popular'));

    setTrendingProducts(filterTrendingProducts);
    setBestSalesProducts(filterBestSalesProducts);
    setMobileProducts(filterMobileProducts);
    // setWirelessProducts(filterWirelessProducts);
    setPopularProducts(filterPopularProducts);

  }, []);

  return (
    // Helmet: tạo tên trang trên tab trình duyệt
    <Helmet title={"Home"}> 
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam dolor voluptatem qui iusto, et temporibus dolores nihil nemo dolorum maiores quod? Fugiat, maiores sed. Eos eaque porro expedita voluptate.</p>
                <motion.button whileTap={{ scale: 1.2 }} className='shop__btn'>
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="Banner" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />

      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>
                Trending Products
              </h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className='best__sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>
                Best Sales
              </h2>
            </Col>
            <ProductsList data={bestSalesProducts}/>
          </Row>
        </Container>
      </section>
      
      <section className='timer__count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{ scale: 1.2 }} className='shop__btn store__btn'><Link to='/shop'>Visit Store</Link></motion.button>
            </Col>

            <Col lg='6' md='6' className='text-end counter__img'>
              <img src={couterImg} alt="Timer Count" />
            </Col>

          </Row>
        </Container>
      </section>

      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>
                New Arrivals
              </h2>
            </Col>
            <ProductsList data={mobileProducts}/>
            {/* <ProductsList data={wirelessProducts}/> */}
          </Row>
        </Container>
      </section>

      <section className='popular__category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>
                Popular in Category
              </h2>
            </Col>
            <ProductsList data={popularProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home