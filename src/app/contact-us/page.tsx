export default function ContactUs() {
  return (
    <section className="text-center">
      <div className="w-11/12 m-auto pt-36 md:w-3/5">
        <h2 className="text-2xl md:text-4xl">Contact Us</h2>
        <p className="text-md md:text-2xl">
          I wouldn&apos;t be here without all of your support! Send me a
          questions or suggestion with the form below!
        </p>
        <form className="flex flex-col">
          <input
            name="name"
            type="name"
            className="p-1 my-1 bg-gray-100 rounded md:h-12 md:my-4"
            placeholder="Name"
          ></input>
          <input
            name="email"
            type="email"
            className="p-1 my-1 bg-gray-100 rounded md:h-12 md:my-4"
            placeholder="Email"
          ></input>
          <textarea
            name="message"
            className="p-1 mt-1 mb-6 bg-gray-100 rounded md:mt-4 md:mb-12 md:h-48 h-28"
            placeholder="Message"
          ></textarea>
        </form>
      </div>
    </section>
  );
}
