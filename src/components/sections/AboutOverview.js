import Link from 'next/link';
import Image from 'next/image';
import { FiUsers } from "react-icons/fi";
import { HiArrowUpRight, HiPlay } from "react-icons/hi2";
import { COMPANY_INFO } from '../common/constant';

export default function About() {
  return (
    <div>
      <section className="about__page">
        <div className="container about__page__section">
          <div className="row p-0 m-0">
            <div className="col-lg-12 p-0">

              {/* Title Section */}
              <span className="page__tittle">
                <FiUsers size={20} className="page__icon" />
                <h1>Who We Are?</h1>
              </span>

              {/* Large Text Below the Title */}
              <h2 className="lead__text">{COMPANY_INFO.aboutSection.title}</h2>

              {/* Adding a container div to properly handle the row */}
              <div className="container p-0">
                {/* Row for Left Content & Images */}
                <div className="row d-flex align-items-center about__page__inner m-0">

                  {/* Left Section */}
                  <div className="p-0 col-md-12 col-sm-12 about__page__left">
                    <div className="about__content">
                      <p>{COMPANY_INFO.aboutSection.description[0]}</p>
                      <p>{COMPANY_INFO.aboutSection.description[1]}</p>
                    </div>
                    <Link href="/read-more" className="btn btn__read__more">
                      Read More <HiArrowUpRight className="btn__icon" />
                    </Link>
                  </div>

                  {/* Right Section - Two Images with Different CSS */}
                  <div className="about__images col-md-12 col-sm-12">

                    <div className="about__image__wrapper">
                      <Image
                        src={COMPANY_INFO.aboutSection.smallImage.src}
                        alt={COMPANY_INFO.aboutSection.smallImage.alt}
                        width={COMPANY_INFO.aboutSection.smallImage.width}
                        height={COMPANY_INFO.aboutSection.smallImage.height}
                        className="about__image about__image__small"
                      />
                    </div>

                    {/* Main Image with Play Icon */}
                    <div className="about__image__wrapper wrapper__main">
                      <Image
                        src={COMPANY_INFO.aboutSection.mainImage.src}
                        alt={COMPANY_INFO.aboutSection.mainImage.alt}
                        width={COMPANY_INFO.aboutSection.mainImage.width}
                        height={COMPANY_INFO.aboutSection.mainImage.height}
                        className="about__image about__image__main"
                      />
                      <div className="play__icon">
                        <HiPlay size={30} className="play__icon__svg" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}