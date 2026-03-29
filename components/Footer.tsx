import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-20 text-white"
      style={{ background: "var(--primary-color)" }}
    >
      <div className="container py-12 grid md:grid-cols-5 gap-8">

        {/* Company Intro */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            CoreVision IT Solutions
          </h3>

          <p className="text-sm" style={{ color: "var(--accent-light)" }}>
            Reliable IT infrastructure, development, and automation
            services for growing businesses across Klang Valley.
          </p>

          <p className="text-xs mt-4" style={{ color: "var(--accent-light)" }}>
            Supporting businesses across Kuala Lumpur, Petaling Jaya,
            Shah Alam, Subang Jaya and surrounding Klang Valley areas.
          </p>

          <p className="text-xs mt-4" style={{ color: "var(--accent-light)" }}>
            No. 28, Jalan Raja Jumaat, Taman Sri Istana, 41000, Klang Selangor
          </p>
        </div>

        {/* Infrastructure */}
        <div>
          <h4 className="font-semibold mb-3">Infrastructure</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/managed-it"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Managed IT
              </Link>
            </li>

            <li>
              <Link
                href="/it-support"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                IT Support
              </Link>
            </li>

            <li>
              <Link
                href="/network-infrastructure"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Network Infrastructure
              </Link>
            </li>

            <li>
              <Link
                href="/office-it-setup"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Office IT Setup
              </Link>
            </li>

            <li>
              <Link
                href="/pbx-phone-systems"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                PBX Phone Systems
              </Link>
            </li>
          </ul>
        </div>

        {/* Development */}
        <div>
          <h4 className="font-semibold mb-3">Development</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/website-development"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Website Development
              </Link>
            </li>

            <li>
              <Link
                href="/mobile-app-development"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Mobile App Development
              </Link>
            </li>

            <li>
              <Link
                href="/custom-software-development"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Custom Software Development
              </Link>
            </li>
          </ul>
        </div>

        {/* Automation */}
        <div>
          <h4 className="font-semibold mb-3">Automation</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/automation-solutions"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Automation Solutions
              </Link>
            </li>

            <li>
              <Link
                href="/business-tools-development"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Business Tools Development
              </Link>
            </li>

            <li>
              <Link
                href="/system-integrations"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                System Integrations
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div
        className="text-center text-sm py-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
      >
        © {new Date().getFullYear()} CoreVision IT Solutions. All rights reserved.
      </div>
    </footer>
  );
}