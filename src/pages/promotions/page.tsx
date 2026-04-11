import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import { products } from "../../mocks/products";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";

export default function PromotionsPage() {
  const promos = products.filter(p => p.category === "Promociones");
  const { addToCart } = useCart();

  return (
    <main className="bg-brand-bg min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-gold font-outfit text-xs tracking-[0.5em] uppercase mb-4"
            >
              Exclusividad MaHeTi
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-white text-5xl sm:text-7xl italic leading-tight"
            >
              Ofertas Especiales
            </motion.h1>
          </div>

          <div className="space-y-24">
            {promos.length > 0 ? (
              promos.map((promo, index) => (
                <motion.div 
                  key={promo.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="glass-morphism rounded-[2.5rem] overflow-hidden border border-white/10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="h-[400px] lg:h-[500px] overflow-hidden bg-white/5">
                      <img 
                        src={promo.image} 
                        alt={promo.name} 
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="p-10 lg:p-16">
                      <h2 className="font-serif text-white text-3xl sm:text-4xl italic mb-6 leading-tight">
                        {promo.name}
                      </h2>
                      <p className="text-white/60 font-outfit text-lg mb-8 leading-relaxed">
                        {promo.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row items-center gap-8">
                        <div className="flex flex-col">
                          <span className="text-white/30 font-outfit text-xs tracking-widest uppercase mb-1">Precio de Oferta</span>
                          <span className="text-brand-gold font-serif text-5xl font-bold">${promo.price} <span className="text-sm font-outfit font-normal text-white/40">MXN</span></span>
                        </div>
                        
                        <button 
                          onClick={() => addToCart(promo)}
                          className="w-full sm:w-auto px-10 py-4 bg-brand-gold text-black font-outfit font-bold text-sm tracking-[0.2em] uppercase rounded-full hover:bg-brand-gold-light transition-all duration-300 shadow-xl shadow-brand-gold/10 gold-sheen cursor-pointer"
                        >
                          Añadir a la Bolsa
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-white/40 font-serif italic text-2xl">Próximamente nuevas promociones...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
