import Link from "next/link";

export default function ManagedIT() {
  return (
    <>
      {/* Page Header */}
      <section className="section bg-blue-50">
        <div className="container text-center">
          <h1 className="heading-xl mb-4">Managed IT Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proactive IT management designed for SMEs in Klang Valley.
            CoreVision monitors, secures, and maintains your IT environment
            so your business can operate without disruption.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">
            Managed IT Service Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Core Start */}
            <div className="card text-left">
              <h3 className="heading-md mb-2">Core Start</h3>
              <p className="text-sm text-gray-500 mb-4">
                For small offices (1–5 users)
              </p>

              <p className="text-3xl font-bold mb-6">
                RM1200<span className="text-base font-normal"> / month</span>
              </p>

              <ul className="space-y-3 text-gray-600 text-sm mb-4">
                <li>Up to 5 devices included</li>
                <li>24/7 device monitoring</li>
                <li>Managed antivirus protection</li>
                <li>Patch management & updates</li>
                <li>Remote IT support</li>
                <li>1 onsite support visit per month</li>
                <li>Vendor coordination</li>
                <li>Backup monitoring</li>
              </ul>

              <p className="text-sm text-gray-500 mb-6">
                Additional device: RM140 / device / month
              </p>

              <Link href="/contact" className="btn-primary block text-center">
                Get Started
              </Link>
            </div>

            {/* Core Growth */}
            <div className="card text-left border-2 border-[#2B7FFF]">
              <h3 className="heading-md mb-2">Core Growth</h3>
              <p className="text-sm text-gray-500 mb-4">
                For growing businesses (6–15 users)
              </p>

              <p className="text-3xl font-bold mb-6">
                RM2200<span className="text-base font-normal"> / month</span>
              </p>

              <ul className="space-y-3 text-gray-600 text-sm mb-4">
                <li>Up to 10 devices included</li>
                <li>Everything in Core Start</li>
                <li>Network & firewall monitoring</li>
                <li>IT asset documentation</li>
                <li>2 onsite visits per month</li>
                <li>Monthly system health review</li>
                <li>Backup monitoring & reporting</li>
              </ul>

              <p className="text-sm text-gray-500 mb-6">
                Additional device: RM130 / device / month
              </p>

              <Link href="/contact" className="btn-primary block text-center">
                Get Started
              </Link>
            </div>

            {/* Core Business */}
            <div className="card text-left">
              <h3 className="heading-md mb-2">Core Business</h3>
              <p className="text-sm text-gray-500 mb-4">
                For established SMEs (15–25 users)
              </p>

              <p className="text-3xl font-bold mb-6">
                RM3500<span className="text-base font-normal"> / month</span>
              </p>

              <ul className="space-y-3 text-gray-600 text-sm mb-4">
                <li>Up to 20 devices included</li>
                <li>Everything in Core Growth</li>
                <li>Server & NAS oversight</li>
                <li>Backup restore verification</li>
                <li>IT planning consultation</li>
                <li>Priority response handling</li>
                <li>3–4 onsite visits per month</li>
              </ul>

              <p className="text-sm text-gray-500 mb-6">
                Additional device: RM120 / device / month
              </p>

              <Link href="/contact" className="btn-primary block text-center">
                Contact Sales
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="heading-lg mb-10">
            Why Managed IT Services?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-left">

            <div className="card">
              <h3 className="font-semibold mb-2">Proactive IT Management</h3>
              <p className="text-sm text-gray-600">
                Issues are detected and resolved before they impact your
                business operations.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Reduced Downtime</h3>
              <p className="text-sm text-gray-600">
                Continuous monitoring ensures systems stay operational and
                reliable.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Predictable IT Budget</h3>
              <p className="text-sm text-gray-600">
                Monthly service plans allow businesses to plan IT expenses
                without surprises.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Security Protection</h3>
              <p className="text-sm text-gray-600">
                Managed antivirus, patch management, and infrastructure
                security help protect your business.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="heading-lg mb-6">
            Ready to Stabilise Your IT Environment?
          </h2>

          <p className="text-gray-600 mb-8">
            Speak with CoreVision to discuss how managed IT services can
            improve your business reliability and security.
          </p>

          <Link href="/contact" className="btn-primary">
            Request Consultation
          </Link>
        </div>
      </section>
    </>
  );
}