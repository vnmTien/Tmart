
import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import { auth } from '../firebase.config';
import { storage } from '../firebase.config';
import { db } from '../firebase.config';

import { signOut } from 'firebase/auth'

import { toast } from 'react-toastify';

import "../Styles/login.css"
// import { async } from '@firebase/util';

import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    if (username !== "" && mail !== "" && password !== "") {
      e.preventDefault();
      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, mail, password);

        const user = userCredential.user;

        const storageRef = ref(storage, `images/${Date.now() + username}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on((error) => {
          toast.error(error.message);
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

            // update user profile
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            // store user data in firestore database
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName: username,
              mail,
              photoURL: downloadURL,
            });
          });
        });

        setLoading(false);
        toast.success('Account created');
        console.log(user);
        signOut(auth).then(() => {
          // toast.success('Logged out');
          navigate('/login');
        }).catch(err => {
          toast.error(err.message);
        })
        // navigate('/login');
        

      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          setLoading(false);
          toast.error(`${error.message}`);
        }
        if (error.code === 'auth/weak-password') {
          setLoading(false);
          toast.error(`${error.message}`);
        }
      }
    } else {
      e.preventDefault();
      setLoading(false);
      toast.error('Please fill in the information');
    }
  }


  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading......</h5></Col> :
                <Col lg='6' className='m-auto text-center'>
                  <h3 className="fw-bold mb-4">
                    Signup
                  </h3>
                  <Form className='auth__form' onSubmit={signup}>
                    <FormGroup className='form__group'>
                      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </FormGroup>

                    <FormGroup className='form__group'>
                      <input type="email" placeholder="Enter your mail" value={mail} onChange={(e) => setMail(e.target.value)} />
                    </FormGroup>

                    <FormGroup className='form__group'>
                      <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormGroup>

                    <FormGroup className='form__group'>
                      <input type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </FormGroup>

                    <button type="submit" className="shop__btn auth__btn">Create an Account</button>
                    <p>Already have an account?{" "} <Link to='/login'>Login</Link></p>
                  </Form>
                </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default SignUp