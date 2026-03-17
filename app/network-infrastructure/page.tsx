import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Network,
  Shield,
  Wifi,
  Wrench,
  Layers3
} from "lucide-react";

export const metadata: Metadata = {
  title: "Network Infrastructure Services for Businesses | CoreVision IT",
  description:
    "CoreVision provides professional network infrastructure services for SMEs across Klang Valley including router setup, firewall configuration, WiFi deployment and VPN connectivity.",
  keywords: [
    "Network infrastructure services Klang Valley",
    "Office network setup Malaysia",
    "Business WiFi deployment Klang Valley",
    "Firewall configuration Malaysia",
    "VPN setup for businesses Klang Valley",
    "SME network infrastructure services"
  ],
  alternates: {
    canonical: "https://www.corevisionitsolutions.com/network-infrastructure"
  },
  openGraph: {
    title: "Network Infrastructure Services for Businesses | CoreVision IT",
    description:
      "Reliable network infrastructure services for SMEs across Klang Valley including router setup, firewall configuration, office WiFi deployment, and VPN connectivity.",
    url: "https://www.corevisionitsolutions.com/network-infrastructure",
    siteName: "CoreVision IT Solutions",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Network Infrastructure Services for Businesses | CoreVision IT",
    description:
      "Professional network infrastructure services for SMEs across Klang Valley."
  }
};

const services = [
  "Business router installation and configuration",
  "Firewall setup and network security configuration",
  "Office WiFi deployment and optimisation",
  "VLAN network design for office environments",
  "VPN setup for remote access and remote teams",
  "Network troubleshooting and performance optimisation",
  "Network hardware installation and configuration",
  "Office network upgrades and expansion"
];

const benefits = [
  {
    title: "Stable Connectivity",
    description:
      "A properly designed network prevents disruptions that affect daily business operations.",
    icon: Wifi
  },
  {
    title: "Improved Performance",
    description:
      "Optimised network infrastructure ensures faster access to applications, files, and cloud services.",
    icon: Network
  },
  {
    title: "Scalable IT Environment",
    description:
      "Network infrastructure can grow as your business expands.",
    icon: Layers3
  },
  {
    title: "Reliable Remote Access",
    description:
      "Secure VPN connectivity allows employees to access systems when working remotely.",
    icon: Shield
  },
  {
    title: "Reduced Downtime",
    description:
      "Professional configuration and monitoring minimise network-related disruptions.",
    icon: Wrench
  }
];

const processSteps = [
  {
    title: "1. Network Assessment",
    description:
      "We review your existing network environment, equipment, and connectivity requirements."
  },
  {
    title: "2. Infrastructure Planning",
    description:
      "Our team designs a network layout suited to your office size, users, and systems."
  },
  {
    title: "3. Deployment & Configuration",
    description:
      "Routers, firewalls, switches, and wireless networks are installed and configured."
  },
  {
    title: "4. Testing & Optimisation",
    description:
      "We test connectivity, performance, and reliability to ensure your network performs correctly."
  },
  {
    title: "5. Ongoing Support",
    description:
      "CoreVision can provide ongoing monitoring, maintenance, and troubleshooting when needed."
  }
];

const relatedLinks = [
  {
    href: "/managed-it",
    title: "Managed IT",
    description:
      "Ongoing monitoring and proactive IT management for stable operations."
  },
  {
    href: "/it-support",
    title: "IT Support",
    description:
      "Remote and onsite support when your team needs technical assistance."
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "See how CoreVision handles structured IT deployments and upgrades."
  },
  {
    href: "/contact",
    title: "Contact",
    description:
      "Speak with our team about your current network setup or expansion plans."
  }
];

export default function NetworkInfrastructurePage() {
  return (
    <>
      <section
        className="section"
        style={{ background: "var(--hero-gradient)", color: "#FFFFFF" }}
      >
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 text-sm font-medium text-white/80">
              Network Infrastructure Services
            </div>

            <h1 className="heading-xl mb-6 text-white">
              Reliable Network Infrastructure for Modern Businesses
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-white/90">
              CoreVision designs and deploys stable, secure, and scalable network
              environments for offices across Klang Valley. From routers and
              firewalls to WiFi and VPN connectivity, we ensure your business
              network performs reliably every day.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Plan Your Network Deployment
              </Link>

              <Link href="/projects" className="btn-secondary-light">
                View Related Projects
              </Link>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="card text-center">
              <h3 className="mb-2 font-semibold text-[var(--primary-color)]">
                Router & Firewall Setup
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Structured deployment for secure and reliable connectivity.
              </p>
            </div>

            <div className="card text-center">
              <h3 className="mb-2 font-semibold text-[var(--primary-color)]">
                Office WiFi Deployment
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Stable wireless coverage designed for day-to-day business use.
              </p>
            </div>

            <div className="card text-center">
              <h3 className="mb-2 font-semibold text-[var(--primary-color)]">
                VPN Connectivity
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Secure remote access for staff working across locations.
              </p>
            </div>

            <div className="card text-center">
              <h3 className="mb-2 font-semibold text-[var(--primary-color)]">
                Network Optimisation
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Improve reliability, performance, and long-term scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container max-w-4xl">
          <h2 className="heading-lg mb-6 text-center">
            Business Network Infrastructure That Supports Daily Operations
          </h2>

          <div className="card">
            <p className="text-body mb-5">
              A reliable network is the foundation of modern business operations.
              From internet connectivity and internal communication to cloud access
              and shared systems, businesses depend on stable network
              infrastructure to operate efficiently.
            </p>

            <p className="text-body mb-5">
              CoreVision provides professional network infrastructure services for
              SMEs across Klang Valley. We design, deploy, and optimise business
              networks to ensure reliable connectivity, improved performance, and
              long-term scalability.
            </p>

            <p className="text-body">
              Whether you are setting up a new office, upgrading existing
              infrastructure, or troubleshooting network performance issues, our
              team ensures your business network operates smoothly and securely.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-4">Services & Capabilities</h2>
            <p className="text-body mx-auto max-w-3xl">
              CoreVision provides a full range of network infrastructure services
              for business environments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="card flex gap-4">
                <CheckCircle2
                  className="mt-1 shrink-0"
                  size={22}
                  style={{ color: "var(--accent-color)" }}
                />
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
            <p className="text-body mx-auto max-w-3xl">
              A properly planned network environment improves performance,
              reliability, and day-to-day business operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="card text-left">
                  <Icon
                    size={34}
                    className="mb-4"
                    style={{ color: "var(--accent-color)" }}
                  />
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
            <p className="text-body mx-auto max-w-3xl">
              Our delivery approach is structured to make network deployment,
              upgrades, and optimisation straightforward for your business.
            </p>
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
              Need a Reliable Business Network?
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-white/90">
              Speak with CoreVision to plan or upgrade your office network
              infrastructure. Our team can assess your current setup and
              recommend improvements to ensure stable connectivity for your
              business.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request Network Consultation
              </Link>

              <a href="tel:01113037963" className="btn-secondary-light">
                Call 011-13037963
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-4">Related Services</h2>
            <p className="text-body mx-auto max-w-3xl">
              Explore related CoreVision services that support your wider IT
              environment and business operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="card block">
                <h3 className="heading-md mb-3">{link.title}</h3>
                <p className="text-body mb-4">{link.description}</p>
                <span
                  className="inline-flex items-center gap-2 font-semibold"
                  style={{ color: "var(--accent-color)" }}
                >
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