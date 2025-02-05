import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Contact from './pages/Contact'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Services from './pages/Services'

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
          path='/Blog'
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
