"use client";
import React, { useEffect, useState } from "react";
import { productlist } from "@/services/products";
import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getResult() {
      try {
        const result = await productlist();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching treatments:", error.message);
        setProduct([]);
      } finally {
        setLoading(false);
      }
    }
    getResult();
  }, []);

  if (loading)
    return <p className="text-center text-gray-700 py-8">Loading products...</p>;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-wide text-gray-800 uppercase"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Explore Our <span className="text-[#b89f7d]">Products</span>
          </h2>
          <div className="w-20 h-1 bg-[#efdecc] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Treatments Grid */}
        {product.length === 0 ? (
          <p className="text-center text-gray-700">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {product.map((pr) => (
              <div
                key={pr.id || pr.title}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:ring-2 hover:ring-[#efdecc] hover:ring-offset-2 flex flex-col overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                  {pr.image ? (
                    <Image
                      src={`/products/${pr.image}`}
                      alt={pr.title || "Treatment image"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      No Image
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 flex-1">
                  <h3
                    className="text-xl font-semibold text-center text-gray-800 mb-3 leading-snug"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight: "3.5rem",
                    }}
                  >
                    {pr.title || "Untitled"}
                  </h3>

                  {/* Button */}
                  {pr.url && (
                    <div className="text-center mt-auto">
                      <Link href={`/products/${pr.url}`}>
                        <button className="bg-gradient-to-r from-[#efdecc] to-[#d5c1a9] text-black cursor-pointer px-8 py-2 rounded-full font-medium shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 duration-300">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
