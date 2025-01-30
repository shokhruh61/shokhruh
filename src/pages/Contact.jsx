import React from 'react'
import { Link } from 'react-router-dom'

function Contact () {
  return (
    <div>
      <div className='text-center'>
        <h2 className='text-white text-4xl font-medium -mt-10 mb-11'>
          BIZGA BOG'LANING
        </h2>
        <h3 className='text-white text-4xl font-medium mb-11'>
          TELEFON RAQAMLAR
        </h3>
      </div>

      <Link to="https://t.me/makhmudov616">tel: 998 93 490 6168</Link>
    </div>
  )
}

export default Contact
