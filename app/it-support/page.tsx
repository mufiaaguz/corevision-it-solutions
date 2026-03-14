import Link from "next/link";

export default function ITSupport() {
  return (
    <>
      {/* Header */}
      <section className="section bg-blue-50">
        <div className="container text-center">
          <h1 className="heading-xl mb-4">IT Support Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fast and reliable IT support for businesses across Klang Valley.
            Whether you need remote troubleshooting or onsite assistance,
            CoreVision provides structured IT support when your business
            needs it most.
          </p>
        </div>
      </section>

      {/* Remote Support */}
      <section className="section">
        <div className="container">
          <h2 className="heading-lg mb-10 text-center">
            Remote IT Support
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-gray-600 mb-6">
                Remote support allows our technicians to troubleshoot and
                resolve IT issues quickly without requiring an onsite visit.
                This approach reduces downtime and restores operations faster.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>Microsoft 365 email troubleshooting</li>
                <li>Software errors and application issues</li>
                <li>VPN and connectivity problems</li>
                <li>User account and permission management</li>
                <li>General system troubleshooting</li>
              </ul>
            </div>

            <div className="card text-center">
              <h3 className="heading-md mb-4">Remote Support Pricing</h3>
              <p className="text-3xl font-bold mb-4">
                RM80<span className="text-base font-normal"> / hour</span>
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Minimum 1 hour billing applies.
              </p>

              <Link href="/contact" className="btn-primary">
                Request Support
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Onsite Support */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="heading-lg mb-10 text-center">
            Onsite IT Support
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div className="card text-center">
              <h3 className="heading-md mb-4">Onsite Support Pricing</h3>

              <ul className="space-y-3 text-gray-600 mb-6">
                <li><strong>First Hour:</strong> RM150</li>
                <li><strong>Second Hour:</strong> RM120</li>
                <li><strong>Additional Hours:</strong> RM90 / hour</li>
              </ul>

              <Link href="/contact" className="btn-primary">
                Book Technician
              </Link>
            </div>

            <div>
              <p className="text-gray-600 mb-6">
                When a technician must physically visit your office,
                CoreVision provides professional onsite IT support for
                troubleshooting, hardware installation, and network issues.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>Desktop and laptop troubleshooting</li>
                <li>Printer and device setup</li>
                <li>Network and WiFi issues</li>
                <li>Server connectivity troubleshooting</li>
                <li>Hardware diagnostics</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Standard Services */}
      <section className="section">
        <div className="container text-center">
          <h2 className="heading-lg mb-10">
            Common IT Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="card">
              <h3 className="font-semibold mb-3">New PC Setup</h3>
              <p className="text-gray-600 text-sm mb-2">
                Setup and configuration for new computers and workstations.
              </p>
              <p className="font-semibold">From RM150</p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-3">PC Reformat / OS Installation</h3>
              <p className="text-gray-600 text-sm mb-2">
                Fresh system installation and system optimisation.
              </p>
              <p className="font-semibold">From RM220</p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-3">Printer Setup</h3>
              <p className="text-gray-600 text-sm mb-2">
                Printer installation and shared network configuration.
              </p>
              <p className="font-semibold">From RM150</p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-3">Network Troubleshooting</h3>
              <p className="text-gray-600 text-sm mb-2">
                Diagnose connectivity issues and network performance.
              </p>
              <p className="font-semibold">From RM150</p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-3">NAS Setup</h3>
              <p className="text-gray-600 text-sm mb-2">
                Configure shared storage and backup systems.
              </p>
              <p className="font-semibold">From RM450</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="heading-lg mb-6">
            Need Immediate IT Assistance?
          </h2>

          <p className="text-gray-600 mb-8">
            Contact CoreVision IT Solutions and our team will help restore
            your systems quickly and professionally.
          </p>

          <Link href="/contact" className="btn-primary">
            Contact Support
          </Link>
        </div>
      </section>
    </>
  );
}