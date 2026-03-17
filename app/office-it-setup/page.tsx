import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Laptop, Network, Printer, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "Office IT Setup Services Klang Valley | CoreVision IT",
  description:
    "Professional office IT setup services for businesses across Klang Valley. CoreVision provides workstation deployment, network installation, server setup and business infrastructure configuration.",
  keywords: [
    "Office IT setup Klang Valley",
    "Office network installation Malaysia",
    "Business workstation deployment",
    "Server installation SME Malaysia",
    "Office technology setup services"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/office-it-setup"
  },
  openGraph: {
    title: "Office IT Setup Services Klang Valley | CoreVision IT",
    description:
      "Professional office IT setup for new and expanding businesses across Klang Valley.",
    url: "https://www.corevisionitsolutions.com/office-it-setup",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "Workstation and laptop setup for employees",
  "Office network installation and configuration",
  "Router and firewall configuration",
  "Shared printer installation and network setup",
  "File storage and NAS deployment",
  "Server installation and configuration",
  "User account and access setup",
  "WiFi deployment for office environments"
];

const benefits = [
  {
    title: "Faster Office Deployment",
    description:
      "Businesses can start operations quickly with professionally configured IT systems.",
    icon: Laptop
  },
  {
    title: "Reliable Infrastructure",
    description:
      "Proper setup ensures stable performance across all office systems.",
    icon: Network
  },
  {
    title: "Organised IT Environment",
    description:
      "Structured deployment prevents configuration problems later.",
    icon: Server
  },
  {
    title: "Reduced Technical Issues",
    description:
      "Professional installation reduces common setup errors.",
    icon: Printer
  }
];

const processSteps = [
  {
    title: "1. IT Environment Planning",
    description:
      "We review your office layout, number of employees, and technology requirements."
  },
  {
    title: "2. Infrastructure Preparation",
    description:
      "Network equipment, workstations, and connectivity requirements are prepared."
  },
  {
    title: "3. System Deployment",
    description:
      "Computers, networking devices, and shared systems are installed and configured."
  },
  {
    title: "4. Configuration & Testing",
    description:
      "All systems are tested to ensure connectivity, access permissions, and functionality."
  },
  {
    title: "5. Support & Maintenance",
    description:
      "CoreVision can continue supporting your office environment through ongoing IT support or managed services."
  }
];

const relatedLinks = [
  {
    href: "/managed-it",
    title: "Managed IT",
    description: "Ongoing monitoring and management of your IT systems."
  },
  {
    href: "/it-support",
    title: "IT Support",
    description: "Remote and onsite technical support for business systems."
  },
  {
    href: "/network-infrastructure",
    title: "Network Infrastructure",
    description: "Structured network deployment for stable connectivity."
  },
  {
    href: "/projects",
    title: "Projects",
    description: "See examples of CoreVision infrastructure deployments."
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Speak with our team about your office setup requirements."
  }
];

export default function OfficeITSetupPage() {
  return (
    <>
      <section className="section" style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}>
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Office IT Setup Services
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Complete IT Setup for New and Expanding Offices
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision provides professional office IT deployment for businesses
              across Klang Valley. From workstation setup to network configuration
              and server installation, we ensure your office technology is ready
              for reliable operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Plan Your Office IT Setup
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Related Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card text-center">
              <Laptop size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Workstation Deployment</h3>
            </div>

            <div className="card text-center">
              <Network size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Office Networking</h3>
            </div>

            <div className="card text-center">
              <Server size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Server & Storage Setup</h3>
            </div>

            <div className="card text-center">
              <Printer size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Printer & Device Setup</h3>
            </div>
          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">

          <h2 className="heading-lg mb-6 text-center">
            Structured IT Deployment for Modern Offices
          </h2>

          <div className="card">
            <p className="text-body mb-5">
              Setting up a new office requires more than just computers and internet access.
              Businesses need properly configured workstations, reliable networking,
              secure access to shared systems, and well-organised IT infrastructure.
            </p>

            <p className="text-body mb-5">
              CoreVision helps businesses across Klang Valley deploy structured office
              IT environments. Our team handles the installation and configuration
              of key technology components so your team can start working without
              technical disruptions.
            </p>

            <p className="text-body">
              Whether you are opening a new office, expanding your workspace, or
              relocating your business, we ensure your IT systems are properly
              deployed and ready for daily operations.
            </p>
          </div>

        </div>
      </section>

      <section className="section section-light">
        <div className="container">

          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-4">Services & Capabilities</h2>
            <p className="text-body mx-auto max-w-3xl">
              CoreVision provides full office IT deployment services for growing businesses.
            </p>
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

          <div className="card text-center" style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}>
            <h2 className="heading-lg mb-4 text-white">
              Opening a New Office or Expanding Your Workspace?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can deploy a reliable and organised IT environment
              to support your business operations.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request Office IT Setup Consultation
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