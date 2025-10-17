import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Faq from "@/components/homepage/Faq";
import Products from "@/components/homepage/Products";
import Testimonials from "@/components/homepage/Testimonials";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Contact from "@/components/homepage/Contact";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
