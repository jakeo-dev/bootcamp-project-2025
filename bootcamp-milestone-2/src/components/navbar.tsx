"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="hover:scale-101 transition duration-[2000ms] bg-orange-200 shadow-lg shadow-orange-200/50 rounded-lg p-4 my-8 flex items-center">
      <h1 className="font-bold pl-2">{`Jake's Hack4Impact Website`}</h1>
      <nav className="ml-auto flex gap-0.5">
        <Link
          href="/"
          className={`${
            pathname == "/"
              ? "bg-orange-300/50 text-neutral-900/70"
              : "text-neutral-900/60"
          } hover:bg-orange-300/50 active:bg-orange-400/50 px-2 py-1 rounded-md transition`}
        >
          Home
        </Link>
        <Link
          href="/portfolio"
          className={`${
            pathname.startsWith("/portfolio")
              ? "bg-orange-300/50 text-neutral-900/70"
              : "text-neutral-900/60"
          } hover:bg-orange-300/50 active:bg-orange-400/50 px-2 py-1 rounded-md transition`}
        >
          Portfolio
        </Link>
        <Link
          href="/blog"
          className={`${
            pathname.startsWith("/blog")
              ? "bg-orange-300/50 text-neutral-900/70"
              : "text-neutral-900/60"
          } hover:bg-orange-300/50 active:bg-orange-400/50 px-2 py-1 rounded-md transition`}
        >
          Blog
        </Link>
        <Link
          href="/resume"
          className={`${
            pathname.startsWith("/resume")
              ? "bg-orange-300/50 text-neutral-900/70"
              : "text-neutral-900/60"
          } hover:bg-orange-300/50 active:bg-orange-400/50 px-2 py-1 rounded-md transition`}
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}
