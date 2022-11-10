const Footer = () => {
  return (
    <footer className="bg-fixed border-t border-gray-800" id="footer-bg">
      <div className="flex justify-center py-20 bg-black/90 text-white">
        <div className="lg:w-2/3">
          <div className="grid place-items-center">
            <div className="grid place-items-center">
              <i className="fa-solid fa-hand-spock text-4xl"></i>
            </div>
            {/* Buttons */}
            <div className="grid lg:grid-cols-4 my-8 gap-8 font-bold">
              <button>Real Estate</button>
              <button>Rentals</button>
              <button>Mortgage Rates</button>
              <button>Browse Leads</button>
            </div>
            {/* DISCLAIMERS */}
            <div className="grid place-items-center small-text text-center lg:w-2/3 space-y-8">
              <p className="">
                ShayBeas Enterprises is committed to ensuring digital
                accessibility for individuals with disabilities. We are
                continuously working to improve the accessibility of our web
                experience for everyone, and we welcome feedback and
                accommodation requests. If you wish to report an issue or seek
                an accommodation, please let us know.
              </p>
              <div>
                <p>
                  ShayBeas Enterprises holds real estate brokerage licenses in
                  the state of Florida.
                  <br />
                  For more information please use the contact info below:
                </p>
                <p className="my-4">
                  ShayBeas Enterprises LLC <br />
                  Mint Julep Dr <br />
                  Riverview, FL, 33575
                </p>
              </div>
            </div>
            {/* CONTACT INFO */}
            <div className="">
              <a href="" className="text-blue-500 font-bold">
                <p className="my-8">shaybeasenterprises@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 px-4 bg-blue-900 text-white">
        <div className="lg:w-2/3 flex justify-center space-x-4">
          <p>©ShayBeas Enterprises LLC.</p>
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
          <p>2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
