import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jake's Hack4Impact Website",
  description: "A personal website made for Hack4Impact's bootcamp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} mx-auto max-w-[52rem] bg-stone-100 px-8 pb-16 text-stone-800 md:pb-20`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
