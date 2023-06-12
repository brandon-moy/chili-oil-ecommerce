import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chili Oil eCommerce",
  description: "A web application to sell chili oil",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/moy.webp" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
