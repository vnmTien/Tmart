import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Routers from '../../routers/Routers.js'

const Layout = () => {
  return (
    <>
        <Header/>
            <div>
                <Routers basename="/home"/>
            </div>
        <Footer/>
    </>
  )
}

export default Layout