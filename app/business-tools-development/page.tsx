import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  Database,
  Workflow,
  BarChart3,
  Expand
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Business Tools Development Klang Valley | CoreVision IT",
  description:
    "CoreVision develops custom internal business tools for SMEs across Klang Valley including dashboards, workflow systems, and reporting tools.",
  keywords: [
    "Custom business tools development Klang Valley",
    "Internal business systems Malaysia",
    "Workflow management tools SME",
    "Business dashboards Malaysia",
    "Internal web application development"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/business-tools-development"
  },
  openGraph: {
    title: "Custom Business Tools Development Klang Valley | CoreVision IT",
    description:
      "Custom internal tools that streamline operations and organise business data.",
    url: "https://www.corevisionitsolutions.com/business-tools-development",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "Internal business dashboards",
  "Reporting and data management tools",
  "Workflow management systems",
  "IT asset tracking tools",
  "Ticket and request management tools",
  "Inventory tracking systems",
  "Simple web-based internal applications",
  "Process tracking and monitoring tools"
];

const benefits = [
  {
    title: "Centralised Business Data",
    description:
      "Important information can be organised into a single system.",
    icon: Database
  },
  {
    title: "Improved Operational Visibility",
    description:
      "Managers can easily monitor operations and track performance.",
    icon: BarChart3
  },
  {
    title: "Reduced Manual Processes",
    description:
      "Automated tools reduce reliance on spreadsheets and repetitive tasks.",
    icon: Workflow
  },
  {
    title: "Better Workflow Organisation",
    description:
      "Teams can track tasks, requests, and operational processes more effectively.",
    icon: LayoutDashboard
  },
  {
    title: "Scalable Systems",
    description:
      "Tools can evolve as your business grows.",
    icon: Expand
  }
];

const processSteps = [
  {
    title: "1. Workflow Assessment",
    description:
      "We review how your business currently manages processes and data."
  },
  {
    title: "2. Tool Planning",
    description:
      "A custom solution is designed to support your workflow requirements."
  },
  {
    title: "3. Development",
    description:
      "CoreVision develops the tool using appropriate technologies."
  },
  {
    title: "4. Testing & Deployment",
    description:
      "The system is tested and deployed within your environment."
  },
  {
    title: "5. Training & Support",
    description:
      "Your team receives guidance on how to use the tool effectively."
  }
];

const relatedLinks = [
  {
    href: "/automation-solutions",
    title: "Automation Solutions",
    description:
      "Automate repetitive processes and streamline operations."
  },
  {
    href: "/system-integrations",
    title: "System Integrations",
    description:
      "Connect business systems and automate data flow between platforms."
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "Examples of CoreVision technology solutions and deployments."
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "Discuss how a custom tool could improve your business operations."
  }
];

export default function BusinessToolsDevelopmentPage() {
  return (
    <>
      <section
        className="section"
        style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
      >
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Custom Business Tools Development
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Custom Business Tools Built for Your Workflow
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision develops simple and practical internal tools that help
              businesses organise data, automate processes, and improve operational
              efficiency.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss a Business Tool Project
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Example Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card text-center">
              <LayoutDashboard size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Business Dashboards</h3>
            </div>

            <div className="card text-center">
              <Database size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Data Management Tools</h3>
            </div>

            <div className="card text-center">
              <Workflow size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Workflow Systems</h3>
            </div>

            <div className="card text-center">
              <BarChart3 size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Reporting Platforms</h3>
            </div>
          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">

          <h2 className="heading-lg mb-6 text-center">
            Internal Systems That Match Your Business Workflow
          </h2>

          <div className="card">

            <p className="text-body mb-5">
              Many businesses rely on spreadsheets, manual processes, or disconnected
              systems to manage daily operations. As a company grows, these methods
              often become inefficient and difficult to maintain.
            </p>

            <p className="text-body mb-5">
              CoreVision develops custom business tools designed specifically for
              SME workflows. These tools help businesses organise information,
              automate tasks, and centralise important data into easy-to-use systems.
            </p>

            <p className="text-body">
              Instead of forcing businesses to adapt to complex enterprise software,
              we build solutions that match the way your organisation already works.
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
              Need a System That Matches Your Business Workflow?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can build practical internal tools that simplify operations
              and improve productivity.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request a Development Consultation
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

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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