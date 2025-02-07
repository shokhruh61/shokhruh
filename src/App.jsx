import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'

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

      </Routes>
    </div>
  )
}

export default App
