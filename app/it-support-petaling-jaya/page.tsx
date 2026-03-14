import Link from "next/link";

export const metadata = {
  title: "IT Support Petaling Jaya | CoreVision IT Solutions",
  description:
    "Reliable IT support for businesses in Petaling Jaya. CoreVision provides managed IT services, proactive monitoring, and professional technical support.",
};

export default function ITSupportPetalingJaya() {
  return (
    <>
      <section className="section section-light">
        <div className="container text-center">

          <h1 className="heading-lg mb-6">
            IT Support Petaling Jaya
          </h1>

          <p className="text-body max-w-2xl mx-auto mb-8">
            CoreVision IT Solutions delivers reliable IT support for
            businesses in Petaling Jaya. We help organisations maintain
            secure, stable and professionally managed IT environments.
          </p>

          <Link href="/contact" className="btn-primary">
            Request IT Support
          </Link>

        </div>
      </section>

      <section className="section section-white">
        <div className="container">

          <h2 className="heading-lg text-center mb-10">
            IT Services for Businesses in Petaling Jaya
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="card">
              <h3 className="font-semibold mb-2">
                Managed IT Services
              </h3>
              <p className="text-body text-sm">
                Proactive monitoring and IT management for reliable
                business systems.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">
                Technical Support
              </h3>
              <p className="text-body text-sm">
                Remote and onsite IT support for offices across
                Petaling Jaya.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">
                IT Infrastructure
              </h3>
              <p className="text-body text-sm">
                Secure networks, server systems and office IT
                infrastructure deployment.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Reliable IT Support for Growing Businesses
          </h2>

          <p className="text-body max-w-2xl mx-auto">
            Our team supports businesses across Petaling Jaya with
            proactive monitoring, security management and responsive
            IT support.
          </p>

        </div>
      </section>

      <section className="section section-white">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Contact CoreVision Today
          </h2>

          <Link href="/contact" className="btn-primary">
            Request Support
          </Link>

        </div>
      </section>
    </>
  );
}