import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

// Hero Assets
import heroStatic from '../assets/hero/hero_static.jpg';

const Home: React.FC = () => {
    return (
        <div className="bg-brand-black min-h-screen">
            {/* Simple Premium Hero Section */}
            <section className="relative h-screen overflow-hidden flex items-center">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                >
                    {/* Cinematic Dark Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-10"></div>
                    <img
                        src={heroStatic}
                        alt="Elegancia MAHETI"
                        className="w-full h-full object-cover object-[center_25%]"
                    />
                </motion.div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-brand-gold tracking-[0.5em] uppercase text-xs mb-6 font-bold flex items-center gap-4"
                        >
                            <span className="w-8 h-[1px] bg-brand-gold"></span>
                            Alta Perfumería en 5ml
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="text-4xl md:text-8xl font-serif text-white mb-8 leading-[1.1]"
                        >
                            Pequeño <span className="italic">Perfume,</span> <br />
                            <span className="italic text-brand-gold font-serif">Gran Olor</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="text-gray-400 font-serif text-lg md:text-xl mb-12 max-w-xl italic"
                        >
                            Prueba fragancias de lujo en formato decant de 5ml. Descubre tu aroma ideal sin compromisos.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="flex flex-wrap gap-6"
                        >
                            <Link
                                to="/productos"
                                className="inline-block bg-white text-black font-bold py-5 px-14 border border-white hover:bg-brand-gold hover:border-brand-gold transition-all duration-500 tracking-[0.3em] text-[10px] uppercase shadow-2xl shadow-white/5"
                            >
                                Ver Colección
                            </Link>
                            <Link
                                to="/contacto"
                                className="inline-block border border-white/20 text-white hover:border-brand-gold hover:text-brand-gold font-bold py-5 px-14 transition-all duration-500 tracking-[0.3em] text-[10px] uppercase backdrop-blur-sm"
                            >
                                Comprar Ahora
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Vertical Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
                    <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden">
                        <motion.div
                            animate={{ top: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 w-full h-full bg-brand-gold/40"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Selection */}
            <section className="py-32 bg-brand-black">
                <div className="container mx-auto px-4">
                    <header className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div>
                            <p className="text-brand-gold tracking-[0.4em] uppercase text-[10px] font-bold mb-4">Curaduría Exclusiva</p>
                            <h2 className="text-3xl md:text-6xl font-serif text-white italic">Best Sellers</h2>
                        </div>
                        <Link to="/productos" className="text-white hover:text-brand-gold transition-colors tracking-[0.3em] text-[10px] uppercase border-b border-white/10 hover:border-brand-gold pb-2">
                            Explorar catálogo completo
                        </Link>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                        {products.slice(0, 3).map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 1 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Immersive Quote */}
            <section className="py-40 relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="text-center"
                    >
                        <i className="ri-double-quotes-l text-brand-gold text-5xl mb-12 block"></i>
                        <h3 className="text-3xl md:text-6xl font-serif text-white italic leading-tight max-w-5xl mx-auto mb-12 px-4">
                            “No vendemos líquido, vendemos la <span className="text-brand-gold">memoria olfativa</span> de tus mejores momentos.”
                        </h3>
                        <div className="w-20 h-px bg-brand-gold mx-auto"></div>
                        <p className="text-gray-500 font-serif text-xl mt-8 italic">Filosofía MaHeTi</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
