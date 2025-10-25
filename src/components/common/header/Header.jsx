"use client";
import { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Top from "./Top";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const topRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.getBoundingClientRect().height);
    }

    const handleScroll = () => {
      if (topRef.current) {
        const topHeight = topRef.current.getBoundingClientRect().height;
        setIsSticky(window.scrollY >= topHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.getBoundingClientRect().height);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <>
      {/* Top bar (hidden on mobile, visible on md and up) */}
      <div ref={topRef} className="hidden md:block">
        <Top />
      </div>

      {/* Navbar */}
      <div
        ref={navbarRef}
        className={`w-full z-50 overflow-x-hidden transition-all duration-300 ${
          isSticky ? "fixed top-0 shadow-md" : ""
        }`}
        style={{
          boxShadow: "0px 25px 20px -20px rgba(0,0,0,0.45)",
        }}
      >
        <Navbar />
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div
        className={`md:hidden ${isSticky ? "" : "hidden"}`}
        style={{ height: navbarHeight }}
      ></div>
    </>
  );
}
