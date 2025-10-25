"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import navItems from "@/data/navData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
    >
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 py-4 md:py-5 bg-[#efdecc] shadow relative">
        {/* Logo (visible on mobile) */}
        <Link href="/" className="flex items-center gap-2 md:hidden">
          <Image
            src="/logo/logo.png"
            alt="Cancer Onco Logo"
            width={140}
            height={45}
            priority
            className="w-24 sm:w-28 md:w-36 lg:w-40 h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center flex-1 gap-8 lg:gap-12 text-[15px] font-semibold text-gray-800">
          {navItems.map((item, i) =>
            item.dropdown ? (
              <li key={i} className="relative group">
                <button className="relative hover:text-[#5b4636] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#5b4636] after:transition-all after:duration-300 group-hover:after:w-full">
                  {item.name} ▾
                </button>
                <ul className="absolute left-0 hidden group-hover:block bg-white border rounded shadow-lg w-44 mt-2">
                  {item.dropdown.map((sub, j) => (
                    <li key={j}>
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-[#efdecc] hover:text-[#5b4636] transition-all duration-200"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={i} className="relative group">
                <Link
                  href={item.href}
                  className="relative hover:text-[#5b4636] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-[#5b4636] after:transition-all after:duration-300 group-hover:after:w-full" style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#efdecc] border-t shadow-lg px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-gray-800">
            {navItems.map((item, i) =>
              item.dropdown ? (
                <li key={i}>
                  <details>
                    <summary className="cursor-pointer hover:text-[#5b4636] transition-colors duration-200">
                      {item.name}
                    </summary>
                    <ul className="ml-4 flex flex-col gap-2 mt-2">
                      {item.dropdown.map((sub, j) => (
                        <li key={j}>
                          <Link
                            href={sub.href}
                            className="block hover:text-[#5b4636] transition-all duration-200"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-[#5b4636] transition-all duration-200" style={{ fontFamily: "'Dancing Script', cursive" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
