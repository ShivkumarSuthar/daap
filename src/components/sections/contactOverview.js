import React from "react";
import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Stand Out, Stay Relevant.</h2>
        <p>
          Producing engaging content such as blog posts, social media posts,
          videos, and infographics that reinforce the brand's messaging and
          engage the target audience.
        </p>
        <Link href="/contact" className="cta-button">
          Get In Touch
        </Link>
      </div>
      <div className="cta-image">
        <Image src="/images/cta-graphic.png" alt="CTA Graphic" width={200} height={150} />
      </div>
    </section>
  );
};

export default CallToAction;
