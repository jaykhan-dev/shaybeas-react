const Footer = () => {
  return (
    <footer className="text-white" id="footer-bg">
      <div className="flex justify-center bg-black/80 py-20">
        <div className="lg:w-2/3">
          <div className="bg-green-500 rounded-full px-4">
            <button className="bg-black px-4 uppercase">Contact Us</button>
          </div>
          <div></div>
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
