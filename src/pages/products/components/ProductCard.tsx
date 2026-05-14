import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../../../context/CartContext";
import type { Product } from "../../../mocks/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, items } = useCart();
  const [added, setAdded] = useState(false);
  const [shimmerActive, setShimmerActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState<"5ml" | "10ml" | "Combo">(
    product.category === "Promociones" ? "Combo" : "5ml"
  );
  
  const shimmerTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shimmerInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const currentPrice = selectedSize === "10ml" ? product.price10ml : selectedSize === "5ml" ? product.price5ml : product.price;
  const currentStock = selectedSize === "10ml" ? product.stock10ml : selectedSize === "5ml" ? product.stock5ml : product.stock;
  const inCart = items.find((i) => i.product.id === product.id && i.size === selectedSize);

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
    addToCart(product, selectedSize);
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
      className="group relative glass-morphism rounded-xl overflow-hidden transition-all duration-500 cursor-pointer"
    >
      <div className="absolute top-4 left-4 z-10 flex gap-2 flex-wrap">
        <span className="bg-brand-gold text-black text-[10px] font-outfit font-bold px-2 py-0.5 rounded-full whitespace-nowrap uppercase tracking-tighter">
          {selectedSize === "Combo" ? product.presentation : selectedSize}
        </span>
        <span className="bg-white/5 text-white/50 text-[10px] font-outfit px-2 py-0.5 rounded-full backdrop-blur-sm whitespace-nowrap border border-white/5 uppercase tracking-wider">{product.category}</span>
      </div>
      
      {currentStock !== undefined && currentStock <= 5 && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`text-[10px] font-outfit px-2 py-0.5 rounded-full border whitespace-nowrap ${
            currentStock === 0 
              ? "bg-red-600 text-white border-red-500 font-bold" 
              : "bg-red-900/60 text-red-300 border-red-800/40"
          }`}>
            {currentStock === 0 ? "AGOTADO" : `Últimos ${currentStock}`}
          </span>
        </div>
      )}

      <div className="relative aspect-[4/5] overflow-hidden bg-brand-bg flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`w-full h-full object-contain transition-all duration-700 ${currentStock === 0 ? 'grayscale' : 'group-hover:scale-110'}`}
          style={{ filter: currentStock === 0 ? "grayscale(100%) brightness(0.7)" : "grayscale(20%)" }}
          onMouseEnter={(e) => { if(currentStock && currentStock > 0) (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)"; }}
          onMouseLeave={(e) => { if(currentStock && currentStock > 0) (e.currentTarget as HTMLImageElement).style.filter = "grayscale(20%)"; }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(23,59,100,0.8) 0%, rgba(23,59,100,0.2) 60%, transparent 100%)" }} />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400 z-10">
          <button
            onClick={currentStock === 0 ? undefined : handleAdd}
            disabled={currentStock === 0}
            className={`relative w-full py-2.5 font-outfit font-semibold text-sm tracking-widest uppercase rounded-lg transition-all duration-500 overflow-hidden shadow-lg ${!added && currentStock && currentStock > 0 && 'gold-sheen'} ${currentStock === 0 ? 'bg-white/10 text-white/30 cursor-not-allowed border border-white/5' : ''}`}
            style={{ background: added ? "#22c55e" : "", color: added ? "#fff" : (currentStock === 0 ? "" : "#173B64") }}
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
                  {currentStock === 0 ? "No disponible" : "Añadir a la Bolsa"}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-serif text-white group-hover:text-brand-gold text-xl italic mb-1 leading-snug transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-white/50 font-outfit text-xs leading-relaxed mb-4 line-clamp-2">{product.description}</p>
        
        {product.category !== "Promociones" && (
          <div className="flex gap-2 mb-4 bg-white/5 p-1 rounded-lg border border-white/5">
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedSize("5ml"); }}
              className={`flex-1 py-1.5 rounded-md text-[10px] font-outfit font-bold transition-all ${selectedSize === "5ml" ? 'bg-brand-gold text-black shadow-lg' : 'text-white/40 hover:text-white'}`}
            >
              5ML
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedSize("10ml"); }}
              className={`flex-1 py-1.5 rounded-md text-[10px] font-outfit font-bold transition-all ${selectedSize === "10ml" ? 'bg-brand-gold text-black shadow-lg' : 'text-white/40 hover:text-white'}`}
            >
              10ML
            </button>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <span className="text-white font-serif text-xl font-semibold">${currentPrice}</span>
            <span className="text-white/40 font-outfit text-xs ml-1">MXN</span>
          </div>
          <div className="text-right">
            <p className={`text-[10px] font-outfit uppercase tracking-widest ${currentStock === 0 ? 'text-red-500 font-bold' : 'text-white/30'}`}>
              {currentStock === 0 ? 'Agotado' : `${currentStock} disp.`}
            </p>
            {inCart && (
              <span className="text-brand-gold/60 font-outfit text-[9px] bg-brand-gold/10 px-2 py-0.5 rounded-full border border-brand-gold/20 block mt-1 uppercase">
                {inCart.quantity} en bolsa
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
