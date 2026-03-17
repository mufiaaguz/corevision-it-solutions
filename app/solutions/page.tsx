import Link from "next/link";

export default function Solutions() {
  return (
    <>
      {/* Header */}
      <section className="section bg-blue-50">
        <div className="container text-center">
          <h1 className="heading-xl mb-4">
            Business Technology Solutions
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            CoreVision delivers complete technology solutions for growing
            businesses. From IT infrastructure and automation to custom
            software and digital platforms, we help organisations deploy
            reliable and scalable technology environments.
          </p>
        </div>
      </section>

      {/* Infrastructure Solutions */}
      <section className="section">
        <div className="container">

          <h2 className="heading-lg text-center mb-12">
            Infrastructure Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="card">
              <h3 className="heading-md mb-4">
                Network Infrastructure
              </h3>

              <p className="text-gray-600 mb-6">
                Stable and secure network environments designed for
                modern business operations, including firewall
                deployment, VLAN configuration and performance
                optimisation.
              </p>

              <Link
                href="/network-infrastructure"
                className="btn-primary inline-block"
              >
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">
                Office IT Setup
              </h3>

              <p className="text-gray-600 mb-6">
                Complete technology deployment for new offices or
                expanding businesses including workstation
                deployment, device configuration and network
                installation.
              </p>

              <Link
                href="/office-it-setup"
                className="btn-primary inline-block"
              >
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">
                PBX Phone Systems
              </h3>

              <p className="text-gray-600 mb-6">
                Professional VoIP phone systems for businesses
                requiring scalable and flexible communication
                infrastructure with advanced call routing and
                extension management.
              </p>

              <Link
                href="/pbx-phone-systems"
                className="btn-primary inline-block"
              >
                Learn More
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Automation Solutions */}
      <section className="section bg-gray-50">
        <div className="container">

          <h2 className="heading-lg text-center mb-12">
            Automation & Integration Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="card">
              <h3 className="heading-md mb-4">
                Automation Solutions
              </h3>

              <p className="text-gray-600 mb-6">
                Automate repetitive business processes to increase
                operational efficiency and reduce manual workload
                across departments.
              </p>

              <Link
                href="/automation-solutions"
                className="btn-primary inline-block"
              >
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">
                Business Tools Development
              </h3>

              <p className="text-gray-600 mb-6">
                Custom internal tools and dashboards designed to
                improve productivity, reporting and workflow
                management.
              </p>

              <Link
                href="/business-tools-development"
                className="btn-primary inline-block"
              >
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">
                System Integrations
              </h3>

              <p className="text-gray-600 mb-6">
                Connect business platforms and applications to
                streamline data flow and eliminate isolated
                systems across departments.
              </p>

              <Link
                href="/system-integrations"
                className="btn-primary inline-block"
              >
                Learn More
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Development Solutions */}
      <section className="section">
        <div className="container">

          <h2 className="heading-lg text-center mb-12">
            Digital Development
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="card">
              <h3 className="heading-md mb-4">
                Website Development
              </h3>

              <p className="text-gray-600 mb-6">
                Professional business websites designed for
                performance, search visibility and customer
                engagement.
              </p>

              <Link
                href="/website-development"
                className="btn-primary inline-block"
              >
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">
                Mobile App Development
              </h3>

              <p className="text-gray-600 mb-6">
                Mobile applications designed for business
                platforms, internal tools and customer
                engagement.
              </p>

              <Link
                href="/mobile-app-development"
                className="btn-primary inline-block"
              >
                Learn More
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="section bg-gray-50">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Technology Consulting
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            CoreVision provides strategic technology consulting
            to help businesses plan infrastructure upgrades,
            digital transformation initiatives and long-term
            technology strategies.
          </p>

          <Link
            href="/custom-software-development"
            className="btn-primary"
          >
            Explore Consulting Services
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Need a Technology Solution for Your Business?
          </h2>

          <p className="text-gray-600 mb-8">
            Speak with CoreVision to discuss your infrastructure,
            automation or development requirements.
          </p>

          <Link
            href="/contact"
            className="btn-primary"
          >
            Speak With Our Team
          </Link>

        </div>
      </section>
    </>
  );
}