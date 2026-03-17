import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Network,
  Database,
  Workflow,
  Link2,
  Gauge,
  Eye,
  Layers3
} from "lucide-react";

export const metadata: Metadata = {
  title: "System Integration Services Klang Valley | CoreVision IT",
  description:
    "CoreVision provides system integration services for SMEs across Klang Valley including Microsoft 365 integrations, API connections, and automated data workflows.",
  keywords: [
    "System integration services Klang Valley",
    "Business software integration Malaysia",
    "API integration services SME Malaysia",
    "Microsoft 365 integration Klang Valley",
    "Workflow integration services"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/system-integrations"
  },
  openGraph: {
    title: "System Integration Services Klang Valley | CoreVision IT",
    description:
      "Integrate business systems and automate workflows between platforms.",
    url: "https://www.corevisionitsolutions.com/system-integrations",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "Microsoft 365 integrations",
  "API integrations between business systems",
  "Data synchronisation between platforms",
  "Workflow automation between applications",
  "Integration between internal tools and cloud services",
  "Monitoring and alert integrations",
  "Reporting integrations across systems"
];

const benefits = [
  {
    title: "Reduced Manual Data Entry",
    description:
      "Systems can automatically share data, reducing repetitive work.",
    icon: Workflow
  },
  {
    title: "Improved Data Accuracy",
    description:
      "Automation reduces errors caused by manual updates.",
    icon: Database
  },
  {
    title: "Faster Business Processes",
    description:
      "Integrated systems improve operational speed and efficiency.",
    icon: Gauge
  },
  {
    title: "Better System Visibility",
    description:
      "Information can be accessed from centralised dashboards or tools.",
    icon: Eye
  },
  {
    title: "Scalable Business Technology",
    description:
      "Integrations allow businesses to add new systems without disrupting existing workflows.",
    icon: Layers3
  }
];

const processSteps = [
  {
    title: "1. System Review",
    description:
      "We analyse the systems your business currently uses and identify integration opportunities."
  },
  {
    title: "2. Integration Planning",
    description:
      "A solution is designed to connect systems and automate data flow."
  },
  {
    title: "3. Development & Configuration",
    description:
      "Integration tools and connections are developed and implemented."
  },
  {
    title: "4. Testing",
    description:
      "Systems are tested to ensure data transfers correctly and workflows function properly."
  },
  {
    title: "5. Deployment & Support",
    description:
      "The integration is deployed with support available for future improvements."
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
      <section
        className="section"
        style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
      >
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              System Integration Solutions
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Connect Your Business Systems and Automate Workflows
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision helps businesses integrate their systems so applications
              work together seamlessly, reducing manual processes and improving
              operational efficiency.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss an Integration Project
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
              <h3 className="heading-md">Workflow Automation</h3>
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
              Many businesses use multiple systems to manage operations — such as
              email platforms, accounting software, CRM systems, file storage,
              and internal tools. When these systems operate independently, teams
              often need to manually transfer data between platforms.
            </p>

            <p className="text-body mb-5">
              CoreVision provides system integration solutions that connect
              business applications and automate data flow between systems. By
              integrating platforms, businesses can reduce repetitive work,
              improve accuracy, and ensure information is available where it is
              needed.
            </p>

            <p className="text-body">
              Our integration solutions help SMEs simplify their technology
              environments while improving operational efficiency.
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
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
              Want Your Business Systems to Work Together Seamlessly?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can integrate your applications and automate data flows
              to improve operational efficiency.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Plan Your System Integration
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