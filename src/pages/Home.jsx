import { useEffect } from 'react'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'

import Referrals from '../components/Referrals'
import Logos from '../components/Logos'
import GetStarted from '../components/GetStarted'
import Categories from '../components/Categories'
import MockAPI from '../components/MockAPI'

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="App">
      <Hero />
      <Logos />
      <MockAPI />
      <Welcome />
      <Categories />
      <GetStarted />
      <Referrals />
    </div>
  )
}

export default Home
