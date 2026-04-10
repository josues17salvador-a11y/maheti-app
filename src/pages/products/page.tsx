import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";
import ProductCard from "./components/ProductCard";
import ProductFilters from "./components/ProductFilters";
import { products } from "../../mocks/products";
import type { Category } from "../../mocks/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "Todos">("Todos");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = !search.trim() ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "Todos" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="bg-brand-black min-h-screen">
      <Navbar />
      <section className="relative pt-36 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://readdy.ai/api/search-image?query=dark luxury background abstract minimal perfume bottles silhouette atmospheric moody black deep shadows editorial&width=1920&height=600&seq=maheti_cat_header&orientation=landscape" alt="" className="w-full h-full object-cover object-top opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-brand-gold font-outfit text-xs tracking-[0.4em] uppercase mb-3">MAHETI · Fragancias</p>
          <h1 className="font-serif text-white text-4xl sm:text-5xl italic mb-4">Catálogo Completo</h1>
          <p className="text-white/40 font-outfit text-sm max-w-md">Todos nuestros decants de 5ml, listos para descubrir. Prueba antes de invertir.</p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <ProductFilters search={search} onSearchChange={setSearch} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          
          <div className="flex items-center justify-between mb-8">
            <p className="text-white/30 font-outfit text-sm">{filtered.length} {filtered.length === 1 ? "fragancia" : "fragancias"} encontradas</p>
            {(search || activeCategory !== "Todos") && (
              <button onClick={() => { setSearch(""); setActiveCategory("Todos"); }} className="text-brand-gold/60 hover:text-brand-gold font-outfit text-xs flex items-center gap-1.5 cursor-pointer transition-colors">
                <i className="ri-refresh-line" /> Limpiar filtros
              </button>
            )}
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div layout className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <AnimatePresence>
                  {filtered.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
                <i className="ri-search-line text-5xl text-white/10 block mb-4" />
                <p className="text-white/30 font-outfit">No encontramos esa fragancia</p>
                <button onClick={() => { setSearch(""); setActiveCategory("Todos"); }} className="mt-4 text-brand-gold font-outfit text-sm hover:underline cursor-pointer">Ver todos los productos</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </main>
  );
}
