const Nav = () => {
  return (
    <nav className="flex justify-center py-6 fixed top-0 w-full bg-blue-900 text-white">
      <div className="container justify-between flex">
        <div>
          <img src="" alt="" />
          <h1>ShayBeas</h1>
        </div>
        <div className="space-x-4">
          <a href="">Referrals</a>
          <a href="">Process</a>
          <a href="">Why Us?</a>
          <a href="">Contact</a>
          <a href="">
            <button className="p-2 px-4 bg-blue-500 rounded">Login</button>
          </a>
          <a href="">
            <button className="p-2 px-4 bg-green-500 rounded">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
