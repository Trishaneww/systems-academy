import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";


const Home = () => {
  return (
    <div className="flex flex-col bg-[#00030F] scroll-smooth">
      <Hero />
      <Faq />
      <CTA />
    </div>
  );
};

export default Home;