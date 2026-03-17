import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Network, Database, Workflow, Link2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Business System Integrations Klang Valley | CoreVision IT",
  description:
    "CoreVision provides business system integration services across Klang Valley, connecting software platforms, automating workflows, and synchronising data between systems.",
  keywords: [
    "System integration services Klang Valley",
    "Business software integration Malaysia",
    "API integration services SME Malaysia",
    "Business platform integration Klang Valley",
    "Workflow integration services"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/system-integrations"
  },
  openGraph: {
    title: "Business System Integrations Klang Valley | CoreVision IT",
    description:
      "Integrate business systems and automate workflows between platforms.",
    url: "https://www.corevisionitsolutions.com/system-integrations",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "Integration between CRM, accounting, and operational systems",
  "API integrations between business platforms",
  "Data synchronisation between applications",
  "Automation between multiple software tools",
  "Cloud application integration",
  "Workflow data sharing between systems",
  "Database integration services",
  "System migration and data transfer integration"
];

const benefits = [
  {
    title: "Unified Business Systems",
    description:
      "Connect separate systems so information flows smoothly across your organisation.",
    icon: Network
  },
  {
    title: "Reduced Manual Data Entry",
    description:
      "Automated data transfer removes repetitive manual updates.",
    icon: Workflow
  },
  {
    title: "Improved Data Accuracy",
    description:
      "Integrated systems minimise errors caused by duplicated data entry.",
    icon: Database
  },
  {
    title: "Streamlined Operations",
    description:
      "Departments can work more efficiently when systems communicate automatically.",
    icon: Link2
  }
];

const processSteps = [
  {
    title: "1. System Analysis",
    description:
      "We review the platforms currently used in your business environment."
  },
  {
    title: "2. Integration Planning",
    description:
      "Our team identifies integration points and data flow requirements."
  },
  {
    title: "3. Integration Development",
    description:
      "Secure connections and automation processes are implemented."
  },
  {
    title: "4. Testing & Validation",
    description:
      "System interactions are tested to ensure reliable operation."
  },
  {
    title: "5. Deployment & Support",
    description:
      "Integrated systems are deployed and monitored for stability."
  }
];

const relatedLinks = [
  {
    href: "/automation-solutions",
    title: "Automation Solutions",
    description:
      "Automate repetitive business processes and workflows."
  },
  {
    href: "/business-tools-development",
    title: "Business Tools Development",
    description:
      "Custom internal systems built specifically for your operations."
  },
  {
    href: "/managed-it",
    title: "Managed IT",
    description:
      "Ongoing monitoring and management of business technology systems."
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "See examples of CoreVision infrastructure and technology implementations."
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "Discuss system integration requirements with our team."
  }
];

export default function SystemIntegrationsPage() {
  return (
    <>
      <section className="section" style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}>
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              System Integrations
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Connect Business Systems and Automate Data Flow
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision helps businesses integrate different software platforms
              so information flows automatically between systems, reducing manual
              work and improving operational efficiency.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss a System Integration
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Technology Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="card text-center">
              <Network size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">System Connectivity</h3>
            </div>

            <div className="card text-center">
              <Database size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Data Synchronisation</h3>
            </div>

            <div className="card text-center">
              <Workflow size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Workflow Integration</h3>
            </div>

            <div className="card text-center">
              <Link2 size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">API Integrations</h3>
            </div>

          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">

          <h2 className="heading-lg mb-6 text-center">
            Integration That Connects Your Business Platforms
          </h2>

          <div className="card">

            <p className="text-body mb-5">
              Many businesses rely on multiple software systems such as accounting
              platforms, CRM tools, reporting systems, and operational software.
              When these systems operate independently, employees often need to
              manually transfer data between platforms.
            </p>

            <p className="text-body mb-5">
              CoreVision provides system integration services that connect these
              platforms together. Automated integration ensures that data flows
              seamlessly across systems, reducing errors and saving valuable time.
            </p>

            <p className="text-body">
              By integrating systems effectively, businesses gain better visibility
              across operations while reducing the complexity of managing multiple
              disconnected platforms.
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
              Connect Your Business Systems
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can integrate your systems to simplify workflows,
              automate processes, and improve data visibility.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request Integration Consultation
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