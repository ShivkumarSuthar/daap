import CallToAction from "../components/sections/contactOverview";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Contact from "@/components/sections/Contact";
import ChatButton from "@/components/sections/ChatButton";

export default function Layout({ children }) {
  return (
    <section className="content-container">
      <Navbar />
      <main>{children}</main>
      <ChatButton />
      {/* <CallToAction /> */}
      {/* <Contact/> */}
      <Footer />
    </section>
  );
}
