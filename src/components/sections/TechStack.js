import React, { useState } from "react";
import Image from "next/image";
import { COMPANY_INFO } from "../common/constant";

const TechStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(COMPANY_INFO.TECH_CATEGORIES[0]);

  return (
    <section className="tech__wrapper">
      <h2 className="wrapper__heading">Cutting-Edge Technologies Powering Next-Gen Applications</h2>

      <div className="row tech__inner__wrapper m-0 p-0">
        {/* Sidebar */}
        <div className="col-md-3 p-0">
          <div className="list-group">
            {COMPANY_INFO.TECH_CATEGORIES.map((category) => (
              <button
                key={category}
                className={`list-group-item list-group-item-action ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Display */}
        <div className="col-md-9" style={{paddingLeft:'20px'}}>
          <div className="row row-cols-2 row-cols-md-4 g-3 m-0 p-0">
            {[
              ...(COMPANY_INFO.TECH_STACK[selectedCategory] || []), // Existing tech items
              ...Array(8 - (COMPANY_INFO.TECH_STACK[selectedCategory]?.length || 0)).fill(null), // Fill empty slots
            ].map((tech, index) => (
              <div key={index} className="col text-center">
                <div className={`tech-box ${!tech ? "placeholder" : ""}`}>
                  {tech ? (
                    <>
                      <Image
                        src={COMPANY_INFO.TECH_IMAGES[tech] || "/images/tech/default.png"}
                        alt={tech}
                        width={50}
                        height={50}
                        className="tech-image"
                      />
                      <p className="tech-name">{tech}</p>
                    </>
                  ) : (
                    <span className="placeholder-text">Coming Soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
