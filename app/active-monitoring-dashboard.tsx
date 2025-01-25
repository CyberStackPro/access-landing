import { Header } from "./sections/header";

// import { About } from "./sections/about";
// import { UseCases } from "./sections/use-cases";
// import { Testimonials } from "./sections/testimonials";

// import { Footer } from "./sections/footer";
import Hero from "./sections/hero";
import { Features } from "./sections/features";
import About from "./sections/about";
import UseCases from "./sections/use-cases";
import Testimonials from "./sections/testimonials";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export function ActiveMonitoringDashboard() {
  return (
    <div className="min-h-screen ">
      <Header />
      <Hero />
      <Features />
      <About />
      <UseCases />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
