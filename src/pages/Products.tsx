import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const Products: React.FC = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('Todos');

    const filteredProducts = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === 'Todos' || p.category === category;
        return matchesSearch && matchesCategory;
    });

    const categories = ['Todos', 'Cítrico', 'Acuático', 'Amaderado', 'Oriental'];

    return (
        <div className="pt-32 pb-24 bg-brand-black min-h-screen">
            <div className="container mx-auto px-4">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <p className="text-brand-gold tracking-[0.6em] uppercase text-[10px] font-bold mb-4">Colección MaHeTi</p>
                    <h1 className="text-4xl md:text-7xl font-serif mb-6 text-white">Nuestro Catálogo</h1>
                    <div className="w-24 h-[1px] bg-brand-gold mx-auto mb-8"></div>
                    <p className="text-gray-500 max-w-xl mx-auto font-serif italic text-lg leading-relaxed">
                        Fragancias exclusivas en formato de 5ml. <br />
                        La esencia del lujo, ahora a tu alcance.
                    </p>
                </motion.header>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-12 items-center justify-between mb-20">
                    <div className="relative w-full md:w-[400px] group">
                        <input
                            type="text"
                            placeholder="Buscar fragancia..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 outline-none focus:border-brand-gold transition-all pl-12 font-serif"
                        />
                        <i className="ri-search-line absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-brand-gold transition-colors"></i>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all pb-2 border-b-2 ${category === cat
                                    ? 'border-brand-gold text-brand-gold'
                                    : 'border-transparent text-gray-500 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                    <AnimatePresence>
                        {filteredProducts.map(product => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-32">
                        <i className="ri-search-line text-4xl text-gray-700 mb-6 block"></i>
                        <h3 className="text-2xl font-serif text-white mb-2">No se encontraron resultados</h3>
                        <p className="text-gray-500 mb-8">Prueba con términos como "Cítrico" o "Oriental".</p>
                        <button
                            onClick={() => { setSearch(''); setCategory('Todos'); }}
                            className="text-brand-gold border-b border-brand-gold/30 hover:border-brand-gold transition-all pb-1 uppercase tracking-widest text-xs font-bold"
                        >
                            Ver todos los productos
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
