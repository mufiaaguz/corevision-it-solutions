import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Layout, Smartphone, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Services Klang Valley | CoreVision IT",
  description:
    "CoreVision provides professional website development services for businesses across Klang Valley including corporate websites, landing pages, and business platforms.",
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
      "Professional business websites designed for performance, credibility, and growth.",
    url: "https://www.corevisionitsolutions.com/website-development",
    siteName: "CoreVision IT Solutions",
    type: "website"
  }
};

const services = [
  "Corporate business websites",
  "Landing page development",
  "Company profile websites",
  "Website redesign and upgrades",
  "Mobile responsive website design",
  "SEO-friendly website structure",
  "Business service websites",
  "Website performance optimisation"
];

const benefits = [
  {
    title: "Professional Online Presence",
    description:
      "A modern website helps build credibility and trust with customers.",
    icon: Globe
  },
  {
    title: "Mobile Friendly Experience",
    description:
      "Responsive design ensures websites work across phones, tablets, and desktops.",
    icon: Smartphone
  },
  {
    title: "Structured Business Content",
    description:
      "Well organised pages make it easy for visitors to understand your services.",
    icon: Layout
  },
  {
    title: "SEO Friendly Structure",
    description:
      "Optimised structure improves visibility in search engines.",
    icon: Search
  }
];

const processSteps = [
  {
    title: "1. Requirements Discussion",
    description:
      "We discuss your business goals and website objectives."
  },
  {
    title: "2. Structure Planning",
    description:
      "CoreVision plans the website layout and page structure."
  },
  {
    title: "3. Design & Development",
    description:
      "The website is designed and built using modern technologies."
  },
  {
    title: "4. Testing & Optimisation",
    description:
      "Performance, responsiveness, and usability are tested."
  },
  {
    title: "5. Launch & Support",
    description:
      "The website is launched and supported when updates are required."
  }
];

const relatedLinks = [
  {
    href: "/automation-solutions",
    title: "Automation Solutions",
    description:
      "Automate processes and workflows across business systems."
  },
  {
    href: "/business-tools-development",
    title: "Business Tools Development",
    description:
      "Custom internal tools that support operational workflows."
  },
  {
    href: "/system-integrations",
    title: "System Integrations",
    description:
      "Connect platforms and automate information flow."
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
      "Discuss your website development requirements."
  }
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <section className="section" style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}>
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">

          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Website Development
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Professional Websites for Growing Businesses
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision develops modern business websites designed to improve
              credibility, communicate services clearly, and support long-term
              business growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start a Website Project
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Technology Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="card text-center">
              <Globe size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Corporate Websites</h3>
            </div>

            <div className="card text-center">
              <Layout size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Service Websites</h3>
            </div>

            <div className="card text-center">
              <Smartphone size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">Mobile Responsive</h3>
            </div>

            <div className="card text-center">
              <Search size={36} className="mx-auto mb-4 text-[var(--accent-color)]" />
              <h3 className="heading-md">SEO Friendly</h3>
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
              A professional website is often the first point of contact between
              a business and potential customers. A well designed website helps
              companies communicate services clearly and establish credibility.
            </p>

            <p className="text-body mb-5">
              CoreVision provides website development services for SMEs across
              Klang Valley. Our websites focus on clear structure, strong
              performance, and professional design.
            </p>

            <p className="text-body">
              Whether your business needs a new corporate website, service
              platform, or landing page, our team can build a solution tailored
              to your organisation.
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
              Ready to Build Your Business Website?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              CoreVision can design and develop a professional website that
              supports your business growth and online presence.
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