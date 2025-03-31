import React, { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar.module.css';
import { FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset dropdown when closing menu
    if (isOpen) setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'About', link: '/about' },
    {
      title: 'Services',
      dropdown: true,
      items: [
        { name: 'Web Development', link: '/services/web-development' },
        { name: 'Mobile Apps', link: '/services/mobile-apps' },
        { name: 'Cloud Solutions', link: '/services/cloud' },
        { name: 'IT Consulting', link: '/services/consulting' }
      ]
    },
    {
      title: 'Solutions',
      dropdown: true,
      items: [
        { name: 'Enterprise', link: '/solutions/enterprise' },
        { name: 'Startups', link: '/solutions/startups' },
        { name: 'E-Commerce', link: '/solutions/ecommerce' }
      ]
    },
    { title: 'Portfolio', link: '/portfolio' },
    { title: 'Blog', link: '/blog' },
    {
      title: 'Contact',
      dropdown: true,
      items: [
        { name: 'General Inquiry', link: '/contact/general' },
        { name: 'Technical Support', link: '/contact/support' },
        { name: 'Sales Team', link: '/contact/sales' },
        { name: 'Career Opportunities', link: '/contact/careers' },
        { name: 'Partnership', link: '/contact/partnership' }
      ]
    }
  ];

  return (
    <div className={styles.navbarContainer}>
      {/* Top info bar with address and social media */}
      {/* <div className={styles.topInfoBar}>
        <div className={styles.container}>
          <div className={styles.topInfoContent}>
            <div className={styles.address}>
              <FaMapMarkerAlt className={styles.addressIcon} />
              <span>123 Tech Street, Silicon Valley, CA 94024</span>
            </div>
            <div className={styles.topSocialIcons}>
              <a href="#" className={styles.socialIcon}><FaFacebook /></a>
              <a href="#" className={styles.socialIcon}><FaTwitter /></a>
              <a href="#" className={styles.socialIcon}><FaInstagram /></a>
              <a href="#" className={styles.socialIcon}><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div> */}
      
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
        <div className={`container-fluid px-0 ${styles.navbar__wrapper}`}>
          <Link href="/">
            <span className={styles.brand}>DAP Solution</span>
          </Link>

          <div className={styles.mobileActions}>
            {/* Only show the toggle button when menu is closed */}
            {!isOpen && (
              <button
                className={`${styles.toggleButton}`}
                type="button"
                onClick={toggleMenu}
                aria-expanded="false"
              >
                <FaBars className={styles.toggleIcon} />
              </button>
            )}
          </div>

          {/* Desktop Menu */}
          <div className={`collapse navbar-collapse ${styles.desktopMenu}`}>
            <ul className="navbar-nav">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  {item.dropdown ? (
                    <div className={styles.desktopDropdown}>
                      <span className={styles.dropdownToggle}>
                        {item.title} <i className="bi bi-chevron-down"></i>
                      </span>
                      <div className={styles.dropdownMenu}>
                        {item.items.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.link} className={styles.dropdownItem}>
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.link} className={styles.nav_link}>
                      <span className={styles.navLink}>{item.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Call Button for Desktop */}
          <a href="tel:+1234567890" className={styles.desktopCallButton}>
            <FaPhone /> <span>+123 456 7890</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenu}>
          {/* Only show close button when menu is open */}
          {isOpen && (
            <button 
              className={styles.cornerCloseButton} 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          )}
          <Link href="/">
            <span className={styles.brand}>DAP Solution</span>
          </Link>
          
          {/* Mobile Address */}
          <div className={styles.mobileAddress}>
            <FaMapMarkerAlt />
            <span>123 Tech Street, Silicon Valley, CA 94024</span>
          </div>
          
          <ul className={styles.mobileNav}>
            {navItems.map((item, index) => (
              <li key={index}>
                {item.dropdown ? (
                  <div>
                    <div
                      className={styles.mobileDropdownToggle}
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.title}
                      <i className={`bi ${activeDropdown === index ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                    </div>
                    <div className={`${styles.mobileSubmenu} ${activeDropdown === index ? styles.active : ''}`}>
                      {item.items.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.link}>
                          <span className={styles.mobileSubmenuItem} onClick={toggleMenu}>
                            {subItem.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link href={item.link}>
                    <span className={styles.mobileNavItem} onClick={toggleMenu}>
                      {item.title}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Call Button for Mobile Menu */}
          <a href="tel:+1234567890" className={styles.mobileCallButton}>
            <FaPhone /> <span>Call Now: +123 456 7890</span>
          </a>

          {/* Social Media Icons for Mobile Menu */}
          <div className={styles.mobileSocialIcons}>
            <a href="#" className={styles.mobileSocialIcon}><FaFacebook /></a>
            <a href="#" className={styles.mobileSocialIcon}><FaTwitter /></a>
            <a href="#" className={styles.mobileSocialIcon}><FaInstagram /></a>
            <a href="#" className={styles.mobileSocialIcon}><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;