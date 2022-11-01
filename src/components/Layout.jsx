import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav className="bg-black text-white flex justify-center py-6 fixed top-0 w-full">
        <div className="container flex justify-between">
          <div>
            <img src="" alt="" />
            <h1>ShayBeas</h1>
          </div>
          <div className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/login">
              <button className="p-2 px-4 rounded bg-blue-500">Login</button>
            </Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout
