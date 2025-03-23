import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container py-5">
      <h1 className="text-center">About Our Company</h1>
      <p className="text-center">We are a leading IT solutions provider with years of experience.</p>

      {/* Our Values Section */}
      <section className="mt-5">
        <h2 className="text-center">Our Values</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3">
              <h3>Innovation As Tradition</h3>
              <p>We continuously push boundaries to create innovative solutions.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h3>Empowerment Through Knowledge</h3>
              <p>Helping businesses of all sizes harness digital transformation.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h3>Integrity in Every Interaction</h3>
              <p>We maintain transparency and honesty in all our relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="mt-5">
        <h2 className="text-center">Our Partners</h2>
        <p className="text-center">We collaborate with top industry leaders to bring the best services.</p>
        <div className="row">
          <div className="col-md-3 text-center">
            <img src="/partners/partner1.png" alt="Partner 1" className="img-fluid" />
            <p>Partner 1</p>
          </div>
          <div className="col-md-3 text-center">
            <img src="/partners/partner2.png" alt="Partner 2" className="img-fluid" />
            <p>Partner 2</p>
          </div>
          <div className="col-md-3 text-center">
            <img src="/partners/partner3.png" alt="Partner 3" className="img-fluid" />
            <p>Partner 3</p>
          </div>
          <div className="col-md-3 text-center">
            <img src="/partners/partner4.png" alt="Partner 4" className="img-fluid" />
            <p>Partner 4</p>
          </div>
        </div>
      </section>

      {/* Back to Home Link */}
      <div className="text-center mt-4">
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
