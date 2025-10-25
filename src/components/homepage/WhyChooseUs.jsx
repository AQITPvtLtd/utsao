"use client";

import React, { useEffect, useRef } from "react";
import { Gift, Star, Layers, Truck, Globe } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".why-card");

            gsap.fromTo(
                cards,
                { opacity: 0, y: 80, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse", // replays when scrolling back
                    },
                }
            );

            // Animate heading
            gsap.fromTo(
                ".why-heading",
                { opacity: 0, y: -40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const items = [
        {
            id: 1,
            title: "Luxury Presentation",
            desc: "Designed to impress at first glance — every box, jar, and ribbon is carefully chosen to create a memorable unboxing experience. Your brand becomes a part of that moment.",
            icon: <Gift className="w-7 h-7" />,
        },
        {
            id: 2,
            title: "Gourmet-Grade Selections",
            desc: "We curate only the highest-quality contents. Our selections are not just delicious — they promote wellness and reflect thoughtfulness in every bite.",
            icon: <Star className="w-7 h-7" />,
        },
        {
            id: 3,
            title: "Custom Branding",
            desc: "Tailored for businesses and special occasions. Add your logo, brand colors, custom sleeves, cards, or labels for gifts that speak in your voice.",
            icon: <Layers className="w-7 h-7" />,
        },
        {
            id: 4,
            title: "Corporate-Friendly",
            desc: "Whether it’s a thank-you gift, a festival hamper, or an onboarding kit, our logistics and design teams ensure smooth execution from start to finish.",
            icon: <Truck className="w-7 h-7" />,
        },
        {
            id: 5,
            title: "Pan-India Delivery",
            desc: "We deliver across the country with reliable logistics partners and smart tracking systems. No matter where your team or clients are, your gifts will reach them.",
            icon: <Globe className="w-7 h-7" />,
        },
    ];

    const firstRow = items.slice(0, 3);
    const secondRow = items.slice(3);

    return (
        <section ref={sectionRef} className="bg-white overflow-hidden">
            <section className="relative max-w-7xl mx-auto px-6 py-16">
                <div className="absolute inset-0 -z-10 bg-white" />

                {/* Heading */}
                <div className="text-center mb-14 why-heading">
                    <h2
                        className="text-4xl sm:text-5xl font-bold text-gray-900"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                        Why Choose <span className="text-[#b89f7d]">Us</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#efdecc] mx-auto mt-4 rounded-full"></div>
                </div>

                {/* First 3 Cards */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                    {firstRow.map((item) => (
                        <div
                            key={item.id}
                            className="why-card group rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-8"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-[#b89f7d] mb-6 group-hover:bg-[#b89f7d] group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b89f7d]">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Last 2 Cards (center aligned) */}
                <div className="flex flex-wrap justify-center gap-10">
                    {secondRow.map((item) => (
                        <div
                            key={item.id}
                            className="why-card w-full sm:w-[45%] lg:w-[30%] group rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-8"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-100 text-[#b89f7d] mb-6 group-hover:bg-[#b89f7d] group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b89f7d]">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}
