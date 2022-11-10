import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
import ResponsiveNav from './components/ResponsiveNav'
import Home from './pages/Home'
import Login from './pages/Login'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResponsiveNav />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
