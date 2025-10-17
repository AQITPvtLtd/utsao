"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image Animation
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse", // replay on scroll back
          },
        }
      );

      // Text Animation
      gsap.fromTo(
        textRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-10 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div
          ref={imageRef}
          className="order-2 md:order-1 flex justify-center relative"
        >
          <div className="relative w-[90%] md:w-[80%] rounded-2xl overflow-hidden shadow-xl border-4 border-[#efdecc]">
            <Image
              src="/about/aboutus.webp"
              alt="About Us"
              width={600}
              height={400}
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c5e8e8] rounded-full -z-10"></div>
          </div>
        </div>

        {/* Text Side */}
        <div ref={textRef} className="order-1 md:order-2">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-black mb-6 relative"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            About <span className="text-[#b89f7d]">Us</span>
            <span className="block w-16 h-1 bg-[#efdecc] mt-3 rounded-full"></span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Gifting is not just a gesture. It shows appreciation, respect, and
            thoughtfulness. At Utsao, we help businesses communicate more
            clearly with less effort through premium, meaningful, and memorable
            gifts.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Utsao was created to meet the demand for high-quality, value-driven
            corporate merchandise. We saw a gap in the market: companies needed
            branded gifts that looked great, felt personal, and were affordable.
            We aimed to change how corporate India approaches gifting.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Today, we are proud to be the go-to gifting partner for some of the
            biggest brands in the country. We provide items ranging from festive
            hampers to executive tech, wellness kits to custom-branded
            stationery. Our skilled team manages everything from product
            development and sourcing to branding, packaging, and logistics. This
            gives you a fully managed experience from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
