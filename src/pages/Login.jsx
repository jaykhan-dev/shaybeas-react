import { useEffect } from 'react'

function Login() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <section id="login-bg" className="">
      <div className="grid place-items-center bg-black/90 py-20">
        <div className="mt-8 bg-black/50 text-white grid place-items-center border rounded shadow-xl backdrop-blur-lg">
          <div className="">
            <h2 className="text-4xl font-bold text-center p-4 mt-4">
              Join us Now
            </h2>
            <p className="my-2 text-2xl p-4">
              Enter your credentials to sign up!
            </p>
            <form action="" className="flex flex-col p-4">
              <input
                type="text"
                placeholder="username"
                className="p-2 px-4 border rounded"
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="password"
                className="p-2 px-4 border rounded mt-6"
              />
              <button className="p-2 px-4 w-full bg-blue-500 text-white rounded mt-6">
                Sign up
              </button>
            </form>
            <div className="flex items-center justify-evenly space-x-2 my-10 border-t border-b py-8">
              <button className="p-2 px-4 border rounded flex items-center space-x-2">
                <i className="fa-brands fa-google"></i>
                <p>Google</p>
              </button>
              <button className="p-2 px-4 border rounded flex items-center space-x-2">
                <i className="fa-brands fa-twitter"></i>
                <p>Twitter</p>
              </button>
              <button className="p-2 px-4 border rounded flex items-center space-x-2">
                <i className="fa-brands fa-github"></i>
                <p>Github</p>
              </button>
            </div>
            <div className="flex items-center justify-between p-4">
              <button className="flex items-center space-x-2">
                <i className="fa-solid fa-lock"></i>
                <p>Forgot Password?</p>
              </button>
              <button className="flex items-center space-x-2">
                <i className="fa-solid fa-circle-info"></i>
                <p>Help</p>
              </button>
            </div>
          </div>
        </div>
        <div className="my-8 text-white">
          <button className="space-x-4 flex items-center">
            <i className="fa-solid fa-arrow-left animate-pulse"></i>
            <p>Back to main</p>
          </button>
        </div>
      </div>
    </section>
  )
}
export default Login
