import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../../../context/CartContext";
import type { Product } from "../../../mocks/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, items } = useCart();
  const [added, setAdded] = useState(false);
  const [shimmerActive, setShimmerActive] = useState(false);
  const shimmerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shimmerInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const inCart = items.find((i) => i.product.id === product.id);

  useEffect(() => {
    shimmerTimer.current = setTimeout(() => {
      setShimmerActive(true);
      setTimeout(() => setShimmerActive(false), 700);
      shimmerInterval.current = setInterval(() => {
        setShimmerActive(true);
        setTimeout(() => setShimmerActive(false), 700);
      }, 5000);
    }, Math.random() * 3000);

    return () => {
      if (shimmerTimer.current) clearTimeout(shimmerTimer.current);
      if (shimmerInterval.current) clearInterval(shimmerInterval.current);
    };
  }, []);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative bg-zinc-950 border border-white/5 rounded-xl overflow-hidden hover:border-brand-gold/30 transition-colors duration-500 cursor-pointer"
    >
      <div className="absolute top-4 left-4 z-10 flex gap-2 flex-wrap">
        <span className="bg-brand-gold text-black text-xs font-outfit font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap">5ML</span>
        <span className="bg-black/60 text-white/60 text-xs font-outfit px-2.5 py-0.5 rounded-full backdrop-blur-sm whitespace-nowrap border border-white/10 uppercase tracking-wider">{product.category}</span>
      </div>
      
      {product.stock <= 5 && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-900/60 text-red-300 text-xs font-outfit px-2.5 py-0.5 rounded-full border border-red-800/40 whitespace-nowrap">
            Últimos {product.stock}
          </span>
        </div>
      )}

      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700"
          style={{ filter: "grayscale(20%)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(20%)"; }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(15,10,5,0.6) 40%, transparent 100%)" }} />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 z-10">
          <button
            onClick={handleAdd}
            className="relative w-full py-2.5 font-outfit font-semibold text-sm tracking-widest uppercase rounded-lg transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl"
            style={{ background: added ? "#22c55e" : "#D4AF37", color: "#000" }}
          >
            <AnimatePresence>
              {shimmerActive && !added && (
                <motion.span
                  key="shimmer"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
                    width: "60%",
                  }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {added ? (
                <motion.span key="added" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-2 relative z-10">
                  <i className="ri-check-line" /> Añadido
                </motion.span>
              ) : (
                <motion.span key="add" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="relative z-10">
                  Añadir a la Bolsa
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-white group-hover:text-brand-gold text-xl italic mb-1.5 leading-snug transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-white/40 font-outfit text-sm leading-relaxed mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-brand-gold font-serif text-xl font-semibold">${product.price}</span>
            <span className="text-brand-gold/50 font-outfit text-xs ml-1">MXN</span>
          </div>
          {inCart && (
            <span className="text-brand-gold/60 font-outfit text-xs bg-brand-gold/10 px-2 py-1 rounded-full border border-brand-gold/20">
              {inCart.quantity} en bolsa
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
