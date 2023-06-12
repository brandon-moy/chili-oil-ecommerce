export default function Footer() {
  return (
    <div className="bg-maroon">
      <div className="px-4 py-6">
        <h1 className="text-xl">Contact Me</h1>
        <p className="py-4">
          <a className="text-sm" href="mailto:brandon@brandonmoy.com">
            brandon@brandonmoy.com
          </a>
        </p>
        {/* {Fix contact form text to link after creating page} */}
        <p className="text-sm">
          Send me a message via my <a className="underline">contact form!</a>
        </p>
      </div>
    </div>
  );
}
