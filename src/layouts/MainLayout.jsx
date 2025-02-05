import React from 'react'
import Header from '../components/Header'

function MainLayout ({ children }) {
  return (
    <div className='max-w-[1100px] mx-auto'>
      <Header></Header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
