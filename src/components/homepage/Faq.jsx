"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    { question: 'What kind of gifts do you offer?', answer: 'We create luxury gift boxes featuring handpicked gourmet assortments such as nuts, berries, chocolates, and artisanal delights all designed to make a lasting impression.' },
    { question: 'Can I personalize the gift box for my company/event?', answer: 'Absolutely. We offer customized branding: logos, ribbons, printed notes, sleeve wraps, and more ideal for corporate gifting, weddings, or special campaigns.' },
    { question: 'Are these gifts suitable for festivals or weddings?', answer: 'Yes! Our collections are especially popular during Diwali, Eid, Christmas, Rakhi, and wedding seasons. We even create bespoke wedding favors.' },
    { question: 'What sizes or options are available?', answer: 'We offer individual boxes, jar combos, hampers, and large-scale gifting solutions. You can select according to quantity, flavor preferences, or theme.' },
    {
        question: 'What’s the delivery timeline?', answer: `<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:115%;font-size:16px;font-family:"Aptos",sans-serif;'>Standard orders: 2&ndash;4 working days</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:115%;font-size:16px;font-family:"Aptos",sans-serif;'>Bulk/custom orders: 5&ndash;7 days (based on location and quantity)</p>
<p><span style='font-size:16px;line-height:115%;font-family:"Aptos",sans-serif;'>Express delivery available in metro cities</span></p>` },
    { question: 'Do you offer corporate pricing?', answer: 'Yes. For bulk gifting, we offer tailored pricing, design support, and end-to-end delivery coordination. Contact our gifting consultants for a quote.' },
    { question: 'Are your gifts eco-conscious?', answer: 'We’re moving toward sustainable packaging  using recyclable jars, minimal plastic, and eco-friendly boxes wherever possible.' },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqRefs = useRef([]);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        faqRefs.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                { autoAlpha: 0, y: 30 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        toggleActions: "play none none reset", // repeat on scroll
                    },
                }
            );
        });
    }, []);

    return (
        <section className="bg-white">
            <section className="lg:py-20 py-10 px-6 md:px-12 lg:px-24 lg:mx-15 mx-5">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Heading */}
                    <div>
                        <h2 className="lg:text-5xl text-3xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
                            Frequently Asked<br /><span className="text-[#b89f7d]">Questions</span>
                        </h2>
                        <span className="block w-16 h-1 bg-[#efdecc] mt-3 rounded-full"></span>
                    </div>

                    {/* Right Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                ref={(el) => (faqRefs.current[index] = el)}
                                className="border-b pb-4 opacity-0"
                            >
                                <button
                                    className="w-full flex cursor-pointer justify-between items-center text-left text-gray-900 font-semibold text-base focus:outline-none"
                                    onClick={() => toggle(index)}
                                >
                                    {faq.question}
                                    <FaChevronDown
                                        className={`transform transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""
                                            } text-gray-500`}
                                    />
                                </button>
                                {activeIndex === index && (
                                    <p
                                        className="mt-2 text-sm text-gray-600"
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Faq;
