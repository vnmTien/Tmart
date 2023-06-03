import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

import { Container, Col, Row, Form, FormGroup } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet.js';
import CommonSection from '../components/UI/CommonSection.jsx';

import '../Styles/checkout.css';

const CheckOut = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const orderedSucceed = (e) => {
    if (name === '' && mail === '' && numberPhone === '' && address === '' && city === '' && postalCode === '' && country === '') {
      toast.error('You have not filled in your shipping information.');
      e.preventDefault();
    }
    else if (totalQty === 0) {
      toast.error('You have not selected a product yet');
      navigate('/shop');
    }
    else {
      toast.success('You ordered succeed. Your order will be processed as soon as possible.');
      navigate('/shop');
      totalQty = 0;
      totalAmount = 0; 
    }
  };


  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Enter your name' value={name} onChange={e => setName(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='email' placeholder='Enter your mail' value={mail} onChange={e => setMail(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='number' placeholder='Phone number' value={numberPhone} onChange={e => setNumberPhone(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Street address' value={address} onChange={e => setAddress(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='City' value={city} onChange={e => setCity(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Postal code' value={postalCode} onChange={e => setPostalCode(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type='text' placeholder='Country' value={country} onChange={e => setCountry(e.target.value)} />
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'>
              <div className="checkout__cart">
                <h6>
                  Total Quantity: <span>{totalQty} products</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                    </span>
                    <span>$0</span>
                </h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>
                <button className='shop__btn auth__btn w-100 fw-bold' onClick={orderedSucceed}>Place an order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CheckOut