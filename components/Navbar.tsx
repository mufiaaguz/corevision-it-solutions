"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="w-full sticky top-0 z-50 border-b backdrop-blur-md"
      style={{
        background: "rgba(31,47,87,0.95)",
        borderColor: "rgba(255,255,255,0.08)"
      }}
    >
      <div className="container flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logoa.png"
            alt="CoreVision IT Solutions"
            width={180}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">

          <Link
            href="/"
            className="hover:text-[var(--accent-color)] transition-colors"
          >
            Home
          </Link>

          <Link
            href="/managed-it"
            className="hover:text-[var(--accent-color)] transition-colors"
          >
            Managed IT
          </Link>

          <Link
            href="/it-support"
            className="hover:text-[var(--accent-color)] transition-colors"
          >
            IT Support
          </Link>

          <Link
            href="/projects"
            className="hover:text-[var(--accent-color)] transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/about"
            className="hover:text-[var(--accent-color)] transition-colors"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-[var(--accent-color)] transition-colors"
          >
            Contact
          </Link>

        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            aria-label="Get IT support from CoreVision"
            className="btn-primary shadow-md hover:shadow-lg transition-all"
          >
            Get Support
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{ background: "var(--primary-color)" }}
        >
          <div className="container flex flex-col py-4 gap-4 text-sm text-white">

            <Link href="/" onClick={() => setOpen(false)}>Home</Link>

            <Link href="/managed-it" onClick={() => setOpen(false)}>
              Managed IT
            </Link>

            <Link href="/it-support" onClick={() => setOpen(false)}>
              IT Support
            </Link>

            <Link href="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Link
              href="/contact"
              className="btn-primary text-center shadow-md hover:shadow-lg transition-all"
            >
              Get Support
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}