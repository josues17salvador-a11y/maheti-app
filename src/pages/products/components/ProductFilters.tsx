import { motion } from "framer-motion";
import type { Category } from "../../../mocks/products";
import { categories } from "../../../mocks/products";

interface ProductFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategory: Category | "Todos";
  onCategoryChange: (cat: Category | "Todos") => void;
}

export default function ProductFilters({ search, onSearchChange, activeCategory, onCategoryChange }: ProductFiltersProps) {
  const allCategories: (Category | "Todos")[] = ["Todos", ...categories];

  return (
    <div className="mb-12 space-y-6">
      <div className="relative max-w-md">
        <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold/60 text-base" />
        <input 
          type="text" 
          placeholder="Buscar por nombre o categoría..." 
          value={search} 
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-white border border-brand-black/10 rounded-lg pl-11 pr-4 py-3 text-brand-black text-sm font-outfit outline-none focus:border-brand-black/30 placeholder-brand-black/25 transition-all shadow-sm focus:shadow-md" 
        />
        {search && (
          <button onClick={() => onSearchChange("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-black/30 hover:text-brand-black cursor-pointer">
            <i className="ri-close-line text-base" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1">
        {allCategories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => onCategoryChange(cat)}
            className={`relative px-5 py-2.5 font-outfit text-xs tracking-[0.3em] uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${activeCategory === cat ? "text-brand-black font-bold" : "text-brand-black/40 hover:text-brand-black"}`}
          >
            {cat}
            {activeCategory === cat && (
              <motion.span 
                layoutId="category-underline" 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-black" 
                transition={{ type: "spring", stiffness: 400, damping: 30 }} 
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
