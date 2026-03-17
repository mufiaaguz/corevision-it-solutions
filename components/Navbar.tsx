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
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="container flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logoa.png" alt="CoreVision" width={140} height={40} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-white text-sm">

          <Link href="/">Home</Link>

          {/* Infrastructure */}
          <div className="relative group">
            <button className="hover:text-[#6DB8D6]">Infrastructure</button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <div className="flex flex-col p-4 gap-2 text-sm">
                <Link href="/managed-it">Managed IT</Link>
                <Link href="/it-support">IT Support</Link>
                <Link href="/network-infrastructure">Network Infrastructure</Link>
                <Link href="/office-it-setup">Office IT Setup</Link>
                <Link href="/pbx-phone-systems">PBX Phone Systems</Link>
              </div>
            </div>
          </div>

          {/* Development */}
          <div className="relative group">
            <button className="hover:text-[#6DB8D6]">Development</button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <div className="flex flex-col p-4 gap-2 text-sm">
                <Link href="/website-development">Website Development</Link>
                <Link href="/mobile-app-development">Mobile App Development</Link>
                <Link href="/custom-software-development">Custom Software</Link>
              </div>
            </div>
          </div>

          {/* Automation */}
          <div className="relative group">
            <button className="hover:text-[#6DB8D6]">Automation</button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-xl shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition">
              <div className="flex flex-col p-4 gap-2 text-sm">
                <Link href="/automation-solutions">Automation Solutions</Link>
                <Link href="/business-tools-development">Business Tools</Link>
                <Link href="/system-integrations">System Integrations</Link>
              </div>
            </div>
          </div>

          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Request Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1F2F57] text-white px-6 pb-6">

          <Link href="/" className="block py-2">Home</Link>

          {/* Infrastructure */}
          <button
            onClick={() => setInfraOpen(!infraOpen)}
            className="w-full text-left py-2"
          >
            Infrastructure
          </button>
          {infraOpen && (
            <div className="pl-4 text-sm">
              <Link href="/managed-it" className="block py-1">Managed IT</Link>
              <Link href="/it-support" className="block py-1">IT Support</Link>
              <Link href="/network-infrastructure" className="block py-1">Network Infrastructure</Link>
              <Link href="/office-it-setup" className="block py-1">Office IT Setup</Link>
              <Link href="/pbx-phone-systems" className="block py-1">PBX Phone Systems</Link>
            </div>
          )}

          {/* Development */}
          <button
            onClick={() => setDevOpen(!devOpen)}
            className="w-full text-left py-2"
          >
            Development
          </button>
          {devOpen && (
            <div className="pl-4 text-sm">
              <Link href="/website-development" className="block py-1">Website Development</Link>
              <Link href="/mobile-app-development" className="block py-1">Mobile App Development</Link>
              <Link href="/custom-software-development" className="block py-1">Custom Software</Link>
            </div>
          )}

          {/* Automation */}
          <button
            onClick={() => setAutoOpen(!autoOpen)}
            className="w-full text-left py-2"
          >
            Automation
          </button>
          {autoOpen && (
            <div className="pl-4 text-sm">
              <Link href="/automation-solutions" className="block py-1">Automation Solutions</Link>
              <Link href="/business-tools-development" className="block py-1">Business Tools</Link>
              <Link href="/system-integrations" className="block py-1">System Integrations</Link>
            </div>
          )}

          <Link href="/projects" className="block py-2">Projects</Link>
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/contact" className="block py-2">Contact</Link>

          <Link href="/contact" className="btn-primary mt-4 inline-block">
            Request Consultation
          </Link>
        </div>
      )}
    </header>
  );
}