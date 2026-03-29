"use client";

import Link from "next/link";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {

      await emailjs.sendForm(
        "service_g9dgsnj",
        "template_ycvpc0d",
        formRef.current,
        "9KhxxiZs90b3rYQZq"
      );

      alert("Support request sent successfully.");

      formRef.current.reset();

    }
    catch (error: any) {
      console.error("EMAILJS ERROR:", error);
      alert(JSON.stringify(error));
    }
  };

  return (
    <>
      {/* Header */}
      <section className="section bg-blue-50">
        <div className="container text-center">
          <h1 className="heading-xl mb-4">Contact CoreVision</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Need help with your IT systems? Our team is ready to assist.
            Contact CoreVision IT Solutions for support, consultation,
            or business enquiries.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container grid md:grid-cols-3 gap-8 text-center">

          <div className="card">
            <h3 className="heading-md mb-4">Phone Support</h3>
            <p className="text-gray-600 mb-4">
              Speak directly with our support team.
            </p>
            <p className="font-semibold text-lg">
              011-13037963
            </p>
          </div>

          <div className="card">
            <h3 className="heading-md mb-4">Support Email</h3>
            <p className="text-gray-600 mb-4">
              For IT assistance and technical issues.
            </p>
            <p className="font-semibold text-lg">
              support@corevisionitsolutions.com
            </p>
          </div>

          <div className="card">
            <h3 className="heading-md mb-4">Business Enquiries</h3>
            <p className="text-gray-600 mb-4">
              For managed services or project consultation.
            </p>
            <p className="font-semibold text-lg">
              sales@corevisionitsolutions.com
            </p>
          </div>

          <div className="card">
            <h3 className="heading-md mb-4">Business Address</h3>
            <p className="text-gray-600 mb-4">
              Visit us at our business location.
            </p>
            <p className="font-semibold text-lg">
              No. 28, Jalan Raja Jumaat, Taman Sri Istana, 41000, Klang Selangor
            </p>
          </div>

        </div>
      </section>

      {/* Service Hours */}
      <section className="section bg-gray-50">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">Service Hours</h2>

          <p className="text-gray-600 mb-4">
            Monday – Friday
          </p>

          <p className="text-lg font-semibold mb-6">
            9:00 AM – 6:00 PM
          </p>

          <p className="text-gray-600">
            After-hours and emergency support available upon request.
          </p>

        </div>
      </section>

      {/* Map */}
      <section className="section">
        <div className="container max-w-3xl mx-auto">

          <iframe
            src="https://www.google.com/maps?q=No.+28,+Jalan+Raja+Jumaat,+Taman+Sri+Istana,+41000,+Klang+Selangor&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container max-w-xl">

          <h2 className="heading-lg text-center mb-8">
            Request IT Support
          </h2>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="card space-y-4"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border p-3 rounded-md"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-md"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="w-full border p-3 rounded-md"
            />

            <textarea
              name="message"
              placeholder="Describe your IT issue or enquiry"
              rows={4}
              className="w-full border p-3 rounded-md"
              required
            />

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Submit Request
            </button>

          </form>

        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Prefer to Speak With Us?
          </h2>

          <p className="text-gray-600 mb-8">
            Contact our team directly for immediate assistance.
          </p>

          <Link href="tel:01113037963" className="btn-primary">
            Call CoreVision
          </Link>

        </div>
      </section>
    </>
  );
}