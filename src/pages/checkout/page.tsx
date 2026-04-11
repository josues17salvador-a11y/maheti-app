import { Link } from "react-router-dom";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import WhatsAppFlow from "./components/WhatsAppFlow";

export default function CheckoutPage() {
  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8 text-white/30 font-outfit text-xs">
            <Link to="/" className="hover:text-white transition-colors cursor-pointer">Inicio</Link>
            <i className="ri-arrow-right-s-line" />
            <Link to="/productos" className="hover:text-white transition-colors cursor-pointer">Productos</Link>
            <i className="ri-arrow-right-s-line" />
            <span className="text-white font-semibold">Checkout</span>
          </div>

          <div className="mb-12">
            <p className="text-brand-gold font-outfit text-xs tracking-[0.4em] uppercase mb-3">Paso final</p>
            <h1 className="font-serif text-white text-4xl sm:text-5xl italic">Finalizar Pedido</h1>
          </div>

          <div className="flex items-center gap-0 mb-12 max-w-sm">
            {[
              { num: "1", label: "Selección", done: true },
              { num: "2", label: "Revisión", done: true },
              { num: "3", label: "WhatsApp", done: false },
            ].map((step, i) => (
              <div key={step.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-outfit font-bold transition-colors ${step.done ? "bg-brand-gold text-black" : "glass-morphism text-white"}`}>
                    {step.done ? <i className="ri-check-line" /> : step.num}
                  </div>
                  <span className="text-white/40 font-outfit text-[10px] uppercase tracking-wider mt-1.5 whitespace-nowrap">{step.label}</span>
                </div>
                {i < 2 && <div className="w-12 h-px bg-white/10 mb-5 mx-1" />}
              </div>
            ))}
          </div>

          <WhatsAppFlow />
        </div>
      </section>
      <Footer />
    </main>
  );
}
