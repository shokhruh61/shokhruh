import React from 'react'
import Logo from '../assets/mainlogo.png'
const Footer = () => {
  return (
    <footer className='bg-gray-900  text-white py-10 px-5'>
      <div className='max-w-[1440px] flex items-center justify-between mx-auto  grid-cols-1 md:grid-cols-4 gap-8'>
        <div>
          <img
            className=' cursor-pointer shadow-md w-14 h-14 rounded-[50%] mb-4'
            src={Logo}
            alt='main logo images'
          />
          <p className='text-gray-400'>
            Biz sizga sifatli mahsulot va xizmatlarni <br /> taklif etamiz.
            Doimiy ravishda <br /> yangi imkoniyatlarni yaratishda davom etamiz.
          </p>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-4'>Tezkor Havolalar</h3>
          <ul className='space-y-2'>
            <li>
              <a
                href='/about'
                className='hover:text-gray-300 transition-colors duration-300'
              >
                Biz haqimizda
              </a>
            </li>
            <li>
              <a
                href='/services'
                className='hover:text-gray-300 transition-colors duration-300'
              >
                Xizmatlar
              </a>
            </li>
            <li>
              <a
                href='/blog'
                className='hover:text-gray-300 transition-colors duration-300'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='hover:text-gray-300 transition-colors duration-300'
              >
                Bog'lanish
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-4'>Ijtimoiy Tarmoqlar</h3>
          <ul className='flex flex-col items-center gap-2 space-x-4'>
            <li>
              <a
                href='https://facebook.com/Shohruh-Makhmudov'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-300 transition-colors duration-300'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://x.com/ShohruxMah60829'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-300 transition-colors duration-300'
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/makhmudov.2007/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-300 transition-colors duration-300'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-300 transition-colors duration-300'
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center text-gray-400 mt-10'>
        &copy; 2025 BrandName. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  )
}

export default Footer
