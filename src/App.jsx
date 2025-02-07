import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Blog from './pages/Blog'

function App () {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path='/loyihalar'
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path='/haqimda'
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path='/blog'
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
