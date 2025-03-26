import Image from "next/image";
import Link from "next/link";
import { HiArrowDown, HiArrowLongRight, HiArrowUpRight } from "react-icons/hi2";
import { IoIosArrowRoundDown } from "react-icons/io";
import CustomerStats from "./CustomerStats";
import { COMPANY_INFO } from "../common/constant";
import { HiArrowNarrowDown } from "react-icons/hi";

export default function Home() {
  return (
    <main className="main-wrapper container">
      {/* Hero Section */}
      <section className="hero__top__section">
        <div className="hero__container">
          <div className="hero__heading__wrapper">
            <p className="hero__heading__text">
              Unlock The Potential of Your Brand, Where Strategy Meets Ingenuity
              <span>
              <span className="cta-wrapper">
                <Image className="arrow-icon" width='600' height={'100'} src={'https://cdn.prod.website-files.com/665beb5ef7732b1000018aad/665ea5a70d910c2741629b79_hero-one-title-arrow.svg'} />
              </span>
              <span className="cta-wrapper">
                <Link href="/get-started">
                  <span className="btn get__started">Get In Touch</span>
                </Link>              
              </span>
              </span>
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <section className="client__hero__top">
          <CustomerStats />
        </section>
      </section>
      <Image src={'/images/665eaf05611c91ee3819c4fc_hero-Horizontal-bg.png'} className="background-image" width={100} height={100} />

      {/* New Portfolio Section */}


      {/* New Portfolio Section */}
      <section className="portfolio-section">
        <div className="container-fluid">
          <div className="row g-4">
            {COMPANY_INFO.graphics.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4 hero-card">
                <div className="portfolio-card">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={450}
                    height={450}
                    className="img-fluid"
                  />
                  <p className="portfolio-title">{item.title}</p>
                </div>
              </div>
            ))}

            <div className="container text-container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <p className="text-card">
                        We are dedicated to fostering inspiration and reaching milestones through our creative team.
                      </p>
                      <div className="text-card-bottom">
                        <div className="text-center">
                          <HiArrowNarrowDown className="down-arrow-icon" size={24} />
                        </div>
                        <div className="text-center mt-3">
                        
                          <Link href="/portfolio" className="btn btn__read__more">
                            See Portfolio <HiArrowUpRight className="btn__icon" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}