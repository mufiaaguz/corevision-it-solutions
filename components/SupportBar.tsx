"use client";

import Link from "next/link";

export default function SupportBar() {
  return (
    <div
      className="support-bar text-white px-6 py-3 md:py-2 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4"
      style={{ background: "var(--primary-color)" }}
    >
      <div className="text-center md:text-left">

        <p className="text-sm md:text-sm font-medium">
          Need IT support? Speak with our team today.
        </p>

        <p className="text-xs opacity-80 hidden md:block">
          Monday – Friday | 9:00 AM – 6:00 PM
        </p>

      </div>

      <div className="flex gap-3 flex-wrap">

        <Link
          href="tel:01113037963"
          className="btn-secondary-light text-sm"
        >
          Call Us
        </Link>

        <Link
          href="/contact"
          className="btn-primary text-sm"
        >
          Contact Us
        </Link>

      </div>
    </div>
  );
}