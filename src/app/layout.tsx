import type { Metadata } from "next"; // Object to set metadata
import { Inter } from "next/font/google"; // You can change the font to anything you want.
import "./globals.css";
import Navbar from "@/components/navbar";

// If you are experiencing an error "localFont is undefined", you might need to add the following blocks of code
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jake's Hack4Impact Website",
  description: "A personal website made for Hack4Impact's bootcamp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // returns boilerplate
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto max-w-[52rem] bg-stone-100 px-8 pb-16 text-stone-800 md:pb-20`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
