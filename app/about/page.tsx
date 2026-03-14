import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="section bg-blue-50">
        <div className="container text-center">
          <h1 className="heading-xl mb-4">About CoreVision IT Solutions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CoreVision provides reliable IT support and managed IT services
            designed specifically for growing businesses across Klang Valley.
            Our goal is to help organisations maintain stable, secure,
            and efficient IT environments.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="heading-lg mb-6">Who We Are</h2>

            <p className="text-gray-600 mb-4">
              CoreVision IT Solutions was established to provide structured
              and dependable IT services for small and medium-sized businesses.
              Many SMEs rely heavily on technology but often lack the resources
              to maintain a full in-house IT department.
            </p>

            <p className="text-gray-600 mb-4">
              Our services allow businesses to outsource their IT management
              to a professional team that focuses on stability, security,
              and long-term system performance.
            </p>

            <p className="text-gray-600">
              By combining proactive monitoring, structured IT management,
              and responsive support, CoreVision ensures business systems
              operate reliably every day.
            </p>
          </div>

          <div className="card">
            <h3 className="heading-md mb-4">Our Mission</h3>

            <p className="text-gray-600 mb-4">
              Our mission is to help businesses operate confidently by
              providing reliable IT support, modern infrastructure solutions,
              and proactive system management.
            </p>

            <p className="text-gray-600">
              When technology works reliably, businesses can focus on growth,
              productivity, and delivering value to their customers.
            </p>
          </div>

        </div>
      </section>

      {/* Who We Support */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="heading-lg mb-10">
            Businesses We Support
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            CoreVision works with small and medium-sized organisations
            that rely on stable and secure IT environments.
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

      {/* Services */}
      <section className="section">
        <div className="container text-center">
          <h2 className="heading-lg mb-10">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="card">
              <h3 className="heading-md mb-4">Managed IT Services</h3>
              <p className="text-gray-600">
                Ongoing monitoring, security management, system maintenance,
                and proactive support to maintain stable IT operations.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">IT Support</h3>
              <p className="text-gray-600">
                Remote and onsite technical assistance to resolve issues
                quickly and restore normal business operations.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">Infrastructure Projects</h3>
              <p className="text-gray-600">
                Professional IT project implementation including office
                network deployment, server setup, and system upgrades.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="heading-lg mb-6">
            Supporting Businesses Across Klang Valley
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            CoreVision provides onsite and remote IT support for businesses
            throughout Klang Valley, helping organisations maintain reliable
            and secure IT environments.
          </p>

          <Link href="/contact" className="btn-primary">
            Contact CoreVision
          </Link>
        </div>
      </section>
    </>
  );
}