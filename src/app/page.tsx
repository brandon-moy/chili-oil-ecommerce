import Image from "next/image";
import prisma from "../../lib/prisma";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <section className="relative w-full h-screen">
        <div
          data-cy="home-hero"
          className="w-full h-full bg-[url('/chili_stock.webp')] bg-cover bg-center brightness-[65%] contrast-150"
        ></div>
        <p className="absolute text-6xl text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          SOME TEXT
        </p>
      </section>
      <section className="w-full p-16 text-center bg-gray-200">
        <div className="w-4/5 m-auto md:w-3/5">
          <h2 className="py-4 text-3xl text-center md:py-6 md:text-5xl">
            Who am I?
          </h2>
          <p className="py-4 md:py-6 text-md md:text-2xl">
            Hey there! I&apos;m Brandon, just your typical chili oil enthusiast.
          </p>
          <p className="py-4 text-md md:py-6 md:text-2xl">
            I started out eating a lot of chili oil and one day decided to try
            making it myself! After some trial and error (an a lot of taste
            tests from friends and family) I&apos;ve gotten my recipe to where
            it is now.
          </p>
          <p className="py-4 md:py-6 text-md md:text-2xl">
            I&apos;ve really come to enjoy the process and am excited to share
            my chili oil with you! All my oil is currently handmade, my me, in
            my own home.
          </p>
        </div>
      </section>
    </main>
  );
}
