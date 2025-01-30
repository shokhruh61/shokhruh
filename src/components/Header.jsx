import React from 'react'
import Logo from '../assets/mainlogo.png'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div>
      <div className='bg-black mb-11 shadow-md'>
        <header className=' max-w-[1440px] mx-auto flex items-center justify-between py-4 px-6'>
          <div>
            <img
              className='rounded-[50%] cursor-pointer w-14 h-14 shadow-md'
              src={Logo}
              alt='main logo images'
            />
          </div>
          <div className='flex gap-7'>
            <Link className='text-white font-normal text-[18px]' to='/'>
              Home
            </Link>
            <Link className='text-white font-normal text-[18px]' to='/about'>
              About
            </Link>
            <Link className='text-white font-normal text-[18px]' to='/contact'>
              Contact
            </Link>
            <Link className='text-white font-normal text-[18px]' to='/services'>
              Services
            </Link>
          </div>
          <div className='flex gap-5'>
            <Link className='bg-green-500 py-2 px-3 rounded-md' to='/Login'>
              Login
            </Link>
            <Link className='bg-blue-500 py-2 px-3 rounded-md' to='/Register'>
              Register
            </Link>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
