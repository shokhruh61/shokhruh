import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MainLayout ({ children }) {
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
