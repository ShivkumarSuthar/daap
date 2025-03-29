  import React, { useState, useEffect, useRef } from 'react';
  import Image from 'next/image';
  import { COMPANY_INFO } from '../common/constant';
  import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

  const TechStackSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(COMPANY_INFO.TECH_CATEGORIES[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoryListRef = useRef(null);

  // Auto-scroll effect without moving the page
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       (prevIndex + 1) % COMPANY_INFO.TECH_CATEGORIES.length
  //     );
  //   }, 3000);

  //   return () => clearInterval(timer);
  // }, []);

  // Update category without scrolling the page
  useEffect(() => {
    setSelectedCategory(COMPANY_INFO.TECH_CATEGORIES[currentIndex]);

    // Keep selected category in view without scrolling the page
    if (categoryListRef.current) {
      const buttons = categoryListRef.current.querySelectorAll('.category-button');
      // if (buttons[currentIndex]) {
      //   buttons[currentIndex].scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'nearest',
      //     inline: 'center',
      //   });
      // }
    }
  }, [currentIndex]);

  // Manual navigation
  const navigateCategory = (direction) => {
    const newIndex = direction === 'left'
      ? (currentIndex - 1 + COMPANY_INFO.TECH_CATEGORIES.length) % COMPANY_INFO.TECH_CATEGORIES.length
      : (currentIndex + 1) % COMPANY_INFO.TECH_CATEGORIES.length;

    setCurrentIndex(newIndex);
  };

    return (
      <section className="tech-stack-section">
        <h2 className="section-title">
          Cutting-Edge Technologies Powering Next-Gen Applications
        </h2>

        {/* Tech Stack Display */}
        <div className="tech-stack-content">
          {/* Mobile Category Carousel */}
          <div className="mobile-category-carousel">
            {/* <button
              className="nav-button nav-left"
              onClick={() => navigateCategory('left')}
            >
              <FaChevronLeft />
            </button> */}

            <div
              className="category-container"
              ref={categoryListRef}
            >
              {COMPANY_INFO.TECH_CATEGORIES.map((category, index) => (
                <button
                  key={category}
                  className={`category-button ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* <button
              className="nav-button nav-right"
              onClick={() => navigateCategory('right')}
            >
              <FaChevronRight />
            </button> */}
          </div>
          <div className="tech-grid">
            {[
              ...(COMPANY_INFO.TECH_STACK[selectedCategory] || []),
              ...Array(8 - (COMPANY_INFO.TECH_STACK[selectedCategory]?.length || 0)).fill(null),
            ].map((tech, index) => (
                <div key={index} className={`tech-box ${!tech ? 'placeholder' : ''}`}>
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
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default TechStackSection;