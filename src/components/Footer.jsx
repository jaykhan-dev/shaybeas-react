const Footer = () => {
  return (
    <footer className="text-white bg-fixed" id="footer-bg">
      <div className="flex justify-center bg-black/30 py-20">
        <div className="lg:w-2/3">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg px-4">
            <button className="bg-black px-4 uppercase">Contact Us</button>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 my-8">
            <div className="border border-white/25 p-8 rounded-lg backdrop-blur-lg">
              <h1 className="lg:text-6xl font-bold">First Contact</h1>
              <p className="my-4">
                ShayBeas Enterprises LLC <br />
                Mint Julep Dr <br />
                Riverview, FL, 33575
              </p>
              <a href="" className="text-blue-500 font-bold">
                <p className="my-8">shaybeasenterprises@gmail.com</p>
              </a>
            </div>
            <div className="backdrop-blur-lg lg:col-span-2 border border-white/25 p-4 rounded-lg grid place-items-center">
              <form action="" className="grid grid-cols-2 gap-4">
                <div className="space-y-2 flex flex-col">
                  <input
                    placeholder="Name"
                    type="text"
                    className="p-4 rounded-lg bg-white/0 text-white border border-white/25"
                  />
                  <input
                    placeholder="Email"
                    className="p-4 rounded-lg bg-white/0 text-white border border-white/25"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="p-4 rounded-lg bg-white/0 text-white border border-white/25"
                  />
                  <button className="border p-4 rounded-tr-[20px] rounded-bl-[20px]">
                    Submit
                  </button>
                </div>
                <div className="">
                  <textarea
                    placeholder="Tell us about your idea"
                    className="w-full bg-white/0 border border-white/25 rounded-lg p-4 h-full"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 bg-black px-4">
        <div className="lg:w-2/3 flex justify-between">
          <p>©ShayBeas Enterprises LLC. 2022. All rights reserved.</p>
          <div className="text-xl space-x-2">
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-snapchat"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
