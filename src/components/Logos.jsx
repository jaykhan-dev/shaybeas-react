import Century21 from '../assets/century-21-logo.png'
import KWLogo from '../assets/kw-logo.png'
import EXPLogo from '../assets/exp-logo.png'
import RemaxLogo from '../assets/remax-logo.png'
import CBLogo from '../assets/cb-logo.png'

const Logos = () => {
  return (
    <section className="py-20 flex justify-center">
      <div className="container grid lg:grid-cols-6 gap-8 place-items-center ">
        <h2 className="font-bold text-gray-500 lg:text-left text-center">
          Rest assured you&apos;re <br /> in good hands
        </h2>
        <img src={Century21} alt="Century 21 Logo" width="200px" />
        <img src={KWLogo} alt="Keller Williams Logo" />
        <img src={RemaxLogo} alt="Remax Logo" />
        <img src={EXPLogo} alt="EXP Realty Logo" />
        <img src={CBLogo} alt="Coldwell Bankers Logo" />
      </div>
    </section>
  )
}
export default Logos
