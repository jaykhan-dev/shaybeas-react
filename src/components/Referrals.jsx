import Lottie from 'lottie-react'
import RocketTrail from '../assets/lottie/rocketship-smoke-trail.json'

const Referrals = () => {
  return (
    <section className="py-20">
      <div className="flex justify-center">
        <div className="lg:w-2/3">
          <div className="grid place-items-center">
            <h1 className="lg:text-4xl font-bold text-center">
              Rest assured you&#39;re in good hands
            </h1>
            <p className="text-xl leading-10 text-gray-400 my-8 text-center lg:w-1/2">
              You will no longer have to use old fashioned methods of finding
              leads and trying to close them.
            </p>
          </div>
          <div className="grid grid-cols-3">
            {/* COL2 */}
            <div>
              <Lottie animationData={RocketTrail} />
            </div>
            {/* COL2 */}
            <div className="col-span-2 grid grid-cols-2">
              <div className="">
                <i className="fa-solid fa-phone-volume text-8xl"></i>

                <div className="">
                  <h3 className="font-bold text-2xl">Cold Calling</h3>
                  <p>
                    Are you wasting your time speaking with prospects that are
                    not interested in purchasing a home?
                  </p>
                </div>
              </div>

              <div className="">
                <i className="fa-solid fa-hand-holding text-8xl"></i>
                <div className="">
                  <h3 className="font-bold text-2xl">Begging for Referrals</h3>
                  <p>
                    Keeping in touch with old clients to refer you with their
                    acquaintances, begging friends and family to send you
                    business?
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <i className="fa-solid fa-chart-simple text-8xl"></i>
                <div>
                  <h3 className="font-bold text-2xl">Proven System</h3>
                  <p>
                    Are you using old fashioned methods? Do you have a proven
                    process to convert serious, motivated and qualified
                    prospects?
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <i className="fa-solid fa-money-bill text-8xl"></i>
                <div>
                  <h3 className="font-bold text-2xl">Paying Leads</h3>
                  <p>
                    Spending thousands of dollars for a lead that never closes?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Referrals
