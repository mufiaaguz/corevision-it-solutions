import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About CoreVision IT Solutions | Klang Valley Business Technology Partner",
  description:
    "Learn about CoreVision IT Solutions and how we support growing businesses across Klang Valley with IT infrastructure, websites, software development, and automation solutions.",
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/about"
  },
  openGraph: {
    title: "About CoreVision IT Solutions",
    description:
      "CoreVision supports businesses across Klang Valley with infrastructure, development, and automation services.",
    url: "https://www.corevisionitsolutions.com/about",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

export default function About() {
  return (
    <>
      <section
        className="section"
        style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
      >
        <div className="container text-center max-w-4xl">
          <h1 className="heading-xl mb-4 text-white">
            About CoreVision IT Solutions
          </h1>

          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            CoreVision helps growing businesses across Klang Valley build,
            manage, and improve their technology environment through
            infrastructure, development, and automation services.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">Who We Are</h2>

            <p className="text-body mb-4">
              CoreVision IT Solutions was established to provide structured
              and dependable technology services for small and medium-sized
              businesses. Many SMEs rely heavily on technology but often do
              not have the internal resources to manage infrastructure,
              development needs, and day-to-day system improvement on their own.
            </p>

            <p className="text-body mb-4">
              Our approach is practical and business-focused. We help
              organisations maintain stable IT environments, deploy reliable
              infrastructure, and implement systems that improve how teams work.
            </p>

            <p className="text-body">
              In addition to managed IT and support, CoreVision also develops
              websites, custom software, mobile applications, and automation
              solutions that help businesses modernise operations without
              unnecessary complexity.
            </p>
          </div>

          <div className="card">
            <h3 className="heading-md mb-4">Our Mission</h3>

            <p className="text-body mb-4">
              Our mission is to help businesses operate confidently by
              delivering reliable infrastructure, practical development
              solutions, and structured automation that support long-term
              growth.
            </p>

            <p className="text-body">
              When technology is properly planned, implemented, and supported,
              businesses can focus on productivity, customer service, and
              operational improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container text-center">
          <h2 className="heading-lg mb-10">
            Businesses We Support
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-10">
            CoreVision works with small and medium-sized organisations that
            need dependable technology, structured implementation, and
            practical long-term support.
          </p>

          <div className="grid md:grid-cols-5 gap-6 text-left">
            <div className="card text-center">
              <p className="font-semibold">Law Firms</p>
            </div>

            <div className="card text-center">
              <p className="font-semibold">Medical Clinics</p>
            </div>

            <div className="card text-center">
              <p className="font-semibold">Professional Offices</p>
            </div>

            <div className="card text-center">
              <p className="font-semibold">Retail Businesses</p>
            </div>

            <div className="card text-center">
              <p className="font-semibold">Growing SMEs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container text-center">
          <h2 className="heading-lg mb-10">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="card">
              <h3 className="heading-md mb-4">Infrastructure</h3>
              <p className="text-body">
                Managed IT, IT support, network infrastructure, office IT setup,
                and PBX phone systems designed to keep business environments
                stable, secure, and ready for daily operations.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">Development</h3>
              <p className="text-body">
                Business websites, mobile applications, and custom software
                solutions built to support operations, improve digital presence,
                and create systems aligned with business workflows.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">Automation</h3>
              <p className="text-body">
                Automation solutions, internal business tools, and system
                integrations that reduce repetitive work, improve visibility,
                and help teams operate more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container text-center">
          <h2 className="heading-lg mb-6">
            Supporting Businesses Across Klang Valley
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-8">
            CoreVision supports businesses throughout Klang Valley with a
            combination of remote support, onsite project work, and practical
            technology planning for growing organisations.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/projects" className="btn-secondary">
              View Projects
            </Link>

            <Link href="/contact" className="btn-primary">
              Contact CoreVision
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}