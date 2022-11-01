const ContactForm = () => {
  return (
    <section>
      <div>
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
    </section>
  )
}

export default ContactForm
