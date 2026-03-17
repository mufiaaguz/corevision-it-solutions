import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb, ChartBar, Server, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Consulting Services Klang Valley | CoreVision IT",
  description:
    "CoreVision provides technology consulting services for businesses across Klang Valley including IT strategy, infrastructure planning, and technology optimisation.",
  keywords: [
    "IT consulting Klang Valley",
    "Technology consulting Malaysia",
    "IT strategy consulting SME Malaysia",
    "Business technology advisory Klang Valley",
    "IT infrastructure consulting Malaysia"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/technology-consulting"
  },
  openGraph: {
    title: "Technology Consulting Services Klang Valley | CoreVision IT",
    description:
      "Technology consulting that helps businesses plan and optimise IT infrastructure.",
    url: "https://www.corevisionitsolutions.com/technology-consulting",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "IT infrastructure planning",
  "Technology strategy consulting",
  "Business IT environment assessment",
  "System architecture planning",
  "Technology optimisation for business operations",
  "Infrastructure upgrade planning",
  "Digital transformation guidance",
  "Technology roadmap development"
];

const benefits = [
  {
    title: "Better Technology Decisions",
    description:
      "Businesses gain expert guidance when planning IT investments.",
    icon: Lightbulb
  },
  {
    title: "Improved Operational Efficiency",
    description:
      "Technology solutions are aligned with business processes.",
    icon: Workflow
  },
  {
    title: "Scalable IT Infrastructure",
    description:
      "Systems are designed to support future business growth.",
    icon: Server
  },
  {
    title: "Strategic Technology Planning",
    description:
      "Long term technology roadmaps help businesses stay competitive.",
    icon: ChartBar
  }
];

const processSteps = [
  {
    title: "1. Business & Technology Review",
    description:
      "CoreVision evaluates your current IT environment and business needs."
  },
  {
    title: "2. Infrastructure Assessment",
    description:
      "Existing systems, networks, and workflows are analysed."
  },
  {
    title: "3. Strategy Planning",
    description:
      "Technology solutions and improvements are recommended."
  },
  {
    title: "4. Implementation Guidance",
    description:
      "We assist with planning and executing infrastructure upgrades."
  },
  {
    title: "5. Ongoing Advisory",
    description:
      "Businesses can continue receiving technology guidance as they grow."
  }
];

const relatedLinks = [
  {
    href: "/managed-it",
    title: "Managed IT",
    description:
      "Proactive IT management and monitoring for business systems."
  },
  {
    href: "/network-infrastructure",
    title: "Network Infrastructure",
    description:
      "Reliable networking environments for business operations."
  },
  {
    href: "/automation-solutions",
    title: "Automation Solutions",
    description:
      "Automate repetitive processes and improve operational efficiency."
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "Examples of CoreVision technology implementations."
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "Speak with CoreVision about technology consulting services."
  }
];

export default function TechnologyConsultingPage() {
  return (
    <>
      <section className="section" style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}>
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Technology Consulting
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Technology Strategy and IT Infrastructure Consulting
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision provides technology consulting services that help
              businesses plan IT infrastructure, optimise systems, and align
              technology investments with business goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Technology Consultation
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Infrastructure Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="card text-center">
              <Lightbulb size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">IT Strategy Planning</h3>
            </div>

            <div className="card text-center">
              <Server size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Infrastructure Planning</h3>
            </div>

            <div className="card text-center">
              <Workflow size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Technology Optimisation</h3>
            </div>

            <div className="card text-center">
              <ChartBar size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Technology Roadmaps</h3>
            </div>

          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">

          <h2 className="heading-lg mb-6 text-center">
            Strategic Technology Guidance for Businesses
          </h2>

          <div className="card">

            <p className="text-body mb-5">
              Many businesses struggle with deciding which technologies to adopt
              or how to scale their IT infrastructure as they grow. Without
              proper planning, technology investments can become inefficient
              and difficult to manage.
            </p>

            <p className="text-body mb-5">
              CoreVision provides technology consulting services designed to help
              businesses make informed decisions about IT infrastructure,
              software platforms, and digital transformation initiatives.
            </p>

            <p className="text-body">
              Our consulting services ensure that technology supports business
              growth while maintaining reliability, security, and efficiency.
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
              Planning Your Technology Strategy?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can help your organisation plan, optimise, and scale
              technology infrastructure effectively.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request Consulting Session
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