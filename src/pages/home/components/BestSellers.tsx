import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { bestSellers } from "../../../mocks/products";

export default function BestSellers() {
  const { addToCart } = useCart();
  return (
    <section className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-brand-gold font-outfit text-xs tracking-[0.4em] uppercase mb-4">Los más deseados</p>
          <h2 className="font-serif text-white text-4xl sm:text-5xl italic mb-4">Best Sellers</h2>
          <div className="w-16 h-px bg-brand-gold/30 mx-auto" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative glass-morphism rounded-xl overflow-hidden transition-all duration-500">
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="bg-brand-gold text-black text-xs font-outfit font-semibold px-2 py-0.5 rounded-full">5ML</span>
                <span className="bg-brand-black/5 text-brand-black/60 text-xs font-outfit px-2 py-0.5 rounded-full backdrop-blur-sm">{product.category}</span>
              </div>
              {product.stock === 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-red-600 text-white text-[10px] font-outfit font-bold px-2 py-0.5 rounded-full border border-red-500 uppercase tracking-tighter">
                    AGOTADO
                  </span>
                </div>
              )}
              <div className="relative h-72 overflow-hidden">
                <img src={product.image} alt={product.name} className={`w-full h-full object-cover object-top transition-all duration-700 ${product.stock === 0 ? 'grayscale brightness-50' : 'grayscale group-hover:grayscale-0 group-hover:scale-105'}`} />
                <div className="absolute inset-0 bg-brand-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <button 
                    onClick={product.stock === 0 ? undefined : () => addToCart(product)} 
                    disabled={product.stock === 0}
                    className={`w-full py-2.5 font-outfit font-semibold text-sm tracking-widest uppercase rounded-lg transition-colors whitespace-nowrap ${product.stock === 0 ? 'bg-white/10 text-white/20 cursor-not-allowed' : 'bg-brand-gold text-black hover:bg-brand-gold/90 cursor-pointer'}`}
                  >
                    {product.stock === 0 ? "No disponible" : "Añadir a la Bolsa"}
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-white text-xl italic mb-2 group-hover:text-brand-gold transition-colors duration-300">{product.name}</h3>
                <p className="text-white/50 font-outfit text-sm leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white font-serif text-xl font-semibold">${product.price} <span className="text-sm font-outfit font-normal text-white/40">MXN</span></span>
                  <span className={`font-outfit text-xs ${product.stock === 0 ? 'text-red-500/60' : 'text-white/20'}`}>
                    {product.stock === 0 ? "Agotado" : `${product.stock} disponibles`}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-14">
          <Link to="/productos" className="inline-flex items-center gap-3 relative group overflow-hidden px-10 py-4 border border-white/10 text-white/60 font-outfit font-medium text-sm tracking-widest uppercase rounded-sm hover:border-brand-gold hover:text-brand-gold transition-colors duration-300 whitespace-nowrap cursor-pointer">
            Ver Catálogo Completo
            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
