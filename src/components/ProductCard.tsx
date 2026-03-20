import React from 'react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative"
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-6 shadow-2xl">
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    <span className="bg-brand-gold text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                        5ml
                    </span>
                    <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest border border-white/10">
                        {product.category}
                    </span>
                </div>

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541604193435-22587c32c7c8?auto=format&fit=crop&w=800&q=80";
                    }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product)}
                        className="bg-white text-black font-bold py-4 px-8 w-full text-xs uppercase tracking-[0.2em] hover:bg-brand-gold transition-colors"
                    >
                        Añadir a la bolsa
                    </motion.button>
                </div>
            </div>

            {/* Info */}
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg md:text-xl font-serif text-white group-hover:text-brand-gold transition-colors duration-300">
                        {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 italic font-serif line-clamp-1">
                        {product.description}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-brand-gold font-bold text-base md:text-lg">${product.price} <span className="text-[10px]">MXN</span></p>
                    <p className={`text-[10px] mt-1 uppercase tracking-widest ${product.stock < 10 ? 'text-red-500' : 'text-gray-600'}`}>
                        Stock: {product.stock}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
