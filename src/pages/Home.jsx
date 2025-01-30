import React from 'react'
import Myimg from '../assets/images.png'
function Home () {
  return (
    <div>
      <div className='flex items-center mb-20npm u'>
        <div className='flex items-center justify-between p-4'>
          <p>
            Men Shoxruhman, frontend dasturchi sifatida React va Tailwind <br />
            CSS'dan foydalanib zamonaviy va funksional veb-loyihalar yaratishga{' '}
            <br />
            ixtisoslashganman. Mening maqsadim har doim foydalanuvchilar uchun{' '}
            <br />
            qulay, estetik va yuqori sifatli interfeyslarni taqdim etishdir.
            Bundan tashqari, <br /> men Spotify uslubidagi loyihalar va
            interaktiv komponentlar ustida ishlashga <br /> qiziqaman.
            Shuningdek, dizayndan kodgacha bo‘lgan jarayonni optimallashtirishga{' '}
            <br /> va samaradorlikni oshirishga intilaman. Doimiy ravishda
            o‘rganish va rivojlanishni maqsad qilganman.
          </p>
          <img
            className=' -mt-8 ml-24 w-[900px] h-[350px]'
            src={Myimg}
            alt='mening logotip'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
