import Link from "next/link";

export const metadata = {
  title: "Managed IT Services Klang Valley | CoreVision IT Solutions",
  description:
    "Managed IT services for businesses across Klang Valley. CoreVision provides proactive monitoring, security management and reliable IT support.",
};

export default function ManagedITKlangValley() {
  return (
    <>
      <section className="section section-light">
        <div className="container text-center">

          <h1 className="heading-lg mb-6">
            Managed IT Services Klang Valley
          </h1>

          <p className="text-body max-w-2xl mx-auto mb-8">
            CoreVision provides managed IT services for businesses
            across Klang Valley. Our services include proactive
            monitoring, system management and responsive IT support
            to ensure reliable operations.
          </p>

          <Link href="/managed-it" className="btn-primary">
            View Managed IT Plans
          </Link>

        </div>
      </section>

      <section className="section section-white">
        <div className="container">

          <h2 className="heading-lg text-center mb-10">
            What Managed IT Services Include
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="card">
              <h3 className="font-semibold mb-2">
                System Monitoring
              </h3>
              <p className="text-body text-sm">
                Continuous monitoring to detect issues before
                they impact business operations.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">
                Security Protection
              </h3>
              <p className="text-body text-sm">
                Antivirus management, patching and system
                security monitoring.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold mb-2">
                IT Support
              </h3>
              <p className="text-body text-sm">
                Professional remote and onsite support
                across Klang Valley.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="section section-light">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Managed IT Support for SMEs
          </h2>

          <p className="text-body max-w-2xl mx-auto">
            Our managed IT services are designed for small and
            growing businesses that require reliable IT support
            without maintaining an internal IT department.
          </p>

        </div>
      </section>

      <section className="section section-white">
        <div className="container text-center">

          <h2 className="heading-lg mb-6">
            Speak with Our IT Team
          </h2>

          <Link href="/contact" className="btn-primary">
            Contact CoreVision
          </Link>

        </div>
      </section>
    </>
  );
}