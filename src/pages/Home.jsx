import React from 'react'
import { Link } from 'react-router-dom'
import MyPAge from '../assets/images/my.jpg'
import Linkedin from '../assets/images/linkedin.svg'
import Telegram from '../assets/images/telegram.svg'
import GitHub from '../assets/images/github.svg'
import Email from '../assets/images/email.svg'
import Rezume from '../assets/images/rezyum.svg'

function Home () {
  return (
    <div className='container max-w-screen-lg mx-auto px-5'>
      {/* Profil rasmi va ma'lumotlar */}
      <div className='flex items-center'>
        <div>
          <img
            className='w-[195px] h-[195px] rounded-lg mb-5'
            src={MyPAge}
            alt='my logo images'
          />
        </div>
        <div className='ml-5'>
          <h1 className='font-bold text-3xl text-gray-950'>Shohruhbek</h1>
          <h3 className='text-gray-700'>Front end dasturchi</h3>
          {/* Ijtimoiy tarmoqlar */}
          <div className='flex items-center gap-3 mt-3'>
            <Link to='https://www.linkedin.com/in/shoxruh-mahmudov/'>
              <img className='w-8 h-8' src={Linkedin} alt='LinkedIn' />
            </Link>
            <Link to=''>
              <img className='w-8 h-8' src={Telegram} alt='Telegram' />
            </Link>
            <Link to='mailto:shohruxmahmudov61@gmail.com'>
              <img className='w-8 h-8' src={Email} alt='Email' />
            </Link>
            <Link to='https://github.com/shokhruh61'>
              <img className='w-8 h-8' src={GitHub} alt='GitHub' />
            </Link>
            <Link to=''>
              <img className='w-8 h-8' src={Rezume} alt='Rezyume' />
            </Link>
          </div>
        </div>
      </div>

      {/* Matn va tugmalar */}
      <div className='mt-5'>
        <p className='mb-5 sm:text-lg animate-slide-top delay-600'>
          Yillar davomida tinchlik bermagan <strong>muammoni</strong> atiga bir
          necha qator kod bilan <strong>hal qilishimga</strong> ishonasizmi?
        </p>
        {/* Tugmalar */}
        <div className='flex gap-3'>
          <Link
            to='/loyihalar'
            className='bg-gray-900 text-white px-5 py-2 rounded-md'
          >
            Yeсhimlar
          </Link>
          <Link
            to='/loyihalar'
            className='border border-gray-500 px-5 py-2 rounded-md'
          >
            Haqimda
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
