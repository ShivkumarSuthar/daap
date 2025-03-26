import { useState } from "react";
import Image from "next/image";

const WhyChooseUs = () => {
    const images = {
        expertise: "/images/global/why-choose-img1.png",
        services: "/images/global/why-choose-img2.png",
        client: "/images/global/why-choose-img3.png",
        quality: "/images/global/why-choose-img3.png",
        support: "/images/global/why-choose-img3.png",
    };

    const [currentImage, setCurrentImage] = useState(images.expertise);

    return (
        <section className="why__wrapper">
            <h2 className="section__title">Why Choose Us</h2>
            <div className="why__content">
                <h2 className="section__heading">Reimagined User Experiences</h2>
                <section className="why__inner__wrapper">
                    {/* Left Side - Image */}
                    <div className="image__container">
                        <Image
                            src={currentImage}
                            width={500}
                            height={400}
                            alt="Why Choose Us"
                            className="image"
                        />
                    </div>

                    {/* Right Side - Points */}
                    <div className="points__container">
                        <div
                            className="point"
                            onMouseEnter={() => setCurrentImage(images.expertise)}
                        >
                            <h4>01. Expertise & Innovation</h4>
                            <p>We have 14+ years of experience delivering modern and scalable solutions worldwide.</p>
                        </div>
                        <div
                            className="point"
                            onMouseEnter={() => setCurrentImage(images.services)}
                        >
                            <h4>02. End-to-End Services</h4>
                            <p>From planning to deployment, we provide comprehensive support and maintenance.</p>
                        </div>
                        <div
                            className="point"
                            onMouseEnter={() => setCurrentImage(images.client)}
                        >
                            <h4>03. Customer Focused</h4>
                            <p>We prioritize performance, security, and scalability tailored to client needs.</p>
                        </div>
                        <div
                            className="point"
                            onMouseEnter={() => setCurrentImage(images.quality)}
                        >
                            <h4>04. Premium Results</h4>
                            <p>We maintain the highest standards, ensuring every project is delivered with precision and quality.</p>
                        </div>
                        <div
                            className="point"
                            onMouseEnter={() => setCurrentImage(images.support)}
                        >
                            <h4>05. 24/7 Customer Support</h4>
                            <p>Our dedicated team is available around the clock to assist with your needs.</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default WhyChooseUs;