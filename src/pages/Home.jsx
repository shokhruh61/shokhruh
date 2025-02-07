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
      <div className='flex flex-col sm:flex-row items-center'>
        <div>
          <img
            className='w-[195px] h-[195px] rounded-lg mb-5 sm:mb-0 sm:w-[250px] sm:h-[250px]'
            src={MyPAge}
            alt='my logo images'
          />
        </div>
        <div className='mt-5 sm:mt-0 sm:ml-5 text-center sm:text-left'>
          <h1 className='font-bold text-3xl text-gray-950'>Shohruhbek</h1>
          <h3 className='text-gray-900 font-normal text-2xl '>Front end dasturchi</h3>
          <div className='flex justify-center sm:justify-start gap-3 mt-3'>
            <Link to='https://www.linkedin.com/in/shoxruh-mahmudov/'>
              <img className='w-8 h-8' src={Linkedin} alt='LinkedIn' />
            </Link>
            <Link to='https://t.me/@Makhmudov61'>
              <img className='w-8 h-8' src={Telegram} alt='Telegram' />
            </Link>
            <Link to='https://shohruxmahmudov61@gmail.com'>
              <img className='w-8 h-8' src={Email} alt='Email' />
            </Link>
            <Link to='https://github.com/shokhruh61'>
              <img className='w-8 h-8' src={GitHub} alt='GitHub' />
            </Link>
            <Link to='https://docs.google.com/document/d/1RWa6mrnRYecrgffVFCd7LhWLqbq8D6Tar6bEm3X6XNI/edit?usp=sharing'>
              <img className='w-8 h-8' src={Rezume} alt='Rezyume' />
            </Link>
          </div>
        </div>
      </div>

      {/* Matn va tugmalar */}
      <div className='mt-5 sm:w-[400px] text-center sm:text-left'>
        <p className='mb-5 sm:text-lg animate-slide-top delay-600'>
          Yillar davomida tinchlik bermagan <span className='underline'>muammoni</span> atiga bir
          necha qator kod bilan <span className='underline'>hal qilishimga</span> ishonasizmi?
        </p>
        {/* Tugmalar */}
        <div className='flex justify-center sm:justify-start sm:gap-3'>
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
