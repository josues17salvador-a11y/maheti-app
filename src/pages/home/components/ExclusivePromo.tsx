import { motion } from "framer-motion";
import { useCart } from "../../../context/CartContext";
import { products } from "../../../mocks/products";

export default function ExclusivePromo() {
  const { addToCart } = useCart();
  const comboProduct = products.find(p => p.id === 100);

  if (!comboProduct) return null;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass-morphism rounded-[2.5rem] overflow-hidden border border-white/10"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/10 to-transparent pointer-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Image Container */}
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden group">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={comboProduct.image} 
                alt="JPG Exclusive Duo" 
                loading="lazy"
                className="w-full h-full object-contain p-8"
              />
              <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            {/* Content Container */}
            <div className="p-10 lg:p-20">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block text-brand-gold font-outfit text-xs tracking-[0.5em] uppercase mb-6"
              >
                Oferta de Tiempo Limitado
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-serif text-white text-4xl sm:text-6xl italic mb-8 leading-tight"
              >
                The Royal Duo:<br />
                <span className="text-brand-gold not-italic">JPG Collection</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/60 font-outfit text-lg mb-10 leading-relaxed max-w-lg"
              >
                La dualidad perfecta de Jean Paul Gaultier. Experimenta la frescura exótica de <span className="text-white">Paradise Garden</span> y la intensidad adictiva de <span className="text-white">Le Beau Le Parfum</span> en un pack exclusivo de 5ml.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-white/30 font-outfit text-xs tracking-widest uppercase mb-1">Precio Exclusivo</span>
                  <span className="text-brand-gold font-serif text-5xl font-bold">${comboProduct.price} <span className="text-sm font-outfit font-normal text-white/40">MXN</span></span>
                </div>
                
                <button 
                  onClick={() => addToCart(comboProduct)}
                  className="w-full sm:w-auto px-12 py-5 bg-brand-gold text-black font-outfit font-bold text-sm tracking-[0.2em] uppercase rounded-full hover:bg-brand-gold-light transition-all duration-300 shadow-xl shadow-brand-gold/10 gold-sheen cursor-pointer"
                >
                  Añadir a la Bolsa
                </button>
              </div>

              <div className="mt-12 flex items-center gap-4 text-white/20">
                <div className="h-px flex-1 bg-white/10" />
                <span className="font-outfit text-[10px] tracking-[0.3em] uppercase">Edición Limitada MaHeTi</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
