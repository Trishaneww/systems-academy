import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Testimonials2 from "@/components/Testimonials2";


const Home = () => {
  return (
    <div className="flex flex-col bg-[#0C1117] scroll-smooth">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="testimonials">
        <Testimonials2 />
      </div>
      {/* <Testimonials /> */}
      <div id="faq">
        <Faq />
      </div>
      <CTA />
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Home;