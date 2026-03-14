import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-20 text-white"
      style={{ background: "var(--primary-color)" }}
    >
      <div className="container py-12 grid md:grid-cols-4 gap-8">

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            CoreVision IT Solutions
          </h3>

          <p className="text-sm" style={{ color: "var(--accent-light)" }}>
            Reliable IT support and managed IT services for growing businesses
            across Klang Valley.
          </p>

          <p className="text-xs mt-4" style={{ color: "var(--accent-light)" }}>
            Supporting businesses across Kuala Lumpur, Petaling Jaya,
            Shah Alam, Subang Jaya and surrounding Klang Valley areas.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>

          <ul className="space-y-2 text-sm">

            <li>
              <Link
                href="/managed-it"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Managed IT Services
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
                href="/projects"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Infrastructure Projects
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                PBX Phone Systems
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                Network Deployment
              </Link>
            </li>

          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>

          <ul className="space-y-2 text-sm">

            <li>
              <Link
                href="/about"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                About CoreVision
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                IT Projects
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

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>

          <ul className="space-y-2 text-sm">

            <li>
              Phone:{" "}
              <a
                href="tel:01113037963"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                011-13037963
              </a>
            </li>

            <li>
              Email:{" "}
              <a
                href="mailto:support@corevisionitsolutions.com"
                className="text-[color:var(--accent-light)] hover:text-white transition-colors"
              >
                support@corevisionitsolutions.com
              </a>
            </li>

            <li>Klang Valley, Malaysia</li>

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