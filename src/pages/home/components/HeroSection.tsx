import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";

interface Particle {
  id: number; x: number; y: number; size: number;
  duration: number; delay: number; opacity: number;
}

function GoldenParticles() {
  const particles: Particle[] = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.5 + 0.3,
    })), []);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: p.id % 2 === 0 ? `rgba(255, 222, 112, ${p.opacity})` : `rgba(23, 59, 100, ${p.opacity})`,
            boxShadow: `0 0 ${p.size * 2}px ${p.id % 2 === 0 ? `rgba(255,222,112,0.1)` : `rgba(23,59,100,0.1)`}`,
          }}
          animate={{ y: [0, -30, 0], x: [0, Math.random() * 20 - 10, 0], opacity: [p.opacity, p.opacity * 2, p.opacity], scale: [1, 1.4, 1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/e8f79b2da385adcdc6cbbbb867bc1baf.png" alt="MAHETI PERFUMES" className="w-full h-full object-cover" style={{ objectPosition: "center 25%" }} />
        <div className="absolute inset-0 bg-brand-bg/20 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-transparent to-brand-bg" />
      </div>
      <GoldenParticles />
      <div className="relative z-10 w-full text-center px-6 max-w-5xl mx-auto">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="text-brand-gold font-outfit text-sm tracking-[0.4em] uppercase mb-6">
          Alta Perfumería · Decants 5ml
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight italic mb-8">
          Pequeño Perfume,<br />
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.65 }} className="text-brand-gold not-italic">
            Gran Olor.
          </motion.span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
          className="text-white/70 font-outfit text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Prueba las fragancias de lujo más icónicas del mundo antes de invertir en el frasco completo.
          <span className="text-white/40 italic"> 5ml. La esencia del lujo.</span>
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.95 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/productos" className="relative group overflow-hidden px-10 py-4 border border-brand-gold text-brand-gold font-outfit font-medium text-sm tracking-widest uppercase rounded-sm transition-colors duration-300 hover:text-black whitespace-nowrap cursor-pointer">
            <span className="absolute inset-0 bg-brand-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            <span className="relative">Explorar Catálogo</span>
          </Link>
          <Link to="/checkout" className="relative group overflow-hidden px-10 py-4 bg-brand-gold text-black font-outfit font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-brand-gold-light transition-colors duration-300 whitespace-nowrap cursor-pointer">
            Mi Bolsa
          </Link>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-5 flex items-center justify-center text-brand-gold/50">
          <i className="ri-arrow-down-line text-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
}
