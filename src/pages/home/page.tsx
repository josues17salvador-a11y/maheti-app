import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import HeroSection from "./components/HeroSection";
import BestSellers from "./components/BestSellers";
import QuoteSection from "./components/QuoteSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <BestSellers />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
