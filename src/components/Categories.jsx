import BuyHome from '../assets/buy-home.png'
import SellHome from '../assets/sell-graphic.png'
import RentHome from '../assets/rent-graphic.png'

const Categories = () => {
  return (
    <section className="bg-gray-100 py-20 flex justify-center relative">
      <div className="grid lg:grid-cols-3 gap-8 lg:w-1/2 z-20">
        {/* COL1 */}
        <div className="border p-4 border-black/40 rounded grid place-items-center">
          <img src={BuyHome} alt="Buy a home graphic" />
          <h2 className="text-2xl font-bold my-4">Buy a home</h2>
          <p className="text-center text-gray-700">
            Find your place with an immersive photo experience and the most
            listings, including things you won’t find anywhere else.
          </p>
          <button className="p-2 px-4 bg-blue-500 text-white my-8 rounded">
            Browse Homes
          </button>
        </div>

        {/* COL2 */}
        <div className="border p-4 border-black/40 rounded grid place-items-center">
          <img src={RentHome} alt="Buy a home graphic" width="170px" />
          <h2 className="text-2xl font-bold my-4">Rent a home</h2>
          <p className="text-center text-gray-700">
            Find your place with an immersive photo experience and the most
            listings, including things you won’t find anywhere else.
          </p>
          <button className="p-2 px-4 bg-blue-500 text-white my-8 rounded">
            Browse Homes
          </button>
        </div>

        {/* COL2 */}
        <div className="border p-4 border-black/40 rounded grid place-items-center">
          <img src={SellHome} alt="Buy a home graphic" width="180px" />
          <h2 className="text-2xl font-bold my-4">Sell a home</h2>
          <p className="text-center text-gray-700">
            Find your place with an immersive photo experience and the most
            listings, including things you won’t find anywhere else.
          </p>
          <button className="p-2 px-4 bg-blue-500 text-white my-8 rounded">
            Browse Homes
          </button>
        </div>
      </div>
    </section>
  )
}

export default Categories
