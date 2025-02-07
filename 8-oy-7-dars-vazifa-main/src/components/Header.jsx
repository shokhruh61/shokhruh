import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <ul className='fixed top-0 flex items-center text-white container mx-auto bg-slate-600 p-5 justify-between'>
        <Link className='bg-gray-900 p-2 rounded-md hover:bg-gray-800 active:bg-slate-800 transition-transform active:scale-95' to='/'>Users Page</Link>
        <Link className='bg-gray-900 p-2 rounded-md hover:bg-gray-800 active:bg-slate-800 transition-transform active:scale-95' to='/post'>Post Page</Link>
        <Link className='bg-gray-900 p-2 rounded-md hover:bg-gray-800 active:bg-slate-800 transition-transform active:scale-95' to='/paginate'>Paginate Page</Link>
        <Link className='bg-gray-900 p-2 rounded-md hover:bg-gray-800 active:bg-slate-800 transition-transform active:scale-95' to='/counter'>Counter Page</Link>
        <Link className='bg-gray-900 p-2 rounded-md hover:bg-gray-800 active:bg-slate-800 transition-transform active:scale-95' to='/todo'>Todo Page</Link>
        <Link className='bg-gray-900 p-2 rounded-md hover:bg-gray-800 active:bg-slate-800 transition-transform active:scale-95' to='/modal'>Modal Page</Link>
        <Link className='bg-gray-900 p-2 rounded-md hover:bg-gray-800 active:bg-slate-800 transition-transform active:scale-95' to='/login'>Login Page</Link>
      </ul>
    </>
  )
}

export default Header
