// import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Trust from './components/Trust'
import Referrals from './components/Referrals'
import Logos from './components/Logos'
import GetStarted from './components/GetStarted'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Logos />
      <Welcome />
      <Referrals />
      <Trust />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App
