import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "./constant";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaChevronRight,
  FaCopyright,
  FaHeart,
  FaServer,
  FaCode,
  FaMobileAlt,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaDatabase,
  FaDesktop,
  FaTools
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
    setEmail("");
  };

  // Map social icons
  const socialIcons = {
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    youtube: <FaYoutube />
  };

  // IT Services
  const services = [
    { name: "Web Development", icon: <FaCode />, url: "/services/web-development" },
    { name: "Mobile Applications", icon: <FaMobileAlt />, url: "/services/mobile-apps" },
    { name: "Cloud Services", icon: <FaCloudUploadAlt />, url: "/services/cloud" },
    // { name: "Cybersecurity", icon: <FaShieldAlt />, url: "/services/security" },
    { name: "Database Management", icon: <FaDatabase />, url: "/services/database" },
    // { name: "IT Infrastructure", icon: <FaServer />, url: "/services/infrastructure" },
    { name: "UI/UX Design", icon: <FaDesktop />, url: "/services/design" },
    { name: "IT Consulting", icon: <FaTools />, url: "/services/consulting" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-wrapper">
            {/* <Image src={COMPANY_INFO.logo} alt="Company Logo" width={50} height={50} /> */}
            <h3 className="company-name">{COMPANY_INFO.name}</h3>
          </div>
          <div>
          Connect with Us & Transform Your Ideas.
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>{COMPANY_INFO.address}</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>{COMPANY_INFO.email}</p>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>{COMPANY_INFO.phone || "+1 (555) 123-4567"}</p>
            </div>
          </div>
          <div className="social-icons">
            {Object.entries(COMPANY_INFO.socialLinks).map(([platform, url]) => (
              <Link key={platform} href={url} className="social-icon-link">
                <span className="social-icon">{socialIcons[platform] || platform[0]}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>Pages</h4>
            <ul>
              {COMPANY_INFO.footerLinks.pages.map((page, index) => (
                <li key={index} className="footer-link-item">
                  <FaChevronRight className="link-arrow" />
                  <Link href={`/${page.toLowerCase()}`}>
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="link-column services-column">
            <h4>Our Services</h4>
            <div className="services-grid">
              {services.map((service, index) => (
                <Link href={service.url} key={index} className="service-item">
                  <div className="service-icon">{service.icon}</div>
                  <span className="service-name">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* <div className="link-column">
            <h4>Utility Pages</h4>
            <ul>
              {COMPANY_INFO.footerLinks.utilityPages.map((page, index) => (
                <li key={index} className="footer-link-item">
                  <FaChevronRight className="link-arrow" />
                  <Link href={`/${page.toLowerCase().replace(/\s+/g, "-")}`}>
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          
          <div className="link-column">
            <h4>Subscribe</h4>
            <p>Stay updated with our latest tech news and service offerings</p>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          <FaCopyright className="copyright-icon" /> 
          {new Date().getFullYear()} {COMPANY_INFO.name} | Made with <FaHeart className="heart-icon" /> 
          by Heavy Developer😊
        </p>
      </div>
    </footer>
  );
};

export default Footer;