import React from "react";
import Marquee from "react-fast-marquee";
import { COMPANY_INFO } from "../common/constant";

const BrandMarquee = () => {
  return (
    <div className="marque-section">
      <p className="section__heading">🚀 Innovation in Every Pixel & Line of Code 💡</p>

      {/* First Marquee Row - Left to Right */}
      <div className="marquee-wrapper">
        <Marquee gradient={false} speed={50}>
          {COMPANY_INFO.topBrands.map((message, index) => (
            <div key={index} className="marquee-item">
              {message}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Second Marquee Row - Right to Left */}
      <div className="marquee-wrapper">
        <Marquee gradient={false} speed={50} direction="right">
          {COMPANY_INFO.bottomBrands.map((message, index) => (
            <div key={index} className="marquee-item">
              {message}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BrandMarquee;
