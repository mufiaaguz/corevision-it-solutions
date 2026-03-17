import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Workflow,
  Database,
  Link2,
  Expand
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development Klang Valley | CoreVision IT",
  description:
    "CoreVision provides custom software development services for SMEs across Klang Valley including business systems, client portals, and scalable web applications.",
  keywords: [
    "Custom software development Klang Valley",
    "Business systems development Malaysia",
    "Custom web application development Malaysia",
    "Client portal development Klang Valley",
    "SME software development Malaysia"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/custom-software-development"
  },
  openGraph: {
    title: "Custom Software Development Klang Valley | CoreVision IT",
    description:
      "Custom software solutions designed to streamline operations and support business growth.",
    url: "https://www.corevisionitsolutions.com/custom-software-development",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "Custom web-based business systems",
  "Internal management platforms",
  "Client portals and service platforms",
  "Business workflow management systems",
  "Data management and reporting systems",
  "Software integration with existing systems",
  "API development and integration",
  "Scalable web application platforms"
];

const benefits = [
  {
    title: "Tailored to Your Workflow",
    description:
      "Custom software is designed specifically for your business processes.",
    icon: Workflow
  },
  {
    title: "Improved Operational Efficiency",
    description:
      "Automated systems reduce manual tasks and improve productivity.",
    icon: Layers3
  },
  {
    title: "Centralised Business Operations",
    description:
      "Custom platforms allow businesses to manage multiple processes in one system.",
    icon: Database
  },
  {
    title: "Integration with Existing Systems",
    description:
      "Software can connect with CRM systems, accounting platforms, and internal tools.",
    icon: Link2
  },
  {
    title: "Scalable Business Platform",
    description:
      "Custom software can expand with additional features as your business grows.",
    icon: Expand
  }
];

const processSteps = [
  {
    title: "1. Requirement Analysis",
    description:
      "We review your current workflows, systems, and business requirements."
  },
  {
    title: "2. System Planning",
    description:
      "A software architecture and feature set are designed."
  },
  {
    title: "3. Development",
    description:
      "The application is developed using modern development frameworks and technologies."
  },
  {
    title: "4. Testing & Deployment",
    description:
      "The system is tested thoroughly before deployment."
  },
  {
    title: "5. Ongoing Improvement",
    description:
      "Software can be enhanced and expanded as your business evolves."
  }
];

const relatedLinks = [
  {
    href: "/website-development",
    title: "Website Development",
    description:
      "Professional business websites and service platforms designed for growth."
  },
  {
    href: "/mobile-app-development",
    title: "Mobile App Development",
    description:
      "Mobile applications that support business operations and customer engagement."
  },
  {
    href: "/system-integrations",
    title: "System Integrations",
    description:
      "Connect business systems and automate data flow between platforms."
  },
  {
    href: "/automation-solutions",
    title: "Automation Solutions",
    description:
      "Automate repetitive work and improve operational efficiency."
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "Examples of CoreVision technology implementations and business solutions."
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "Discuss your software development requirements with our team."
  }
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      <section
        className="section"
        style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
      >
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Custom Software Development
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Custom Software Solutions Built for Your Business
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision develops tailored software solutions that help
              businesses streamline operations, manage data efficiently,
              and build scalable digital platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss Your Software Project
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Technology Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="card text-center">
              <Layers3 size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md text-[var(--primary-color)]">
                Business Systems
              </h3>
            </div>

            <div className="card text-center">
              <Workflow size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md text-[var(--primary-color)]">
                Workflow Platforms
              </h3>
            </div>

            <div className="card text-center">
              <Database size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md text-[var(--primary-color)]">
                Data Management
              </h3>
            </div>

            <div className="card text-center">
              <Link2 size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md text-[var(--primary-color)]">
                System Integrations
              </h3>
            </div>

          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">

          <h2 className="heading-lg mb-6 text-center">
            Software Built Around Your Business Processes
          </h2>

          <div className="card">

            <p className="text-body mb-5">
              Many growing businesses reach a point where standard software
              tools no longer meet their operational needs. Custom software
              allows organisations to design systems that match their workflows,
              automate processes, and integrate multiple systems into a single
              platform.
            </p>

            <p className="text-body mb-5">
              CoreVision provides custom software development services for
              businesses across Klang Valley. We design and develop applications
              tailored to your business processes, helping you improve
              efficiency, reduce manual work, and manage operations more
              effectively.
            </p>

            <p className="text-body mb-5">
              Whether you need an internal system, a client platform, or a
              specialised operational tool, our team can develop software that
              supports your long-term business growth.
            </p>

            <p className="text-body">
              CoreVision supports businesses across Kuala Lumpur, Petaling Jaya,
              Subang Jaya, and the wider Klang Valley region.
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
              Need a System Built Around Your Business Processes?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can develop custom software that improves operational
              efficiency and supports long-term growth.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request Software Development Consultation
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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