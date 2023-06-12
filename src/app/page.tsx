import Image from "next/image";
import prisma from "../../lib/prisma";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="relative w-full h-screen">
        <div className="w-full h-full bg-[url('/chili_stock.webp')] bg-cover bg-center brightness-[65%] contrast-150"></div>
        <p className="absolute text-6xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          SOME TEXT
        </p>
      </div>
    </main>
  );
}
