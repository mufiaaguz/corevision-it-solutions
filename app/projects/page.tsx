import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Network,
  Phone,
  Globe,
  Smartphone,
  Workflow,
  Server,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology Projects & Case Studies | CoreVision IT",
  description:
    "Explore example CoreVision technology projects including office IT deployments, network infrastructure installations, PBX phone systems, website development, mobile apps, custom software, and automation solutions.",
  keywords: [
    "IT infrastructure projects Klang Valley",
    "Office IT deployment Malaysia",
    "Network infrastructure case study Malaysia",
    "PBX phone system projects Klang Valley",
    "Business website development projects Malaysia",
    "Automation implementation examples"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/projects"
  },
  openGraph: {
    title: "Technology Projects & Case Studies | CoreVision IT",
    description:
      "Example technology projects delivered by CoreVision across infrastructure, development, and automation.",
    url: "https://www.corevisionitsolutions.com/projects",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const projectTypes = [
  {
    title: "Office IT Infrastructure Deployment",
    description:
      "Complete office technology setup including workstations, networking, firewall configuration, shared systems, and secure connectivity for new or expanding offices.",
    outcomes: [
      "Structured workstation deployment",
      "Reliable office networking",
      "Shared systems ready for daily operations"
    ],
    href: "/office-it-setup",
    linkLabel: "View Office IT Setup",
    icon: Building2
  },
  {
    title: "Network Infrastructure Installation",
    description:
      "Business network implementation covering routers, switches, WiFi deployment, VPN connectivity, and performance optimisation for stable day-to-day operations.",
    outcomes: [
      "Improved connectivity",
      "Better network performance",
      "Scalable infrastructure design"
    ],
    href: "/network-infrastructure",
    linkLabel: "View Network Infrastructure",
    icon: Network
  },
  {
    title: "PBX Communication Systems",
    description:
      "Deployment of business phone systems with extension management, call routing, IVR setup, VoIP configuration, and communication workflows for modern offices.",
    outcomes: [
      "Professional call handling",
      "Extension and routing setup",
      "Support for remote communication"
    ],
    href: "/pbx-phone-systems",
    linkLabel: "View PBX Phone Systems",
    icon: Phone
  },
  {
    title: "Business Website Platforms",
    description:
      "Professional websites built to improve credibility, present services clearly, and support long-term business growth with responsive design and structured content.",
    outcomes: [
      "Clear service presentation",
      "Responsive user experience",
      "Improved digital presence"
    ],
    href: "/website-development",
    linkLabel: "View Website Development",
    icon: Globe
  },
  {
    title: "Mobile Business Applications",
    description:
      "Mobile applications developed to support business workflows, customer interaction, internal productivity, and access to operational systems across locations.",
    outcomes: [
      "Better mobile accessibility",
      "Support for remote workflows",
      "Business process mobility"
    ],
    href: "/mobile-app-development",
    linkLabel: "View Mobile App Development",
    icon: Smartphone
  },
  {
    title: "Custom Software Systems",
    description:
      "Tailored software platforms designed around business workflows, internal operations, reporting needs, and integration requirements for growing organisations.",
    outcomes: [
      "Workflow-aligned software",
      "Centralised operational tools",
      "Scalable business systems"
    ],
    href: "/custom-software-development",
    linkLabel: "View Custom Software Development",
    icon: Server
  },
  {
    title: "Automation Implementations",
    description:
      "Automation solutions that reduce manual work, streamline recurring processes, connect systems, and improve operational efficiency across departments.",
    outcomes: [
      "Less repetitive manual work",
      "Faster internal processes",
      "More efficient system workflows"
    ],
    href: "/automation-solutions",
    linkLabel: "View Automation Solutions",
    icon: Workflow
  }
];

const processSteps = [
  {
    title: "1. Discovery & Assessment",
    description:
      "We review the business environment, existing systems, and project requirements."
  },
  {
    title: "2. Scope & Planning",
    description:
      "A practical project scope is defined along with technology recommendations and implementation priorities."
  },
  {
    title: "3. Deployment & Configuration",
    description:
      "Systems, devices, platforms, or workflows are implemented and configured in a structured way."
  },
  {
    title: "4. Testing & Handover",
    description:
      "The solution is tested, refined, and prepared for daily operational use."
  },
  {
    title: "5. Ongoing Support",
    description:
      "Where needed, CoreVision provides follow-up support, monitoring, and future improvements."
  }
];

export default function ProjectsPage() {
  return (
    <>
      <section
        className="section"
        style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
      >
        <div className="container text-center max-w-4xl">
          <div className="mb-4 text-sm font-medium text-white/80">
            Projects & Case Study Examples
          </div>

          <h1 className="heading-xl mb-6 text-white">
            Practical Technology Projects for Growing Businesses
          </h1>

          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            CoreVision delivers structured project implementation across
            infrastructure, development, and automation. Below are example
            project types that show how we help businesses deploy reliable
            systems, improve communication, and modernise operations.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">
          <h2 className="heading-lg mb-6 text-center">
            Example Project Work
          </h2>

          <div className="card">
            <p className="text-body mb-5">
              CoreVision supports businesses with project-based technology
              implementations that improve reliability, communication, and
              operational efficiency. These projects can range from office IT
              deployments and network upgrades to software systems and workflow
              automation.
            </p>

            <p className="text-body mb-5">
              The examples below represent the types of work CoreVision can
              deliver. They are intended to demonstrate capability and scope,
              not to disclose specific client identities.
            </p>

            <p className="text-body">
              Our approach focuses on practical outcomes, structured delivery,
              and solutions that support long-term business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-4">Project Categories</h2>
            <p className="text-body max-w-3xl mx-auto">
              Explore the types of infrastructure, development, and automation
              projects CoreVision can deliver for modern business environments.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projectTypes.map((project) => {
              const Icon = project.icon;

              return (
                <div key={project.title} className="card text-left">
                  <Icon
                    size={36}
                    className="mb-4"
                    style={{ color: "var(--accent-color)" }}
                  />

                  <h3 className="heading-md mb-4">{project.title}</h3>

                  <p className="text-body mb-6">{project.description}</p>

                  <div className="space-y-3 mb-6">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0"
                          style={{ color: "var(--accent-color)" }}
                        />
                        <p className="text-body text-sm">{outcome}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 font-semibold"
                    style={{ color: "var(--accent-color)" }}
                  >
                    {project.linkLabel} <ArrowRight size={18} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-4">
              Our Project Delivery Approach
            </h2>
            <p className="text-body max-w-3xl mx-auto">
              Each project is planned and delivered in a structured way to
              reduce risk, improve visibility, and support smooth handover.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.title} className="card text-left">
                <h3 className="mb-3 font-semibold text-[var(--primary-color)]">
                  {step.title}
                </h3>
                <p className="text-body text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div
            className="card text-center"
            style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
          >
            <h2 className="heading-lg mb-4 text-white">
              Planning a Technology Project?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              Speak with CoreVision to discuss your infrastructure, development,
              or automation requirements and plan the right solution for your
              business environment.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request Project Consultation
              </Link>

              <Link href="/about" className="btn-secondary-light">
                Learn More About CoreVision
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}