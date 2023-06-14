import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-maroon">
      <div className="px-4 py-6 text-white md:py-16 md:px-12">
        <h1 className="text-xl md:text-3xl">Contact Me</h1>
        <p className="py-4 md:py-8">
          <a
            className="text-sm md:text-lg"
            href="mailto:brandon@brandonmoy.com"
          >
            brandon@brandonmoy.com
          </a>
        </p>
        {/* {Fix contact form text to link after creating page} */}
        <p className="text-sm md:text-lg">
          Send me a message via my{" "}
          <Link href="/contact-us" className="underline">
            contact form!
          </Link>
        </p>
      </div>
    </footer>
  );
}
