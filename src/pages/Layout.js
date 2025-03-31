import CallToAction from "../components/sections/contactOverview";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Contact from "@/components/sections/Contact";
import ChatButton from "@/components/sections/ChatButton";
import NewNavbar from "@/styles/NewNavbar";

export default function Layout({ children }) {
  return (
    <section className="content-container">
      {/* <Navbar /> */}
      <NewNavbar/>
      <main>{children}</main>
      <ChatButton />
      {/* <CallToAction /> */}
      {/* <Contact/> */}
      <Footer />
    </section>
  );
}
