
import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

import "../Styles/login.css"

const Login = () => {

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn  = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const userCredential = await signInWithEmailAndPassword(auth, mail, password);

      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("Successfully login in");
      navigate('/checkout'); 

    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  }

  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading......</h5></Col> :
              <Col lg='6' className='m-auto text-center'>
              <h3 className="fw-bold mb-4">
                Login
              </h3>
              <Form className='auth__form' onSubmit={signIn}>
                <FormGroup className='form__group'>
                  <input type="email" placeholder="Enter your mail" value={mail} onChange={e => setMail(e.target.value)}/>
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
                </FormGroup>

                <button type="submit" className="shop__btn auth__btn">Login</button>
                <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
              </Form>
            </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login