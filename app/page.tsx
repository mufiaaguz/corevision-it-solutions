import Hero from "@/components/Hero";
import Link from "next/link";
import { ShieldCheck, Server, Wrench } from "lucide-react";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust Metrics */}
      <section className="section section-light">
        <div className="container">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <p className="text-3xl font-bold text-accent">24/7</p>
              <p className="text-sm text-muted mt-1">System Monitoring</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-accent">&lt;1 Hour</p>
              <p className="text-sm text-muted mt-1">Priority Response</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-accent">100+</p>
              <p className="text-sm text-muted mt-1">Devices Managed</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-accent">Klang Valley</p>
              <p className="text-sm text-muted mt-1">Local IT Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* Trusted Businesses */}
      <section className="section section-white">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Built for Growing Businesses
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-12">
            CoreVision IT Solutions focuses on supporting small and medium-sized
            businesses that rely on stable, secure, and professionally managed
            IT environments across Klang Valley.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

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

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="card text-left">
              <p className="text-body">
                CoreVision is built by experienced IT professionals focused on
                delivering proactive monitoring, structured IT management,
                and reliable support for businesses that depend on technology
                every day.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Overview */}
      <section className="section section-white">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            IT Services Designed for Growing Businesses
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-12">
            CoreVision IT Solutions delivers professional IT support and
            managed IT services for SMEs across Klang Valley.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="card text-left">
              <ShieldCheck style={{ color: "var(--accent-color)" }} className="mb-4" size={36} />

              <h3 className="heading-md mb-4">
                Managed IT Services
              </h3>

              <p className="text-body mb-6">
                Continuous monitoring and proactive IT management
                designed to prevent downtime.
              </p>

              <Link href="/managed-it" className="btn-primary inline-block">
                View Plans
              </Link>
            </div>

            <div className="card text-left">
              <Wrench style={{ color: "var(--accent-color)" }} className="mb-4" size={36} />

              <h3 className="heading-md mb-4">
                IT Support
              </h3>

              <p className="text-body mb-6">
                Fast remote and onsite support when your
                business needs technical assistance.
              </p>

              <Link href="/it-support" className="btn-primary inline-block">
                Get Support
              </Link>
            </div>

            <div className="card text-left">
              <Server style={{ color: "var(--accent-color)" }} className="mb-4" size={36} />

              <h3 className="heading-md mb-4">
                Infrastructure Projects
              </h3>

              <p className="text-body mb-6">
                Office IT setup, server deployment and
                network infrastructure implementation.
              </p>

              <Link href="/projects" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* NEW: Managed IT Plans Preview */}
      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Managed IT Service Plans
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-12">
            Flexible managed IT service plans designed for small and growing
            businesses that require reliable and proactive IT support.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="card">
              <h3 className="heading-md mb-3">Core Start</h3>
              <p className="text-accent font-bold mb-2">RM1200 / month</p>
              <p className="text-body text-sm mb-4">
                Ideal for small offices with up to 5 devices.
              </p>
              <Link href="/managed-it" className="btn-primary inline-block">
                View Details
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-3">Core Growth</h3>
              <p className="text-accent font-bold mb-2">RM2200 / month</p>
              <p className="text-body text-sm mb-4">
                Designed for growing teams with up to 10 devices.
              </p>
              <Link href="/managed-it" className="btn-primary inline-block">
                View Details
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-3">Core Business</h3>
              <p className="text-accent font-bold mb-2">RM3500 / month</p>
              <p className="text-body text-sm mb-4">
                Advanced support for established businesses and larger
                IT environments.
              </p>
              <Link href="/managed-it" className="btn-primary inline-block">
                View Details
              </Link>
            </div>

          </div>

        </div>
      </section>

            {/* NEW: Business Technology Services */}
      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Business Technology Services
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-12">
            In addition to managed IT and support services, CoreVision also
            provides specialised technology solutions including infrastructure,
            automation systems and custom development projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <Link href="/network-infrastructure" className="card">
              <h3 className="font-semibold mb-2">Network Infrastructure</h3>
              <p className="text-body text-sm">
                Professional business networking including routers, switches and WiFi deployment.
              </p>
            </Link>

            <Link href="/office-it-setup" className="card">
              <h3 className="font-semibold mb-2">Office IT Setup</h3>
              <p className="text-body text-sm">
                Complete office IT environment setup including devices, networking and security.
              </p>
            </Link>

            <Link href="/pbx-phone-systems" className="card">
              <h3 className="font-semibold mb-2">PBX Phone Systems</h3>
              <p className="text-body text-sm">
                Modern business phone systems designed for reliable communication.
              </p>
            </Link>

            <Link href="/automation-solutions" className="card">
              <h3 className="font-semibold mb-2">Automation Solutions</h3>
              <p className="text-body text-sm">
                Business workflow automation to reduce manual work and increase efficiency.
              </p>
            </Link>

            <Link href="/business-tools-development" className="card">
              <h3 className="font-semibold mb-2">Business Tools Development</h3>
              <p className="text-body text-sm">
                Custom internal tools and systems built to support operations.
              </p>
            </Link>

            <Link href="/system-integrations" className="card">
              <h3 className="font-semibold mb-2">System Integrations</h3>
              <p className="text-body text-sm">
                Connecting business platforms and software systems together.
              </p>
            </Link>

            <Link href="/website-development" className="card">
              <h3 className="font-semibold mb-2">Website Development</h3>
              <p className="text-body text-sm">
                High-performance business websites designed for growth.
              </p>
            </Link>

            <Link href="/mobile-app-development" className="card">
              <h3 className="font-semibold mb-2">Mobile App Development</h3>
              <p className="text-body text-sm">
                Custom mobile apps for business productivity and customer engagement.
              </p>
            </Link>

            <Link href="/technology-consulting" className="card">
              <h3 className="font-semibold mb-2">Technology Consulting</h3>
              <p className="text-body text-sm">
                Strategic technology planning and digital transformation guidance.
              </p>
            </Link>

          </div>

        </div>
      </section>

      {/* NEW: How CoreVision IT Support Works */}
      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-10">
            How CoreVision IT Support Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="card">
              <h3 className="font-semibold mb-2">1. IT Environment Assessment</h3>
              <p className="text-body text-sm">
                We review your existing systems, identify risks, and evaluate
                your current IT infrastructure.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">2. Stabilise & Secure Systems</h3>
              <p className="text-body text-sm">
                Monitoring, patch management, antivirus protection and system
                optimisation are implemented to improve reliability.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">3. Ongoing Monitoring & Support</h3>
              <p className="text-body text-sm">
                Continuous monitoring and responsive IT support ensure your
                business systems remain stable and secure.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Industries */}
      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-10">
            Supporting Businesses Across Multiple Industries
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            <div className="card text-center"><p className="font-semibold">Law Firms</p></div>
            <div className="card text-center"><p className="font-semibold">Medical Clinics</p></div>
            <div className="card text-center"><p className="font-semibold">Professional Offices</p></div>
            <div className="card text-center"><p className="font-semibold">Retail Businesses</p></div>
            <div className="card text-center"><p className="font-semibold">Growing SMEs</p></div>

          </div>

        </div>
      </section>

      {/* Why CoreVision */}
      <section className="section section-white">
        <div className="container text-center">

          <h2 className="heading-lg mb-10">
            Why Businesses Choose CoreVision
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-left">

            <div className="card">
              <h3 className="font-semibold mb-2">Proactive Monitoring</h3>
              <p className="text-body text-sm">
                Issues are detected early before they disrupt operations.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Predictable IT Costs</h3>
              <p className="text-body text-sm">
                Monthly service plans allow better budgeting for IT.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Local Support</h3>
              <p className="text-body text-sm">
                Remote and onsite support across Klang Valley.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">Security Focused</h3>
              <p className="text-body text-sm">
                Antivirus management and patching keep systems protected.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Infrastructure Services */}
      <section className="section section-white">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Infrastructure Services
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-12">
            CoreVision designs and manages reliable IT environments
            for businesses across Klang Valley including networks,
            office infrastructure, and communication systems.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="card">
              <h3 className="heading-md mb-4">Managed IT</h3>
              <p className="text-body mb-6">
                Proactive monitoring and management of business IT
                environments to reduce downtime and maintain stability.
              </p>
              <Link href="/managed-it" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">IT Support</h3>
              <p className="text-body mb-6">
                Fast remote and onsite IT support for businesses
                across Kuala Lumpur and Klang Valley.
              </p>
              <Link href="/it-support" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">Network Infrastructure</h3>
              <p className="text-body mb-6">
                Secure and scalable network deployment including
                routers, VLAN configuration, VPN, and firewall setup.
              </p>
              <Link href="/network-infrastructure" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">Office IT Setup</h3>
              <p className="text-body mb-6">
                Complete office IT deployment including workstations,
                network configuration and device installation.
              </p>
              <Link href="/office-it-setup" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">PBX Phone Systems</h3>
              <p className="text-body mb-6">
                VoIP phone systems and PBX deployments designed
                for modern business communication.
              </p>
              <Link href="/pbx-phone-systems" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Development & Automation */}
      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Development & Automation
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-12">
            Beyond infrastructure, CoreVision helps businesses
            modernise operations through software development,
            automation, and system integration.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="card">
              <h3 className="heading-md mb-4">Website Development</h3>
              <p className="text-body mb-6">
                Professional business websites designed for
                performance, reliability and search visibility.
              </p>
              <Link href="/website-development" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">Mobile App Development</h3>
              <p className="text-body mb-6">
                Mobile applications for business platforms,
                customer portals and internal systems.
              </p>
              <Link href="/mobile-app-development" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">Custom Software Development</h3>
              <p className="text-body mb-6">
                Tailored software solutions designed to support
                specific business workflows and operational needs.
              </p>
              <Link href="/custom-software-development" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">Automation Solutions</h3>
              <p className="text-body mb-6">
                Automate repetitive processes and workflows
                to improve efficiency and reduce manual tasks.
              </p>
              <Link href="/automation-solutions" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">Business Tools Development</h3>
              <p className="text-body mb-6">
                Custom internal tools and dashboards that
                improve productivity and reporting.
              </p>
              <Link href="/business-tools-development" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h3 className="heading-md mb-4">System Integrations</h3>
              <p className="text-body mb-6">
                Connect different business platforms so data
                flows seamlessly between systems.
              </p>
              <Link href="/system-integrations" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Technology Partners */}
      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-10">
            Technology We Support
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm font-semibold">

            <div className="card text-center">Microsoft</div>
            <div className="card text-center">Lenovo</div>
            <div className="card text-center">Bitdefender</div>
            <div className="card text-center">Synology</div>
            <div className="card text-center">Ubiquiti</div>
            <div className="card text-center">Fortinet</div>

          </div>

        </div>
      </section>

      {/* SLA Section */}
      <section className="section section-white">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Service Level Agreement
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-10">
            CoreVision follows a structured service priority model to ensure
            business issues are addressed quickly and efficiently.
          </p>

          <table className="sla-table">

            <thead>
              <tr>
                <th>Priority</th>
                <th>Description</th>
                <th>Response Time</th>
                <th>Resolution Target</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Priority 1</td>
                <td>Business operations stopped</td>
                <td>Within 30 minutes</td>
                <td>Within 8 business hours</td>
              </tr>

              <tr>
                <td>Priority 2</td>
                <td>Multiple users affected</td>
                <td>Within 1 hour</td>
                <td>Within 1 business day</td>
              </tr>

              <tr>
                <td>Priority 3</td>
                <td>Limited disruption</td>
                <td>Within 2 hours</td>
                <td>Within 2 business days</td>
              </tr>

              <tr>
                <td>Priority 4</td>
                <td>Minor issues or service requests</td>
                <td>Within 4 hours</td>
                <td>Within 3 business days</td>
              </tr>
            </tbody>

          </table>

        </div>
      </section>

      {/* FAQ */}
      <section className="section section-white">
        <div className="container">

          <h2 className="heading-lg text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="card">
              <h3 className="font-semibold mb-2">
                What is Managed IT Services?
              </h3>
              <p className="text-body text-sm">
                Managed IT services provide proactive monitoring, maintenance
                and support for business IT systems to prevent downtime and
                improve stability.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">
                Do you provide onsite IT support?
              </h3>
              <p className="text-body text-sm">
                Yes. CoreVision provides remote and onsite IT support
                across Klang Valley including Kuala Lumpur, Petaling Jaya
                and Subang Jaya.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">
                How fast is IT support response?
              </h3>
              <p className="text-body text-sm">
                Priority issues are typically responded to within one hour
                depending on severity.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">
                Do you support small businesses?
              </h3>
              <p className="text-body text-sm">
                Yes. Our services are designed specifically for SMEs that
                require reliable IT support without a full internal IT team.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Free IT System Assessment */}
      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Free IT System Assessment
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-8">
            Unsure if your IT environment is secure or performing optimally?
            Our team can review your systems and provide recommendations to
            improve reliability, security and performance.
          </p>

          <Link href="/contact" className="btn-primary">
            Request Free Assessment
          </Link>

        </div>
      </section>

      {/* IT Support Locations */}
      <section className="section section-white">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            IT Support Across Klang Valley
          </h2>

          <p className="text-body max-w-2xl mx-auto mb-10">
            CoreVision provides professional IT support services for
            businesses across Kuala Lumpur, Petaling Jaya and the
            wider Klang Valley region.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <Link href="/it-support-kuala-lumpur" className="card text-center">
              <p className="font-semibold">
                IT Support Kuala Lumpur
              </p>
            </Link>

            <Link href="/it-support-petaling-jaya" className="card text-center">
              <p className="font-semibold">
                IT Support Petaling Jaya
              </p>
            </Link>

            <Link href="/managed-it-klang-valley" className="card text-center">
              <p className="font-semibold">
                Managed IT Services Klang Valley
              </p>
            </Link>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Need Reliable IT Support?
          </h2>

          <p className="text-body mb-8">
            Speak with our team to discuss how CoreVision can stabilise
            and secure your IT environment.
          </p>

          <Link href="/contact" className="btn-primary">
            Contact CoreVision
          </Link>

        </div>
      </section>
    </>
  );
}