import Image from "next/image";
import prisma from "../../lib/prisma";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <div className="relative w-full h-screen">
        <div className="w-full h-full bg-[url('/chili_stock.webp')] bg-cover bg-center brightness-[65%] contrast-150"></div>
      </div>
    </main>
  );
}
