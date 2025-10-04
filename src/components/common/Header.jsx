"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Cinzel } from "next/font/google";

// ✅ Cinzel font import
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Hover underline effect (center expand)
  const linkClasses =
    "relative transition-all duration-300 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF0C4] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.webp"
            alt="Tek Booster Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex space-x-8 text-black text-lg ${cinzel.className}`}>
          <Link href="/" className={linkClasses}>
            Home
          </Link>
          <Link href="/" className={linkClasses}>
            About us
          </Link>
          <Link href="/" className={linkClasses}>
            Products
          </Link>
          <Link href="/" className={linkClasses}>
            Blogs
          </Link>
          <Link href="/contact" className={linkClasses}>
            Contact us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden bg-[#FFF0C4] px-4 pb-4 space-y-3 ${cinzel.className}`}>
          <Link href="/" className={linkClasses + " block py-2"}>
            Home
          </Link>
          <Link href="/" className={linkClasses + " block py-2"}>
            About us
          </Link>
          <Link href="/" className={linkClasses + " block py-2"}>
            Products
          </Link>
          <Link href="/" className={linkClasses + " block py-2"}>
            Blogs
          </Link>
          <Link href="/contact" className={linkClasses + " block py-2"}>
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
