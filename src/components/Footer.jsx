import Skyline from '../assets/skyline.png'

const Footer = () => {
  return (
    <footer className="bg-fixed" id="footer-bg">
      <div className="flex justify-center py-20">
        <div className="lg:w-2/3">
          <div className="grid place-items-center">
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
                  Zillow, Inc. holds real estate brokerage licenses in multiple
                  states. <br />
                  Zillow (Canada), Inc. holds real estate brokerage licenses in
                  multiple provinces. <br />§ 442-H New York Standard Operating
                  Procedures § New York Fair Housing Notice TREC:
                  <br />
                  Information about brokerage services, Consumer protection
                  notice California DRE #1522444
                </p>
              </div>
              <p>
                For listings in Canada, the trademarks REALTOR®, REALTORS®, and
                the REALTOR® logo are controlled by The Canadian Real Estate
                Association (CREA) and identify real estate professionals who
                are members of CREA. The trademarks MLS®, Multiple Listing
                Service® and the associated logos are owned by CREA and identify
                the quality of services provided by real estate professionals
                who are members of CREA. Used under license.
              </p>
            </div>
            {/* CONTACT INFO */}
            <div className="border border-white/25 p-8 rounded-lg backdrop-blur-lg bg-gray-100">
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
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 px-4">
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
      <div className="grid place-items-center">
        <img src={Skyline} alt="Footer graphic" />
      </div>
    </footer>
  )
}

export default Footer
