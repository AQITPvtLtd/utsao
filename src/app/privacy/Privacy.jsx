"use client";
import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-16 lg:px-32 py-10">
      <h1 className="text-3xl font-bold mb-8 underline">Privacy Policy</h1>

      <div className="space-y-8">
        {/* Collection of Information */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Collection of Information</h2>
          <p className="text-base leading-relaxed">
            We collect personal information such as names, email addresses, phone numbers, and shipping addresses when provided voluntarily by users during the checkout process or through account registration.
          </p>
        </section>

        {/* Use of Information */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Use of Information</h2>
          <p className="text-base leading-relaxed">
            The collected information is used for order processing, shipping, customer support, and marketing purposes. We may also use cookies and similar technologies to enhance user experience and gather analytics data.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <p className="text-base leading-relaxed">
            We implement industry-standard security measures to protect user information from unauthorized access, disclosure, alteration, or destruction.
          </p>
        </section>

        {/* Sharing of Information */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Sharing of Information</h2>
          <p className="text-base leading-relaxed">
            We do not sell, trade, or otherwise transfer user information to third parties without explicit consent, except for trusted third parties involved in order fulfillment, payment processing, or providing essential services to our business.
          </p>
        </section>

        {/* Opt-Out */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Opt-Out</h2>
          <p className="text-base leading-relaxed">
            Users can opt-out of marketing communications and update their preferences regarding the use of their personal information.
          </p>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Changes to Policy</h2>
          <p className="text-base leading-relaxed">
            We reserve the right to update our privacy policy periodically. Users will be notified of any significant changes.
          </p>
        </section>
      </div>
    </div>
  );
}
