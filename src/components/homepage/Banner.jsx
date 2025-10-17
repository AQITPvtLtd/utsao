"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef } from "react";
import Image from "next/image";
import { GrPrevious, GrNext } from "react-icons/gr";

// ✅ Custom Next Arrow
const NextArrow = ({ onClick }) => (
    <div
        className="absolute text-black top-1/2 right-3 -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
    >
        <GrNext size={28} />
    </div>
);

// ✅ Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 text-black left-3 -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
    >
        <GrPrevious size={28} />
    </div>
);

function Banner() {
    const sliderRef = useRef(null);


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipeToSlide: true,
                },
            },
        ],
    };

    const data = [
        { img: "/banner/banner1.webp", alt: "Banner 1" },
        { img: "/banner/banner2.webp", alt: "Banner 2" },
        { img: "/banner/banner3.webp", alt: "Banner 3" },
    ];

    return (
        <div className="overflow-hidden w-full lg:mt-35 mt-20 relative">
            <Slider {...settings} ref={sliderRef}>
                {data.map((d, index) => (
                    <div
                        key={index}
                        className="relative w-full md:h-[550px] sm:h-[400px] h-[150px]"
                    >
                        <Image
                            src={d.img}
                            alt={d.alt}
                            fill
                            priority
                            className="object-cover object-top"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Banner;
