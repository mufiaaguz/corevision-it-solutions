import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Layout,
  Cloud,
  Workflow,
  Layers3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mobile App Development Services Klang Valley | CoreVision IT",
  description:
    "CoreVision develops custom mobile applications for SMEs across Klang Valley including business apps, customer platforms, and integrated mobile solutions.",
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
  "Custom mobile application development",
  "Business process mobile applications",
  "Customer service and booking applications",
  "Internal workflow mobile tools",
  "Integration with existing business systems",
  "API-based mobile app integrations",
  "Mobile app UI/UX design",
  "Application deployment and maintenance"
];

const benefits = [
  {
    title: "Improved Customer Accessibility",
    description:
      "Customers can interact with your business directly through mobile applications.",
    icon: Smartphone
  },
  {
    title: "Increased Operational Efficiency",
    description:
      "Mobile apps allow employees to access systems and manage tasks remotely.",
    icon: Workflow
  },
  {
    title: "Digital Service Delivery",
    description:
      "Businesses can deliver services digitally through mobile platforms.",
    icon: Layout
  },
  {
    title: "Real-Time Data Access",
    description:
      "Applications can connect to business systems and provide instant information.",
    icon: Cloud
  },
  {
    title: "Scalable Technology Platform",
    description:
      "Mobile applications can evolve with new features as your business expands.",
    icon: Layers3
  }
];

const processSteps = [
  {
    title: "1. Business Requirement Analysis",
    description:
      "We evaluate your business goals and determine how a mobile application can support operations."
  },
  {
    title: "2. Application Planning",
    description:
      "A mobile application structure and feature list are designed."
  },
  {
    title: "3. Development",
    description:
      "The application is developed using modern mobile technologies and frameworks."
  },
  {
    title: "4. Testing & Optimisation",
    description:
      "The app is tested for usability, performance, and device compatibility."
  },
  {
    title: "5. Deployment & Support",
    description:
      "The mobile application is deployed and ongoing support is available for updates and improvements."
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
    href: "/custom-software-development",
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to support business workflows and operational needs."
  },
  {
    href: "/system-integrations",
    title: "System Integrations",
    description:
      "Connect applications and platforms across your business systems."
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
      <section
        className="section"
        style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
      >
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Mobile App Development Services
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Custom Mobile App Development for Modern Businesses
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision develops mobile applications that help businesses
              streamline operations, improve customer engagement, and extend
              services to mobile platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Mobile App Project
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Technology Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="card text-center">
              <Smartphone size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md text-[var(--primary-color)]">Business Mobile Apps</h3>
            </div>

            <div className="card text-center">
              <Workflow size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md text-[var(--primary-color)]">Operational Tools</h3>
            </div>

            <div className="card text-center">
              <Cloud size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md text-[var(--primary-color)]">Integrated Systems</h3>
            </div>

            <div className="card text-center">
              <Layout size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md text-[var(--primary-color)]">Customer Platforms</h3>
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
              Mobile applications allow businesses to connect with customers,
              manage operations remotely, and provide services through
              convenient digital platforms. As businesses grow, mobile apps can
              become valuable tools for improving customer interaction and
              internal workflows.
            </p>

            <p className="text-body mb-5">
              CoreVision provides mobile app development services for
              businesses across Klang Valley. We design and develop
              applications that are reliable, user-friendly, and aligned
              with business objectives.
            </p>

            <p className="text-body mb-5">
              Whether you need a customer-facing application, an internal
              business tool, or a platform that integrates with your existing
              systems, our team can develop a mobile solution that supports
              your business growth.
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
              Planning to Launch a Mobile Application?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can design and develop mobile applications that support
              business operations and improve customer engagement.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request Mobile App Development Consultation
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