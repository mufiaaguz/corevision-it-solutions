import Link from "next/link";

export default function Projects() {
  return (
    <>
      {/* Header */}
      <section className="section bg-blue-50">
        <div className="container text-center">
          <h1 className="heading-xl mb-4">IT Infrastructure Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CoreVision delivers structured IT project implementation for
            growing businesses — from office IT setup and server deployment
            to network infrastructure and business phone systems.
          </p>
        </div>
      </section>

      {/* Project Services */}
      <section className="section">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">
            IT Project Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Office IT Setup */}
            <div className="card">
              <h3 className="heading-md mb-4">Office IT Setup</h3>
              <p className="text-gray-600 mb-6">
                Complete IT deployment for new or expanding offices,
                including network configuration, workstation setup,
                and device installation.
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>Network configuration</li>
                <li>Firewall setup</li>
                <li>Workstation deployment</li>
                <li>Printer configuration</li>
                <li>User access setup</li>
                <li>
                  <Link
                    href="/office-it-setup"
                    className="text-blue-600 hover:underline"
                  >
                    Learn more about Office IT Setup
                  </Link>
                </li>
              </ul>
            </div>

            {/* Server Deployment */}
            <div className="card">
              <h3 className="heading-md mb-4">Server & Storage Deployment</h3>
              <p className="text-gray-600 mb-6">
                Implementation of centralised systems for file storage,
                backup management, and secure data access.
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>Windows Server configuration</li>
                <li>NAS deployment</li>
                <li>File sharing setup</li>
                <li>Backup configuration</li>
                <li>User permission management</li>
                <li>
                  <Link
                    href="/technology-consulting"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Explore Technology Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Network Setup */}
            <div className="card">
              <h3 className="heading-md mb-4">Network Infrastructure</h3>
              <p className="text-gray-600 mb-6">
                Structured network implementation designed for stability,
                security, and long-term scalability.
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>Router installation</li>
                <li>VLAN configuration</li>
                <li>VPN setup</li>
                <li>Network optimisation</li>
                <li>Infrastructure troubleshooting</li>
                <li>
                  <Link
                    href="/network-infrastructure"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Network Infrastructure Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* PBX Systems */}
            <div className="card">
              <h3 className="heading-md mb-4">PBX Phone Systems</h3>
              <p className="text-gray-600 mb-6">
                Professional VoIP phone systems designed for business
                communication and scalability.
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>IP PBX configuration</li>
                <li>Extension setup</li>
                <li>Call routing</li>
                <li>Auto attendant (IVR)</li>
                <li>SIP trunk configuration</li>
              </ul>

              <Link
                href="/pbx-phone-systems"
                className="text-blue-600 hover:underline text-sm"
              >
                View PBX Phone System Services
              </Link>
            </div>

            {/* Office Relocation */}
            <div className="card">
              <h3 className="heading-md mb-4">Office IT Relocation</h3>
              <p className="text-gray-600 mb-6">
                Smooth IT migration when businesses move office locations,
                ensuring minimal operational disruption.
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>Equipment dismantling</li>
                <li>Network reinstallation</li>
                <li>Server reconnection</li>
                <li>System testing</li>
                <li>Infrastructure verification</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Project Workflow */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <h2 className="heading-lg mb-10">
            Our Project Implementation Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-left">

            <div className="card text-center">
              <h3 className="font-semibold mb-2">1</h3>
              <p className="text-sm text-gray-600">Site Assessment</p>
            </div>

            <div className="card text-center">
              <h3 className="font-semibold mb-2">2</h3>
              <p className="text-sm text-gray-600">Scope Confirmation</p>
            </div>

            <div className="card text-center">
              <h3 className="font-semibold mb-2">3</h3>
              <p className="text-sm text-gray-600">Quotation Approval</p>
            </div>

            <div className="card text-center">
              <h3 className="font-semibold mb-2">4</h3>
              <p className="text-sm text-gray-600">Implementation</p>
            </div>

            <div className="card text-center">
              <h3 className="font-semibold mb-2">5</h3>
              <p className="text-sm text-gray-600">Testing & Handover</p>
            </div>

          </div>
        </div>
      </section>

      {/* Example Project Implementations */}
      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Example Technology Projects
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-12">
            CoreVision supports businesses with practical technology
            implementations that improve reliability, communication
            and operational efficiency.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="card">
              <h3 className="heading-md mb-4">
                Office IT Infrastructure Deployment
              </h3>
              <p className="text-body">
                Complete office technology setup including network
                configuration, workstation deployment, firewall setup
                and secure connectivity for new offices.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">
                Network Infrastructure Installation
              </h3>
              <p className="text-body">
                Structured networks designed for stability including
                VLAN configuration, secure remote access, and
                performance optimisation.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">
                PBX Communication Systems
              </h3>
              <p className="text-body">
                Deployment of business phone systems with extension
                management, call routing, IVR systems and SIP trunk
                integration.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">
                Business Website Platforms
              </h3>
              <p className="text-body">
                Professional websites designed for search visibility,
                customer engagement and digital presence.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">
                Mobile Business Applications
              </h3>
              <p className="text-body">
                Mobile apps that support internal operations,
                customer engagement and business platforms.
              </p>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">
                Business Automation Systems
              </h3>
              <p className="text-body">
                Automation solutions that streamline workflows,
                connect platforms and reduce manual operational tasks.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="heading-lg mb-6">
            Planning an IT Infrastructure Upgrade?
          </h2>

          <p className="text-gray-600 mb-8">
            Speak with CoreVision to plan your next IT project with
            professional implementation and reliable deployment.
          </p>

          <Link href="/contact" className="btn-primary">
            Request Project Consultation
          </Link>
        </div>
      </section>
    </>
  );
}