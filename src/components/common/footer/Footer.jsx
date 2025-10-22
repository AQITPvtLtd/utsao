"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#efdecc] text-black pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          {/* Logo */}
          <div className="mb-4">
            <Link href="/">
              <Image
                src="/logo/logo.png" // replace with your logo path
                alt="Utsao Logo"
                width={150}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Description */}
          <p className="text-sm text-black leading-relaxed max-w-sm">
            At Utsao, we help businesses communicate more clearly with less effort through premium, meaningful, and memorable gifts.
          </p>
        </div>

        {/* Terms & Policy */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">
            TERMS & POLICY
          </h3>
          <ul className="space-y-2 text-sm text-black">
            <li>
              <Link href="/privacy" className="hover:text-[#5b4636] transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#5b4636] transition">
                Term and Condition
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-[#5b4636] transition">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-[#5b4636] transition">
                Shipping and Delivery Timeline
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-sm text-black">
            <li>
              <Link href="/" className="hover:text-[#5b4636] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#5b4636] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-[#5b4636] transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#5b4636] transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#5b4636] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">
            CONTACT US
          </h3>
          <ul className="space-y-3 text-sm text-black">
            <li className="flex items-start gap-2">
              <div className="text-3xl">
                <FaLocationDot size={16} className="mt-1 text-[#5b4636]" />
              </div>
              <Link href="https://maps.app.goo.gl/cJn9FZWJKiJNgqfF9"
                target="_blank" className="hover:text-[#5b4636] transition">
                1882, S/F, Bhaskar Bhawan, Kotla Mubarakpur, South Extension I,
                South Delhi, Delhi 110003
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt size={16} className="text-[#5b4636]" />
              <Link
                href="tel:+919582930940" target="_blank"
                className="hover:text-[#5b4636] transition"
              >
                +91 9582930940
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope size={16} className="text-[#5b4636]" />
              <Link
                href="mailto:utsaoglobal@gmail.com" target="_blank"
                className="hover:text-[#5b4636] transition"
              >
                utsaoglobal@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#f5e8b8]/30 mt-10 pt-4 text-center">
        <Link href="https://tekbooster.com/" target="_blank">
          <p className="text-sm text-black hover:text-[#5b4636] transition">
            Design & Developed By{" "}
            <span className="font-medium">Tek Booster</span> (Digital Marketing
            Company)
          </p>
        </Link>
      </div>
    </footer>
  );
}
