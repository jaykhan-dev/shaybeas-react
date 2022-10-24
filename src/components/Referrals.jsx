const Referrals = () => {
  return (
    <section className="">
      <div className="flex justify-center bg-black text-white">
        <div className="lg:w-2/3">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg px-4 w-full my-8">
            <button className="bg-black px-4 uppercase">Referrals</button>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 py-20">
            <div>
              <h1 className="lg:text-6xl text-2xl leading-10">
                We want to truly{' '}
                <span className="italic font-serif">understand</span> if we can
                bring you a massive amount of value
              </h1>
              <p className="text-xl leading-10 text-gray-400 my-8">
                We help people move all over the country, military families,
                corporate relocations, and then help you as an agent to grow
                your personal space by helping our partnering agents aquire more
                listings as well. This ensures that everyone gets the best
                experience possible.
              </p>
            </div>
            <div className="space-y-10">
              <div className="grid lg:grid-cols-3">
                <i className="fa-solid fa-phone-volume text-8xl"></i>

                <div className="col-span-2">
                  <h3 className="font-bold text-2xl">Cold Calling</h3>
                  <p>
                    Are you wasting your time speaking with prospects that are
                    not interested in purchasing a home?
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3">
                <i className="fa-solid fa-hand-holding text-8xl"></i>
                <div className="col-span-2">
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
