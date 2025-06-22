import HeroSection from "./HeroSection";
import Services from "./servicesSection/Services";
import AboutUs from "./aboutSection/AboutUs";
import Project from "./projectsSection/Project";
import Testimonials from "./testimonialSection/Testimonial";
import Footer from "../footer/Footer";
import Contact from "./contactSection/Contact";
import Faq from "./faqSection/Faq";
function LandingPage() {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs />
      <Project />
      <Testimonials />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
}

export default LandingPage;
