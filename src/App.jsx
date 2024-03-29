import React from 'react'
import {Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/layout'
import MainPage from './pages/MainPage'
import Portfolio from './pages/portfolioPage'
import Contacts from './pages/Contacts'
import AboutMe from './pages/AboutMe'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='/Me' element={<AboutMe/>}/>
          <Route path='/Portfolio' element={<Portfolio/>}/>
          <Route path='/Contacts' element={<Contacts/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
