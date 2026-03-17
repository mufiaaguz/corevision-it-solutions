import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Bot, Workflow, Clock, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Automation Solutions Klang Valley | CoreVision IT",
  description:
    "CoreVision develops automation solutions for SMEs across Klang Valley to streamline workflows, automate IT processes, and improve operational efficiency.",
  keywords: [
    "Business automation solutions Klang Valley",
    "IT process automation Malaysia",
    "Workflow automation SME Malaysia",
    "Business automation tools Klang Valley",
    "System automation services Malaysia"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/automation-solutions"
  },
  openGraph: {
    title: "Business Automation Solutions Klang Valley | CoreVision IT",
    description:
      "Automation solutions that reduce manual work and improve efficiency for SMEs.",
    url: "https://www.corevisionitsolutions.com/automation-solutions",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "IT process automation",
  "System monitoring automation and alerting",
  "Automated reporting and data processing",
  "Workflow automation for repetitive tasks",
  "Automated user account provisioning",
  "Scheduled system maintenance tasks",
  "Integration between business systems",
  "Automated data synchronisation"
];

const benefits = [
  {
    title: "Reduced Manual Work",
    description:
      "Automation eliminates repetitive tasks and reduces workload for employees.",
    icon: Bot
  },
  {
    title: "Improved Efficiency",
    description:
      "Processes run automatically without requiring constant manual input.",
    icon: Workflow
  },
  {
    title: "Fewer Errors",
    description:
      "Automated workflows reduce mistakes caused by manual processes.",
    icon: Settings
  },
  {
    title: "Faster Operations",
    description:
      "Tasks such as reporting, monitoring, and data processing can run instantly.",
    icon: Clock
  }
];

const processSteps = [
  {
    title: "1. Process Review",
    description:
      "We analyse existing workflows and identify tasks that can be automated."
  },
  {
    title: "2. Automation Design",
    description:
      "Our team designs an automation solution based on your operational needs."
  },
  {
    title: "3. Development & Integration",
    description:
      "Automation scripts, tools, or integrations are developed and implemented."
  },
  {
    title: "4. Testing & Optimisation",
    description:
      "Automated processes are tested to ensure reliability and accuracy."
  },
  {
    title: "5. Deployment & Support",
    description:
      "Automation systems are deployed into your business environment with ongoing support if needed."
  }
];

const relatedLinks = [
  {
    href: "/system-integrations",
    title: "System Integrations",
    description:
      "Connect multiple business systems and automate data flow between platforms."
  },
  {
    href: "/business-tools-development",
    title: "Business Tools Development",
    description:
      "Custom internal systems that streamline operations and manage workflows."
  },
  {
    href: "/managed-it",
    title: "Managed IT",
    description:
      "Ongoing IT management and monitoring for business environments."
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "Examples of infrastructure and automation implementations."
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "Speak with CoreVision about automation opportunities for your business."
  }
];

export default function AutomationSolutionsPage() {
  return (
    <>
      <section className="section" style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}>
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Automation Solutions
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Automate Repetitive Work and Improve Business Efficiency
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision develops automation solutions that reduce manual tasks,
              streamline operations, and improve productivity for businesses across
              Klang Valley.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss an Automation Project
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Example Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card text-center">
              <Bot size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Process Automation</h3>
            </div>

            <div className="card text-center">
              <Workflow size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Workflow Automation</h3>
            </div>

            <div className="card text-center">
              <Settings size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">System Automation</h3>
            </div>

            <div className="card text-center">
              <Clock size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Scheduled Tasks</h3>
            </div>
          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">

          <h2 className="heading-lg mb-6 text-center">
            Automation That Simplifies Business Operations
          </h2>

          <div className="card">
            <p className="text-body mb-5">
              Many businesses rely on manual processes for routine tasks such as
              reporting, system monitoring, user management, and data updates.
              Over time, these repetitive activities consume valuable staff time.
            </p>

            <p className="text-body mb-5">
              CoreVision provides automation solutions designed to simplify these
              processes. By implementing automated workflows and system
              integrations, businesses can reduce repetitive work and focus on
              higher-value activities.
            </p>

            <p className="text-body">
              Our automation solutions are designed specifically for SMEs that
              want to improve operational efficiency without investing in complex
              enterprise systems.
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
              Want to Reduce Repetitive Work in Your Business?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can develop automation solutions that streamline
              operations and improve efficiency.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Discuss Automation Opportunities
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