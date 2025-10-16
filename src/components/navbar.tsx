import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="hover:scale-101 transition duration-[2000ms] bg-orange-200 shadow-lg shadow-orange-200/50 rounded-lg p-4 my-8 flex items-center">
      <h1 className="font-bold pl-2">{`Jake's Hack4Impact Website`}</h1>
      <nav className="ml-auto flex gap-0.5">
        <Link
          href="/"
          className="hover:bg-orange-300/50 active:bg-orange-400/50 px-2 py-1 rounded-md transition"
        >
          Home
        </Link>
        <Link
          href="/portfolio"
          className="hover:bg-orange-300/50 active:bg-orange-400/50 px-2 py-1 rounded-md transition"
        >
          Portfolio
        </Link>
        <Link
          href="/blog"
          className="hover:bg-orange-300/50 active:bg-orange-400/50 px-2 py-1 rounded-md transition"
        >
          Blog
        </Link>
        <Link
          href="/resume"
          className="hover:bg-orange-300/50 active:bg-orange-400/50 px-2 py-1 rounded-md transition"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
