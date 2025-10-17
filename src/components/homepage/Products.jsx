"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productlist } from "@/services/products";
import { GrPrevious, GrNext } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

// ✅ Disable SSR for Slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// ✅ Custom Arrows (minimal gradient style)
const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer p-2 rounded-full hover:scale-110 transition-transform shadow-md z-10"
    aria-label="Next"
  >
    <GrNext size={18} />
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black text-white cursor-pointer p-2 rounded-full hover:scale-110 transition-transform shadow-md z-10"
    aria-label="Previous"
  >
    <GrPrevious size={18} />
  </button>
);

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await productlist();
        setProduct(result || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-700">Loading products...</p>;

  return (
    <section className="relative bg-white py-10 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Explore Our <span className="text-transparent bg-clip-text bg-[#b89f7d]">Products</span>
          </h2>
        </div>

        {/* Product Slider */}
        {product.length === 0 ? (
          <p className="text-center text-gray-600">No products available.</p>
        ) : (
          <div className="unique-slider">
            <Slider {...settings}>
              {product.map((pr) => (
                <div key={pr.id || pr.title} className="px-4 pt-5 pb-5">
                  <div className="group relative backdrop-blur-xl bg-white/60 border border-gray-100 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                    {/* Image Section */}
                    <div className="relative h-52 overflow-hidden">
                      {pr.image ? (
                        <Image
                          src={`/products/${pr.image}`}
                          alt={pr.title || "product image"}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="bg-gray-200 flex items-center justify-center h-full">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col text-center">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                        {pr.title || "Untitled Product"}
                      </h3>

                      {pr.url && (
                        <Link href={`/products/${pr.url}`} className="mt-auto">
                          <button
                            className="relative bg-gradient-to-r cursor-pointer from-[#efdecc] to-[#d5c1a9] border-2 border-[#efdecc] text-black inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:bg-none"
                          >
                            <span className="relative z-10">Learn More</span>
                          </button>

                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>

      {/* Global equal-height fix */}
      <style jsx global>{`
        .unique-slider .slick-track {
          display: flex !important;
          align-items: stretch !important;
        }
        .unique-slider .slick-slide {
          height: auto !important;
          display: flex !important;
        }
        .unique-slider .slick-slide > div {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Products;
