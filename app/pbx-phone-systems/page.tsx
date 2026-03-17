import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2, PhoneCall, Network, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Business PBX Phone Systems Klang Valley | CoreVision IT",
  description:
    "CoreVision deploys business PBX phone systems for SMEs across Klang Valley including VoIP phones, extension setup, call routing, and communication infrastructure.",
  keywords: [
    "PBX phone system Klang Valley",
    "VoIP phone system Malaysia",
    "Business phone system setup",
    "IP PBX installation Klang Valley",
    "Office VoIP deployment Malaysia"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/pbx-phone-systems"
  },
  openGraph: {
    title: "Business PBX Phone Systems Klang Valley | CoreVision IT",
    description:
      "Professional PBX phone system deployment for businesses across Klang Valley.",
    url: "https://www.corevisionitsolutions.com/pbx-phone-systems",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "IP PBX system installation and configuration",
  "Business VoIP phone deployment",
  "Extension setup for employees and departments",
  "Call routing and call handling configuration",
  "Auto attendant (IVR) setup for professional call management",
  "SIP trunk configuration for internet-based calling",
  "Desk phone and softphone setup",
  "Call transfer, voicemail, and internal extension features"
];

const benefits = [
  {
    title: "Professional Call Handling",
    description:
      "Automated call routing ensures customers reach the right department quickly.",
    icon: PhoneCall
  },
  {
    title: "Scalable Communication",
    description:
      "Phone systems can expand easily as new employees join.",
    icon: Users
  },
  {
    title: "Remote Work Support",
    description:
      "Employees can answer calls from different locations when needed.",
    icon: Network
  },
  {
    title: "Lower Communication Costs",
    description:
      "VoIP phone systems can reduce traditional telephony costs.",
    icon: Phone
  }
];

const processSteps = [
  {
    title: "1. Communication Needs Assessment",
    description:
      "We review your office size, departments, and communication requirements."
  },
  {
    title: "2. Phone System Planning",
    description:
      "A PBX system is designed to match your business communication workflow."
  },
  {
    title: "3. System Deployment",
    description:
      "Phones, PBX servers, and network configurations are installed."
  },
  {
    title: "4. Configuration & Testing",
    description:
      "Call routing, extensions, and voicemail systems are configured and tested."
  },
  {
    title: "5. Training & Support",
    description:
      "Your team receives guidance on using the system effectively."
  }
];

const relatedLinks = [
  {
    href: "/network-infrastructure",
    title: "Network Infrastructure",
    description:
      "Structured networking environments that support VoIP communication systems."
  },
  {
    href: "/office-it-setup",
    title: "Office IT Setup",
    description:
      "Complete technology deployment for new or expanding office environments."
  },
  {
    href: "/managed-it",
    title: "Managed IT",
    description:
      "Proactive monitoring and management of your business IT infrastructure."
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "See how CoreVision implements structured infrastructure deployments."
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "Speak with our team about upgrading your business phone system."
  }
];

export default function PBXPhoneSystemsPage() {
  return (
    <>
      <section className="section" style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}>
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Business PBX Phone Systems
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Professional Business Phone Systems for Modern Offices
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision deploys reliable PBX phone systems for businesses across
              Klang Valley. Improve communication, manage calls efficiently, and
              scale your phone system as your company grows.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Plan Your Business Phone System
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Infrastructure Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="card text-center">
              <Phone size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">VoIP Deployment</h3>
            </div>

            <div className="card text-center">
              <Users size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Department Extensions</h3>
            </div>

            <div className="card text-center">
              <PhoneCall size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Call Routing</h3>
            </div>

            <div className="card text-center">
              <Network size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">VoIP Network Integration</h3>
            </div>

          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">

          <h2 className="heading-lg mb-6 text-center">
            Reliable Business Communication Infrastructure
          </h2>

          <div className="card">

            <p className="text-body mb-5">
              Reliable communication is essential for any business. A structured
              business phone system ensures calls are handled professionally,
              teams stay connected, and customers can reach the right department quickly.
            </p>

            <p className="text-body mb-5">
              CoreVision provides PBX phone system deployment for SMEs across
              Klang Valley. Our team installs and configures scalable business
              phone systems that support internal communication, external calls,
              and remote teams.
            </p>

            <p className="text-body">
              Whether your business needs a new phone system, an upgrade from
              traditional lines, or a modern VoIP solution, we ensure your
              communication infrastructure is reliable and easy to manage.
            </p>

          </div>

        </div>
      </section>

      <section className="section section-light">
        <div className="container">

          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-4">Services & Capabilities</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="card flex gap-4">
                <CheckCircle2 size={22} className="text-[var(--accent-color)] mt-1" />
                <p className="text-body">{service}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container">

          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-4">Benefits for Businesses</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="card text-center">
                  <Icon size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
                  <h3 className="heading-md mb-3">{benefit.title}</h3>
                  <p className="text-body">{benefit.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="section section-light">
        <div className="container">

          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-4">How the Service Works</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.title} className="card">
                <h3 className="mb-3 font-semibold text-[var(--primary-color)]">
                  {step.title}
                </h3>
                <p className="text-body text-sm">{step.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container">

          <div
            className="card text-center"
            style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
          >
            <h2 className="heading-lg mb-4 text-white">
              Upgrade Your Business Communication
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              Speak with CoreVision to deploy a professional phone system that
              supports your team and improves customer communication.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request PBX System Consultation
              </Link>
            </div>

          </div>

        </div>
      </section>

      <section className="section section-light">
        <div className="container">

          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-4">Related Services</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="card block">
                <h3 className="heading-md mb-3">{link.title}</h3>
                <p className="text-body mb-4">{link.description}</p>

                <span className="inline-flex items-center gap-2 font-semibold text-[var(--accent-color)]">
                  Explore <ArrowRight size={18} />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </>
  );
}