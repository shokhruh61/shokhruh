import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <div className='mb-11'>
        <header className='mx-auto flex items-center justify-between py-4 px-6'>
          <div className='text-black focus:underline font-normal text-2xl sm:text-3xl lg:text-4xl'>
            <span className='sm:hidden'>sh</span>
            <span className='sm:hidden'>p</span>
            <span className='hidden sm:block'>Shohruhbekning portfoliosi</span>
          </div>

          {/* Mobile menu button */}
          <div className='sm:hidden'>
            <button
              className='text-black'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>

          {/* Links for desktop */}
          <div className='hidden sm:flex gap-7'>
            <Link
              className='text-black focus:underline font-normal text-[18px]'
              to='/'
            >
              Bosh sahifa
            </Link>
            <Link
              className='text-black font-normal focus:underline text-[18px]'
              to='/loyihalar'
            >
              Loyihalarim
            </Link>
            <Link
              className='text-black focus:underline font-normal text-[18px]'
              to='/haqimda'
            >
              O'zim haqimda
            </Link>
            <Link
              className='text-black focus:underline font-normal text-[18px]'
              to='/blog'
            >
              Blog
            </Link>
          </div>
        </header>

        {/* Mobile menu links */}
        {isMenuOpen && (
          <div className='sm:hidden  bg-white shadow-md'>
            <Link
              className='block text-black font-normal py-2 px-4 text-center'
              to='/'
              onClick={() => setIsMenuOpen(false)}
            >
              <span className='sm:hidden'>Home</span>
              <span className='hidden sm:block'>Bosh sahifa</span>
            </Link>
            <Link
              className='block text-black font-normal py-2 px-4 text-center'
              to='/loyihalar'
              onClick={() => setIsMenuOpen(false)}
            >
              Loyihalarim
            </Link>
            <Link
              className='block text-black font-normal py-2 px-4 text-center'
              to='/haqimda'
              onClick={() => setIsMenuOpen(false)}
            >
              haqimda
            </Link>
            <Link
              className='block text-black font-normal py-2 px-4 text-center'
              to='/blog'
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
