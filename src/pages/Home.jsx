import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Trust from '../components/Trust'
import Referrals from '../components/Referrals'
import Logos from '../components/Logos'
import GetStarted from '../components/GetStarted'

function Home() {
  return (
    <div className="App">
      <Hero />
      <Logos />
      <Welcome />
      <Referrals />
      <Trust />
      <GetStarted />
    </div>
  )
}

export default Home
