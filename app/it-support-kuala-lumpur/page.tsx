import Link from "next/link";
export const metadata = {
  title: "IT Support Kuala Lumpur | CoreVision IT Solutions",
  description:
    "Professional IT support for businesses in Kuala Lumpur. CoreVision provides managed IT services, proactive monitoring, and fast technical support.",
};

export default function ITSupportKualaLumpur() {
  return (
    <>
      <section className="section section-light">
        <div className="container text-center">

          <h1 className="heading-lg mb-6">
            IT Support Kuala Lumpur
          </h1>

          <p className="text-body max-w-2xl mx-auto mb-8">
            CoreVision IT Solutions provides professional IT support for
            businesses in Kuala Lumpur. Our team delivers proactive system
            monitoring, fast technical support, and reliable IT management
            to keep your business systems running smoothly.
          </p>

          <Link href="/contact" className="btn-primary">
            Request IT Support
          </Link>

        </div>
      </section>

      <section className="section section-white">
        <div className="container">

          <h2 className="heading-lg text-center mb-10">
            IT Services for Kuala Lumpur Businesses
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="card">
              <h3 className="font-semibold mb-2">
                Managed IT Services
              </h3>
              <p className="text-body text-sm">
                Continuous monitoring and proactive maintenance to
                prevent IT disruptions and improve reliability.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">
                IT Support
              </h3>
              <p className="text-body text-sm">
                Fast remote and onsite IT support for offices across
                Kuala Lumpur.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">
                Infrastructure & Networking
              </h3>
              <p className="text-body text-sm">
                Office network setup, server deployment and secure
                business IT infrastructure.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Why Businesses Choose CoreVision
          </h2>

          <p className="text-body max-w-2xl mx-auto">
            Businesses in Kuala Lumpur rely on CoreVision for reliable
            IT support, proactive monitoring and responsive technical
            assistance that keeps operations running without disruption.
          </p>

        </div>
      </section>

      <section className="section section-white">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Need IT Support in Kuala Lumpur?
          </h2>

          <Link href="/contact" className="btn-primary">
            Contact CoreVision
          </Link>

        </div>
      </section>
    </>
  );
}