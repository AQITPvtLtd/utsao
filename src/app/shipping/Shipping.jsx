"use client";
import React from "react";

export default function Shipping() {
  return (
    <section className="bg-white text-gray-900 w-full py-16 px-6 md:px-12 lg:px-20">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 underline underline-offset-4">
        Shipping and Delivery Timeline
      </h1>

      {/* Processing Time */}
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Processing Time</h2>
        <p className="text-base leading-relaxed">
          Orders are typically processed within 1-2 business days after payment
          confirmation, excluding weekends and holidays.
        </p>
      </div>

      {/* Shipping Methods */}
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Shipping Methods</h2>
        <p className="text-base leading-relaxed">
          We offer standard and expedited shipping options. Standard shipping
          delivers within 3-7 business days, while expedited shipping delivers
          within 1-3 business days.
        </p>
      </div>

      {/* Shipping Fees */}
      <div className="mb-6">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Shipping Fees</h2>
        <p className="text-base leading-relaxed">
          Shipping fees are calculated based on the shipping method selected,
          the destination, and the weight/dimensions of the package. Customers
          can view shipping fees during checkout before completing their
          purchase.
        </p>
      </div>

      {/* Shipping Restrictions */}
      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          Shipping Restrictions
        </h2>
        <p className="text-base leading-relaxed">
          Certain products may have shipping restrictions based on local laws or
          carrier policies. Customers will be notified of any shipping
          restrictions during the checkout process.
        </p>
      </div>
    </section>
  );
}
