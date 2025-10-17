"use client";
import { productlist } from "@/services/products";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const DetailedProduct = ({ url }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const result = await productlist();
        const fetched = result.result || result;
        setProducts(fetched);
        const foundProduct = fetched.find((productlist) => productlist.url === url);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  useEffect(() => {
    if (product) {
      document.title = product.meta_title || product.title || "Product";
    }
  }, [product]);

  if (loading)
    return (
      <p className="text-center py-16 text-gray-700 text-lg animate-pulse">
        Loading...
      </p>
    );

  if (!product)
    return (
      <p className="text-center py-16 text-gray-700 text-lg">
        Product not found.
      </p>
    );

  return (
    <>
      <Head>
        <title>{product.meta_title || product.title}</title>
      </Head>

      <section className="bg-white min-h-screen py-14 px-4 md:px-12 lg:px-20 text-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* MAIN PRODUCT SECTION */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* IMAGE */}
              <div className="relative w-full h-[420px] md:h-[500px]">
                <Image
                  src={
                    product.image?.startsWith("http")
                      ? product.image
                      : `/products/${product.image}`
                  }
                  alt={product.title || "Product image"}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-10">
                <h1
                  className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 tracking-tight"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  {product.title}
                </h1>
                <div
                  className="text-lg leading-relaxed text-gray-800"
                  dangerouslySetInnerHTML={{ __html: product.content }}
                />
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
              <h2 className="bg-[#efdecc] text-black text-center py-4 font-semibold text-xl tracking-wide" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Explore More Products
              </h2>
              <ul className="divide-y divide-gray-200">
                {products.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`${p.url}`}
                      className="block px-5 py-3 text-gray-800 hover:bg-[#efdecc] hover:text-black transition-all duration-200 font-medium"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional CTA Box */}
            <div className="mt-8 text-white border-2 border-[#efdecc] rounded-xl shadow-md p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-black" style={{ fontFamily: "'Dancing Script', cursive" }}>Need Assistance?</h3>
              <p className="text-sm mb-4 opacity-90 text-black">
                Contact our team for bulk orders or customization options.
              </p>
              <Link
                href="/contact"
                className="bg-[#efdecc] border-2 border-[#efdecc] text-black px-4 py-2 rounded-full font-semibold hover:bg-white transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailedProduct;
