"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="bg-black p-1 text-white">
        <marquee>
          🎉 Avail Up to 4% Extra Discount with Bank Transfer | 💳 Cash on
          Delivery Available | 🚚 Fast Delivery in 2–3 Days.
        </marquee>
      </div>

      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <Link href={'/'}>
              <div className="flex items-center gap-3">
                <Image
                  height={40}
                  width={40}
                  loading="eager"
                  src="/logo.webp"
                  alt="logo"
                />
                <p className="font-bold">Tech Bazaar</p>
              </div>
            </Link>
          </div>
          <ul className="hidden items-center gap-4 md:flex">
            <li>
              <Link
                href="#"
                className="font-medium text-accent"
                aria-current="page"
              >
                Browse Products
              </Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/signin">Login</Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link href="#" className="block py-2">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 font-medium text-accent">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2">
                  Pricing
                </Link>
              </li>
              <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                <Link href="#" className="block py-2">
                  Login
                </Link>
                <Button className="w-full">Sign Up</Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
