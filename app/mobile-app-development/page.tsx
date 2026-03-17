import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Smartphone, Layout, Cloud, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Services Klang Valley | CoreVision IT",
  description:
    "CoreVision develops mobile applications for businesses across Klang Valley including internal business apps, service platforms, and operational tools.",
  keywords: [
    "Mobile app development Klang Valley",
    "Business mobile apps Malaysia",
    "SME mobile application development",
    "Internal mobile apps Malaysia",
    "Mobile software development Klang Valley"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/mobile-app-development"
  },
  openGraph: {
    title: "Mobile App Development Services Klang Valley | CoreVision IT",
    description:
      "Custom mobile applications designed for business productivity and operational efficiency.",
    url: "https://www.corevisionitsolutions.com/mobile-app-development",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "Internal business mobile applications",
  "Operational workflow mobile apps",
  "Service platform mobile apps",
  "Employee productivity applications",
  "Business reporting mobile tools",
  "Mobile dashboards for managers",
  "Integration with existing systems",
  "Mobile interfaces for business platforms"
];

const benefits = [
  {
    title: "Improved Workforce Mobility",
    description:
      "Employees can access systems and perform tasks from anywhere.",
    icon: Smartphone
  },
  {
    title: "Operational Efficiency",
    description:
      "Mobile tools help teams complete tasks faster and manage operations efficiently.",
    icon: Workflow
  },
  {
    title: "Better System Accessibility",
    description:
      "Business systems become accessible through mobile interfaces.",
    icon: Cloud
  },
  {
    title: "Modern Digital Experience",
    description:
      "Mobile apps provide a professional and user friendly interface.",
    icon: Layout
  }
];

const processSteps = [
  {
    title: "1. Business Requirement Review",
    description:
      "We review how the mobile application will support your operations."
  },
  {
    title: "2. App Planning & Structure",
    description:
      "CoreVision designs the app features, workflow, and system integration."
  },
  {
    title: "3. Development",
    description:
      "The mobile application is developed using modern frameworks."
  },
  {
    title: "4. Testing & Optimisation",
    description:
      "Performance, usability, and system integration are tested."
  },
  {
    title: "5. Deployment & Support",
    description:
      "The application is deployed and supported for ongoing improvements."
  }
];

const relatedLinks = [
  {
    href: "/website-development",
    title: "Website Development",
    description:
      "Professional business websites designed for performance and growth."
  },
  {
    href: "/system-integrations",
    title: "System Integrations",
    description:
      "Connect applications and platforms across your business systems."
  },
  {
    href: "/automation-solutions",
    title: "Automation Solutions",
    description:
      "Automate processes and streamline workflows across systems."
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "Examples of CoreVision technology and development projects."
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "Discuss your mobile application requirements with our team."
  }
];

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <section className="section" style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}>
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Mobile App Development
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Mobile Applications for Modern Business Operations
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision develops mobile applications that help businesses
              improve operational efficiency, enable remote work, and provide
              better access to systems and services.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start a Mobile App Project
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Technology Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="card text-center">
              <Smartphone size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Business Mobile Apps</h3>
            </div>

            <div className="card text-center">
              <Workflow size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Operational Tools</h3>
            </div>

            <div className="card text-center">
              <Cloud size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">System Integration</h3>
            </div>

            <div className="card text-center">
              <Layout size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Mobile Dashboards</h3>
            </div>

          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">

          <h2 className="heading-lg mb-6 text-center">
            Business Applications Designed for Mobile Use
          </h2>

          <div className="card">

            <p className="text-body mb-5">
              Mobile applications are becoming increasingly important for
              businesses that require remote access to systems, operational
              tools, and real time information.
            </p>

            <p className="text-body mb-5">
              CoreVision develops business mobile applications designed to
              improve productivity and simplify workflows for teams across
              different locations.
            </p>

            <p className="text-body">
              Whether your organisation needs internal productivity apps,
              operational dashboards, or service platforms, our mobile
              development solutions are built to support business operations.
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
              Need a Mobile App for Your Business?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can develop mobile applications that support your
              operations and improve productivity across your organisation.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request Mobile App Consultation
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