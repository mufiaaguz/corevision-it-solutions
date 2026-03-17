import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="section"
      style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
    >
      <div className="container grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          {/* Service Area Badge */}
          <div className="mb-4 text-sm font-medium text-white/80">
            Serving Businesses Across Klang Valley
          </div>

          <h1 className="heading-xl mb-6 text-white">
            IT Infrastructure, Software & Automation for Growing Businesses
          </h1>

          <p className="text-lg mb-8 text-white/90">
            CoreVision IT Solutions helps businesses across Klang Valley build,
            manage, and improve their technology environment — from managed IT
            services and support to websites, custom systems, and automation
            solutions.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/90">

            <span className="bg-white/10 px-3 py-1 rounded">
              Infrastructure
            </span>

            <span className="bg-white/10 px-3 py-1 rounded">
              Development
            </span>

            <span className="bg-white/10 px-3 py-1 rounded">
              Automation
            </span>

          </div>

          <div className="flex gap-4 flex-wrap">

            <Link href="/contact" className="btn-primary">
              Request Consultation
            </Link>

            <Link href="/managed-it" className="btn-secondary-light">
              View Services
            </Link>

          </div>

          {/* Emergency Support */}
          <div className="mt-8 text-sm text-white/90">
            Need urgent IT help?{" "}
            <a
              href="https://wa.me/601113037963"
              className="underline font-semibold"
            >
              WhatsApp our support team
            </a>
          </div>

        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-2 gap-6">

          <div className="card text-center">
            <h3 className="font-semibold mb-2 text-[var(--primary-color)]">
              Infrastructure
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Managed IT, networking, office setup and business systems support.
            </p>
          </div>

          <div className="card text-center">
            <h3 className="font-semibold mb-2 text-[var(--primary-color)]">
              Development
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Websites, mobile applications and custom software for business growth.
            </p>
          </div>

          <div className="card text-center">
            <h3 className="font-semibold mb-2 text-[var(--primary-color)]">
              Automation
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Workflow automation, internal tools and system integrations.
            </p>
          </div>

          <div className="card text-center">
            <h3 className="font-semibold mb-2 text-[var(--primary-color)]">
              Local Support
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Remote and onsite support for businesses across Klang Valley.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}