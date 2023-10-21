import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { ToastContainer } from 'react-bootstrap'

function App() {
  return (
    <div className='bg-black overflow-hidden'>
      <ToastContainer autoClose={4000} position='top-right' />
      <Header/>
      <Home/>
    </div>
  )
}

export default App
