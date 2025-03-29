import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"; // Import useRouter to handle dynamic slugs
import { COMPANY_INFO } from "./constant";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter(); // Get current route

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container navbar__inner">
        {/* Left Part: Logo */}
        <Link href="/" className="navbar-brand">
        <span>DAP SOlution</span>
          {/* <Image src={COMPANY_INFO.logo} alt="Company Logo" width={150} height={50} /> */}
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Middle Part: Navigation Links */}
        <div className="collapse navbar-collapse navbar__bg" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${router.pathname === "/" ? "active" : ""}`} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link href="/about" className={`nav-link dropdown-toggle ${router.pathname.startsWith("/about") ? "active" : ""}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </Link>
              <ul className="dropdown-menu">
                <li><Link href="/about/company" className="dropdown-item">Company</Link></li>
                <li><Link href="/about/team" className="dropdown-item">Our Team</Link></li>
                <li><Link href="/about/history" className="dropdown-item">History</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/services" className={`nav-link ${router.pathname.startsWith("/services") ? "active" : ""}`} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className={`nav-link ${router.pathname.startsWith("/blog") ? "active" : ""}`} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pages" className={`nav-link ${router.pathname.startsWith("/pages") ? "active" : ""}`} data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                Pages
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Part: Get Started Button */}
        <div>
  {/* <Link href="/get-a-quote" className="btn btn__get__started get__quote ms-3">
    Get a Quote
  </Link> */}
</div>

      </div>
    </nav>
  );
}
