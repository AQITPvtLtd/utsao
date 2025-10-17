"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Form from "./form/Form";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        ".contact-heading",
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate intro text
      gsap.fromTo(
        ".contact-intro",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate contact info cards
      gsap.fromTo(
        ".contact-info > div",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate contact form
      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="px-4 sm:px-6 lg:px-20 py-12 overflow-hidden">
      {/* Heading */}
      <h1
        className="contact-heading text-3xl sm:text-4xl font-bold text-center mb-8 text-black"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Contact <span className="text-[#b89f7d]">Us</span>
      </h1>

      {/* Intro Text */}
      <p className="contact-intro text-gray-700 text-lg max-w-3xl mx-auto text-center mb-12">
        We are <span className="font-semibold">UTSAO</span>, a unit of AQIT Pvt
        Ltd. We're thrilled to hear from you. Whether you have a question about
        our services, need assistance, or want to collaborate, we're here to
        help. Please feel free to reach out using the contact details below or
        fill out the contact form, and we'll get back to you as soon as
        possible.
      </p>

      {/* Contact Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="contact-info space-y-8">
          <div className="flex items-start space-x-4">
            <MdLocationOn size={28} className="text-[#b89f7d] mt-1" />
            <div>
              <p className="font-semibold text-lg text-black">Address</p>
              <Link
                href="https://maps.app.goo.gl/cJn9FZWJKiJNgqfF9"
                target="_blank"
                className="text-gray-700 hover:text-[#b89f7d] transition-colors"
              >
                1882, S/F, Bhaskar Bhawan, Kotla Mubarakpur, South Extension I,
                South Delhi, Delhi 110003
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <MdPhone size={28} className="text-[#b89f7d]" />
            <div>
              <p className="font-semibold text-lg text-black">Phone</p>
              <Link
                href="tel:+919582930940"
                target="_blank"
                className="text-gray-700 hover:text-[#b89f7d] transition-colors"
              >
                +91 958 293 0940
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <MdEmail size={28} className="text-[#b89f7d]" />
            <div>
              <p className="font-semibold text-lg text-black">Email</p>
              <Link
                href="mailto:utsaoglobal@gmail.com"
                target="_blank"
                className="text-gray-700 hover:text-[#b89f7d] transition-colors"
              >
                utsaoglobal@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-white shadow-md rounded-lg p-6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
