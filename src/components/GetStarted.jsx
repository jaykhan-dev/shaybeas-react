import RocketMan from '../assets/lottie/man-on-rocket.json'
import Lottie from 'lottie-react'

const GetStarted = () => {
  return (
    <section
      className="flex justify-center bg-black text-white bg-fixed"
      id="get-started"
    >
      <div className="w-full grid place-items-center bg-black/90">
        <div className="grid place-items-center container py-10">
          <div className="text-center grid place-items-center">
            <h1 className="lg:text-4xl text-3xl my-8">
              Ready to start closing leads?
            </h1>
            <div className="w-64 h-64 grid place-items-center">
              <Lottie animationData={RocketMan} />
            </div>

            <button className="p-2 px-4 rounded-tr-[20px] rounded-bl-[20px] hover:animate-pulse text-white text-2xl border">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
