"use client";
import React from "react";

export default function Refund() {
    return (
        <div className="min-h-screen bg-white text-black px-6 md:px-16 lg:px-32 py-10">
            {/* RETURN */}
            <section className="mb-12">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">RETURN</h1>
                <p className="text-base leading-relaxed mb-4">
                    Returns are acceptable with replacement of the products or reversal of full amount paid by the customer
                    within 7 days of receipt of the product. However, returns are limited to the following cases:
                </p>

                <p className="text-base leading-relaxed mb-4">
                    <span className="font-semibold">In case of damaged or defective products:</span> Do not worry, if upon
                    delivery of the product, you find that the product is received in damaged condition immediately notify our
                    Customer Care team at{" "}
                    <a href="tel:9582930940" className="text-blue-600 hover:underline">
                        9582-930-940
                    </a>{" "}
                    or{" "}
                    <a href="mailto:utsaoglobal@gmail.com" className="text-blue-600 hover:underline">
                        utsaoglobal@gmail.com
                    </a>
                    . We will refund or send a replacement product, depending on your preference after necessary verification. The
                    contents of your shipment and the original packing must be returned along with the damaged or defective
                    products.
                </p>

                <p className="text-base leading-relaxed">
                    <span className="font-semibold">In case of different product dispatched:</span> Do not worry, if upon
                    delivery of the product, you discover that we have dispatched a different product, immediately notify our
                    Customer Care team at{" "}
                    <a href="tel:9582930940" className="text-blue-600 hover:underline">
                        9582-930-940
                    </a>{" "}
                    or{" "}
                    <a href="mailto:utsaoglobal@gmail.com" className="text-blue-600 hover:underline">
                        utsaoglobal@gmail.com
                    </a>
                    . We will refund or send a replacement product, depending on your preference. The contents of your shipment
                    and the original packing must be returned along with the products.
                </p>
            </section>

            {/* REFUND */}
            <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">REFUND</h2>
                <p className="text-base leading-relaxed mb-4">
                    We will initiate your refund within 3 working days of our confirmation. However, it may take 7–15 working days
                    to get it credited / reflected in your bank or credit card account statement as this involves inter-bank refund
                    procedures which may take time.
                </p>

                <p className="text-base leading-relaxed font-semibold">
                    *Smithways reserve the right to change or update the above policy at any time by placing a notice on the
                    website. Such changes or updates shall be effective immediately upon posting to the website.
                </p>
            </section>

            {/* CANCELLATION */}
            <section>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">CANCELLATION</h2>
                <p className="text-base leading-relaxed">
                    Cancellations are allowed without any question asked in case of orders with COD payment mode and for prepaid orders, there will be a deduction of the base fee charged from us by the payment processing merchant and the remaining amount will be refunded. However, it is allowed only till the time product is not shipped from our warehouses. Please contact our Customer Care team immediately at{" "}
                    <a href="tel:9582930940" className="text-blue-600 hover:underline">
                        9582-930-940
                    </a>{" "}
                    or{" "}
                    <a href="mailto:utsaoglobal@gmail.com" className="text-blue-600 hover:underline">
                        utsaoglobal@gmail.com
                    </a>
                    to assist you in the cancellation of the order.
                </p>
            </section>
        </div>
    );
}
