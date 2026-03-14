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
            Reliable IT Support for Growing Businesses
          </h1>

          <p className="text-lg mb-8 text-white/90">
            CoreVision IT Solutions delivers managed IT services, proactive
            system monitoring, and professional technical support for
            businesses across Klang Valley.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 mb-8 text-sm text-white/90">

            <span className="bg-white/10 px-3 py-1 rounded">
              Managed IT Services
            </span>

            <span className="bg-white/10 px-3 py-1 rounded">
              SME IT Specialists
            </span>

            <span className="bg-white/10 px-3 py-1 rounded">
              Remote & Onsite Support
            </span>

          </div>

          <div className="flex gap-4 flex-wrap">

            <Link href="/contact" className="btn-primary">
              Request IT Support
            </Link>

            <Link href="/managed-it" className="btn-secondary-light">
              View Managed IT Plans
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
              24/7 Monitoring
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Continuous system monitoring to prevent downtime.
            </p>
          </div>

          <div className="card text-center">
            <h3 className="font-semibold mb-2 text-[var(--primary-color)]">
              Security Protection
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Managed antivirus and patch management.
            </p>
          </div>

          <div className="card text-center">
            <h3 className="font-semibold mb-2 text-[var(--primary-color)]">
              Fast IT Support
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Remote and onsite technical support.
            </p>
          </div>

          <div className="card text-center">
            <h3 className="font-semibold mb-2 text-[var(--primary-color)]">
              Predictable Cost
            </h3>
            <p className="text-sm text-[var(--text-muted)]">
              Fixed monthly IT service plans.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}