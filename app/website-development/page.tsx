import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layout,
  Smartphone,
  Search,
  Layers3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Services Klang Valley | CoreVision IT",
  description:
    "CoreVision provides professional website development services for SMEs across Klang Valley including business websites, web applications, and modern responsive platforms.",
  keywords: [
    "Website development Klang Valley",
    "Business website design Malaysia",
    "Corporate website development",
    "SME website development Malaysia",
    "Professional website developers Klang Valley"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/website-development"
  },
  openGraph: {
    title: "Website Development Services Klang Valley | CoreVision IT",
    description:
      "Professional business websites designed for performance, reliability, and growth.",
    url: "https://www.corevisionitsolutions.com/website-development",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "Business website design and development",
  "Company profile websites",
  "Service and product websites",
  "Custom web application development",
  "Website redesign and modernisation",
  "Mobile-responsive website design",
  "Content management system (CMS) integration",
  "Website performance optimisation",
  "Integration with internal tools and business systems"
];

const benefits = [
  {
    title: "Professional Brand Presence",
    description:
      "A modern website strengthens credibility and presents your company professionally.",
    icon: Globe
  },
  {
    title: "Better Customer Engagement",
    description:
      "Visitors can easily understand your services and contact your business.",
    icon: Layout
  },
  {
    title: "Mobile-Friendly Experience",
    description:
      "Responsive design ensures your website works smoothly across all devices.",
    icon: Smartphone
  },
  {
    title: "Scalable Digital Platform",
    description:
      "Websites can grow with additional features as your business expands.",
    icon: Layers3
  },
  {
    title: "Integration with Business Systems",
    description:
      "Your website can connect with CRM systems, internal tools, or automation workflows.",
    icon: Search
  }
];

const processSteps = [
  {
    title: "1. Requirement Consultation",
    description:
      "We understand your business objectives, target audience, and website goals."
  },
  {
    title: "2. Website Structure Planning",
    description:
      "A clear structure and user-friendly navigation are designed to improve user experience."
  },
  {
    title: "3. Design & Development",
    description:
      "The website is developed using modern technologies and responsive design practices."
  },
  {
    title: "4. Testing & Optimisation",
    description:
      "Performance, device compatibility, and usability are tested before launch."
  },
  {
    title: "5. Launch & Support",
    description:
      "The website is deployed and ongoing support is available for improvements and updates."
  }
];

const relatedLinks = [
  {
    href: "/mobile-app-development",
    title: "Mobile App Development",
    description:
      "Mobile applications for business platforms, customer portals and internal systems."
  },
  {
    href: "/custom-software-development",
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to support specific business workflows and operational needs."
  },
  {
    href: "/system-integrations",
    title: "System Integrations",
    description:
      "Connect different business platforms so data flows seamlessly between systems."
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
      "Discuss your website development requirements with our team."
  }
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <section
        className="section"
        style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
      >
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Website Development Services
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Professional Website Development for Growing Businesses
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision designs and develops modern, reliable websites for
              businesses across Klang Valley. From company websites to service
              platforms, we create digital experiences that support business
              growth and customer engagement.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Website Project
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Technology Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="card text-center">
              <Globe size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Business Websites</h3>
            </div>

            <div className="card text-center">
              <Layout size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Service Platforms</h3>
            </div>

            <div className="card text-center">
              <Smartphone size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Responsive Design</h3>
            </div>

            <div className="card text-center">
              <Search size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Performance Focused</h3>
            </div>

          </div>

        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">

          <h2 className="heading-lg mb-6 text-center">
            Business Websites Built for Performance
          </h2>

          <div className="card">

            <p className="text-body mb-5">
              A well-designed website is essential for businesses that want to
              establish a strong online presence. It helps customers learn about
              your services, builds credibility, and allows potential clients to
              connect with your business easily.
            </p>

            <p className="text-body mb-5">
              CoreVision provides professional website development services for
              SMEs across Klang Valley. We build modern, responsive websites
              designed to present your business professionally while ensuring
              reliable performance across devices.
            </p>

            <p className="text-body mb-5">
              Whether you need a company website, a service-based platform, or a
              custom web solution, our team can design and develop a website
              that reflects your business goals and supports long-term growth.
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
              Need a Professional Website for Your Business?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can design and develop a modern website that
              strengthens your online presence and supports business growth.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-primary">
                Request Website Development Consultation
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