export default function ContactUs() {
  return (
    <section className="text-center">
      <div className="w-4/5 m-auto md:w-3/5">
        <h2 className="text-4xl">Contact Us</h2>
        <p className="text-2xl">
          I wouldn&apos;t be here without all of your support! Send me a
          questions or suggestion with the form below!
        </p>
        <form className="flex flex-col">
          <input type="name" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
        </form>
      </div>
    </section>
  );
}
