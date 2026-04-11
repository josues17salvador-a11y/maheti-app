import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { bestSellers } from "../../../mocks/products";

export default function BestSellers() {
  const { addToCart } = useCart();
  return (
    <section className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-black/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-brand-gold-dark font-outfit text-xs tracking-[0.4em] uppercase mb-4">Los más deseados</p>
          <h2 className="font-serif text-brand-black text-4xl sm:text-5xl italic mb-4">Best Sellers</h2>
          <div className="w-16 h-px bg-brand-black/10 mx-auto" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white border border-brand-black/5 premium-shadow premium-shadow-hover rounded-xl overflow-hidden transition-all duration-500">
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="bg-brand-gold text-brand-black text-xs font-outfit font-semibold px-2 py-0.5 rounded-full">5ML</span>
                <span className="bg-brand-black/5 text-brand-black/60 text-xs font-outfit px-2 py-0.5 rounded-full backdrop-blur-sm">{product.category}</span>
              </div>
              <div className="relative h-72 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-brand-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <button onClick={() => addToCart(product)} className="w-full bg-brand-black text-white py-2.5 font-outfit font-semibold text-sm tracking-widest uppercase rounded-lg hover:bg-brand-black/90 transition-colors cursor-pointer whitespace-nowrap">
                    Añadir a la Bolsa
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-brand-black text-xl italic mb-2 group-hover:text-brand-gold transition-colors duration-300">{product.name}</h3>
                <p className="text-brand-black/40 font-outfit text-sm leading-relaxed mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-black font-serif text-xl font-semibold">${product.price} <span className="text-sm font-outfit font-normal text-brand-black/40">MXN</span></span>
                  <span className="text-brand-black/20 font-outfit text-xs">{product.stock} disponibles</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center mt-14">
          <Link to="/productos" className="inline-flex items-center gap-3 relative group overflow-hidden px-10 py-4 border border-brand-black/10 text-brand-black/60 font-outfit font-medium text-sm tracking-widest uppercase rounded-sm hover:border-brand-black hover:text-brand-black transition-colors duration-300 whitespace-nowrap cursor-pointer">
            Ver Catálogo Completo
            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
