import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div>
      <div className=' mb-11'>
        <header className='mx-auto flex items-center justify-between py-4 px-6'>
          <div className='text-black focus:underline  font-normal text-2xl'>
            Shohruhbekning portfoliosi
          </div>
          <div className='flex gap-7'>
            <Link className='text-black focus:underline  font-normal text-[18px]' to='/'>
              Bosh sahifa
            </Link>
            <Link className='text-black font-normal focus:underline text-[18px]' to='/loyihalar'>
              Loyihalarim
            </Link>
            <Link className='text-black focus:underline  font-normal text-[18px]' to='/haqimda'>
              o'zim haqimda
            </Link>
            <Link className='text-black focus:underline  font-normal text-[18px]' to='/blog'>
              Blog
            </Link>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
