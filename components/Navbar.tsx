"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [infraOpen, setInfraOpen] = useState(false);
  const [devOpen, setDevOpen] = useState(false);
  const [autoOpen, setAutoOpen] = useState(false);

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

          {/* Infrastructure */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-[var(--accent-color)]">
              Infrastructure
            </span>

            <div className="absolute left-0 top-full opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white text-black rounded-lg shadow-lg w-64 p-4 space-y-2">

              <Link href="/managed-it" className="block hover:text-[var(--accent-color)]">
                Managed IT
              </Link>

              <Link href="/it-support" className="block hover:text-[var(--accent-color)]">
                IT Support
              </Link>

              <Link href="/network-infrastructure" className="block hover:text-[var(--accent-color)]">
                Network Infrastructure
              </Link>

              <Link href="/office-it-setup" className="block hover:text-[var(--accent-color)]">
                Office IT Setup
              </Link>

              <Link href="/pbx-phone-systems" className="block hover:text-[var(--accent-color)]">
                PBX Phone Systems
              </Link>

            </div>
          </div>

          {/* Development */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-[var(--accent-color)]">
              Development
            </span>

            <div className="absolute left-0 top-full opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white text-black rounded-lg shadow-lg w-64 p-4 space-y-2">

              <Link href="/website-development" className="block hover:text-[var(--accent-color)]">
                Website Development
              </Link>

              <Link href="/mobile-app-development" className="block hover:text-[var(--accent-color)]">
                Mobile App Development
              </Link>

              <Link href="/custom-software-development" className="block hover:text-[var(--accent-color)]">
                Custom Software Development
              </Link>

            </div>
          </div>

          {/* Automation */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-[var(--accent-color)]">
              Automation
            </span>

            <div className="absolute left-0 top-full opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 bg-white text-black rounded-lg shadow-lg w-64 p-4 space-y-2">

              <Link href="/automation-solutions" className="block hover:text-[var(--accent-color)]">
                Automation Solutions
              </Link>

              <Link href="/business-tools-development" className="block hover:text-[var(--accent-color)]">
                Business Tools Development
              </Link>

              <Link href="/system-integrations" className="block hover:text-[var(--accent-color)]">
                System Integrations
              </Link>

            </div>
          </div>

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

            {/* Infrastructure */}
            <button
              onClick={() => setInfraOpen(!infraOpen)}
              className="text-left"
            >
              Infrastructure
            </button>

            {infraOpen && (
              <div className="pl-4 flex flex-col gap-2">
                <Link href="/managed-it">Managed IT</Link>
                <Link href="/it-support">IT Support</Link>
                <Link href="/network-infrastructure">Network Infrastructure</Link>
                <Link href="/office-it-setup">Office IT Setup</Link>
                <Link href="/pbx-phone-systems">PBX Phone Systems</Link>
              </div>
            )}

            {/* Development */}
            <button
              onClick={() => setDevOpen(!devOpen)}
              className="text-left"
            >
              Development
            </button>

            {devOpen && (
              <div className="pl-4 flex flex-col gap-2">
                <Link href="/website-development">Website Development</Link>
                <Link href="/mobile-app-development">Mobile App Development</Link>
                <Link href="/custom-software-development">Custom Software Development</Link>
              </div>
            )}

            {/* Automation */}
            <button
              onClick={() => setAutoOpen(!autoOpen)}
              className="text-left"
            >
              Automation
            </button>

            {autoOpen && (
              <div className="pl-4 flex flex-col gap-2">
                <Link href="/automation-solutions">Automation Solutions</Link>
                <Link href="/business-tools-development">Business Tools Development</Link>
                <Link href="/system-integrations">System Integrations</Link>
              </div>
            )}

            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>

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