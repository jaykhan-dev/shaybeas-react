import Lottie from 'lottie-react'
// import SpaceRocket from '../assets/lottie/rocket-in-space.json'
import RocketLaunch from '../assets/lottie/rocket-launch.json'

const Hero = () => {
  return (
    <section className="bg-fixed p-2 flex justify-center" id="hero-bg">
      <div className="grid lg:grid-cols-3 lg:w-2/3">
        {/* COL1 */}
        <div className="col-span-2 py-20 my-20">
          <h2 className="lg:text-8xl font-extrabold my-10">
            Boldly going{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              beyond
            </span>{' '}
            leads
          </h2>
          <p className="text-gray-600 my-4 text-4xl font-bold">
            and actually dealing with referrals
          </p>
          <p>
            DailyBot takes chat and collaboration to the next level: daily
            standups, team check-ins, surveys, kudos, best companion bot for
            your virtual watercooler, 1:1 intros, motivation tracking and more.{' '}
          </p>
          <div>
            <p>The best companion bot for your chat app.</p>
            <div className="flex space-x-2 items-center my-8">
              <button className="p-2 px-8 rounded-full border border-black">
                Slack
              </button>
              <button className="p-2 px-8 rounded-full border border-black">
                CRM
              </button>
              <button className="p-2 px-8 rounded-full border border-black">
                Google
              </button>
            </div>
            <p>🔥🌟 Other integrations : Discord, Telegram</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="" alt="" />
          </div>
        </div>
        {/* COL2 */}
        <div className="grid place-items-center">
          <Lottie animationData={RocketLaunch} />
        </div>
      </div>
    </section>
  )
}

export default Hero
