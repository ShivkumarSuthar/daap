import Link from "next/link";
import { COMPANY_INFO } from "../common/constant";
import { FiUsers } from "react-icons/fi";
import Image from "next/image";

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        {/* Heading Section */}
        <div className="service__page__head">
          <span className="page__tittle">
            <FiUsers size={20} className="page__icon" />
            <h1>Services</h1>
          </span>

          <h2 className="service_section__heading">We Offer a Comprehensive Range of Services to Meet Your Needs</h2>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {COMPANY_INFO.services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4">
              <Link href={`/services/${service.id}`} className="service-card d-block">
                <Image src={service.image} className="icon" alt='services' width={100} height={100} />
                <h3 className="fw-bold">{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center py-5">
          <Link href="/services">
            <button className="btn explore-btn">Explore More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
