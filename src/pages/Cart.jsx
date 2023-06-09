import React from 'react'
import '../Styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import Commonsection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);


  return (
    <Helmet title="Cart">
      <Commonsection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {
                cartItems.length === 0 ?
                  (<h2 className='fs-4 text-center'>No item added to the cart </h2>) : (
                    <table className='table bordered'>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Delete</th>
                        </tr>
                      </thead>

                      <tbody>
                        {
                          cartItems.map((item, index) => (
                            <Tr item={item} key={index} />
                          ))
                        }
                      </tbody>
                    </table>
                  )
              }

            </Col>

            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>
                  Subtotal
                  <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
              </div>
              <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
              <div>
                <button className='shop__btn w-100 '><Link to='/checkout'>Checkout</Link></button>
                <button className='shop__btn w-100 mt-3'><Link to='/shop'>Continue Shopping</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({ item }) => {
  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }
  const decreaseProduct = () => {
    dispatch(cartActions.decreaseItem(item.id))
  }
  const addProduct = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }))
  }
  return (
    <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>
        <motion.button onClick={decreaseProduct} whileTap={{ scale: 1.2 }} class='ri-subtract-line margin-right-5 '></motion.button>
        {item.quantity}
        <motion.button onClick={addProduct} whileTap={{ scale: 1.2 }} class='ri-add-line margin-left-5 '></motion.button>
      </td>
      <td><motion.i onClick={deleteProduct} whileTap={{ scale: 1.2 }} class="ri-delete-bin-line align-items-center"></motion.i></td>
    </tr>
  )
}

export default Cart