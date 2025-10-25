"use client";
import React, { useEffect, useRef } from "react";
import { Target, Eye } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "@/components/homepage/About";
import Faq from "@/components/homepage/Faq";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth luxury fade-in animation with depth and upward motion
      gsap.fromTo(
        ".mv-card",
        {
          opacity: 0,
          y: 100,
          rotationX: 20,
          transformOrigin: "top center",
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Heading soft fade from below
      gsap.fromTo(
        ".mv-heading",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      {/* About Section (already has animation) */}
      <About />

      {/* Mission & Vision Section */}
      <section ref={sectionRef} className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center mb-12 mv-heading">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Mission <span className="text-[#b89f7d]">and</span> Vision
          </h2>
          <div className="w-20 h-1 bg-[#efdecc] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div className="mv-card group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 transform hover:-translate-y-2 hover:scale-[1.02]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-indigo-100 p-4 rounded-full group-hover:bg-indigo-200 transition">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3
                className="text-2xl font-semibold text-gray-800"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Our <span className="text-[#b89f7d]">Mission</span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To enhance business relationships with curated, premium gifts that
              embody your brand’s values and develop an emotional connection that
              is everlasting. We exist to make gifting simple, personalized, and
              memorable.
            </p>
          </div>

          {/* Vision Card */}
          <div className="mv-card group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 transform hover:-translate-y-2 hover:scale-[1.02]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-pink-100 p-4 rounded-full group-hover:bg-pink-200 transition">
                <Eye className="w-8 h-8 text-pink-600" />
              </div>
              <h3
                className="text-2xl font-semibold text-gray-800"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Our <span className="text-[#b89f7d]">Vision</span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We envision Utsao as the leading name in corporate gifting across
              India — a name associated with quality, creativity, and trust. We
              want to be the partner that businesses rely on when they are
              choosing gifts that are aspirational, personal, and unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section (already animated separately) */}
      <Faq />
    </section>
  );
}
