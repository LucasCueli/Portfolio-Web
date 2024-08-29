import AboutMe from "@/components/about-me";

import Experience from "@/components/experience";

import Introduction from "@/components/introduction";

import Navbar from "@/components/navbar";

import Portfolio from "@/components/portfolio";

import Services from "@/components/services";

// import Testimonials from "@/components/testimonials"; (Esto es para importarlos a la pagina) y se llama con <Testimonials />

import Contact from "@/components/contact";
 
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
