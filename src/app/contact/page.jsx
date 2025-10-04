"use client";
import React from "react";
import Contact from "./Contact";
import Link from "next/link";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Page = () => {
    return (
        <div className="mt-[80px] px-4 sm:px-6 lg:px-20 py-12 bg-[#FFF8E7]">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
                Contact Us
            </h1>

            {/* Intro Text */}
            <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center mb-12">
                We are <span className="font-semibold">UTSAO</span>, a unit of AQIT Pvt Ltd.
                We're thrilled to hear from you. Whether you have a question about our services, need assistance, or want to collaborate, we're here to help.
                Please feel free to reach out using the contact details below or fill out the contact form, and we'll get back to you as soon as possible.
            </p>

            {/* Contact Info & Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                        <MdLocationOn size={28} className="text-[#00a4e9] mt-1" />
                        <div>
                            <p className="font-semibold text-lg">Address</p>
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-[#00a4e9] transition-colors"
                            >
                                1882, S/F, Bhaskar Bhawan, Kotla Mubarakpur, South Extension I, South Delhi, Delhi 110003
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <MdPhone size={28} className="text-[#00a4e9]" />
                        <div>
                            <p className="font-semibold text-lg">Phone</p>
                            <Link
                                href="tel:+919582930940"
                                className="text-gray-700 hover:text-[#00a4e9] transition-colors"
                            >
                                +91 958 293 0940
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <MdEmail size={28} className="text-[#00a4e9]" />
                        <div>
                            <p className="font-semibold text-lg">Email</p>
                            <Link
                                href="mailto:utsaoglobal@gmail.com"
                                className="text-gray-700 hover:text-[#00a4e9] transition-colors"
                            >
                                utsaoglobal@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default Page;
