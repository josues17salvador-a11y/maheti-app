import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Cart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, subtotal, total } = useCart();

    return (
        <div className="pt-32 pb-24 bg-brand-black min-h-screen">
            <div className="container mx-auto px-4">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl font-serif text-white mb-4">Tu Bolsa de Compra</h1>
                    <div className="w-16 h-[1px] bg-brand-gold"></div>
                </motion.header>

                {cart.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Items List */}
                        <div className="lg:col-span-2 space-y-8">
                            <AnimatePresence>
                                {cart.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="flex flex-col sm:flex-row gap-8 items-center bg-white/5 p-8 border border-white/5 hover:border-white/10 transition-colors"
                                    >
                                        <div className="w-32 h-40 flex-shrink-0 overflow-hidden bg-black">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>

                                        <div className="flex-grow text-center sm:text-left">
                                            <h3 className="text-2xl font-serif text-white mb-2">{item.name}</h3>
                                            <p className="text-brand-gold text-sm tracking-widest uppercase mb-4">{item.presentation}</p>

                                            <div className="flex items-center justify-center sm:justify-start gap-6">
                                                <div className="flex items-center border border-white/10">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="px-4 py-2 hover:bg-white/5 transition-colors text-white"
                                                    >-</button>
                                                    <span className="px-4 text-white font-mono">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="px-4 py-2 hover:bg-white/5 transition-colors text-white"
                                                    >+</button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-500 hover:text-red-500 text-xs uppercase tracking-widest transition-colors"
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-xl font-serif text-white">${item.price * item.quantity} MXN</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 p-10 border border-white/10 h-fit sticky top-32"
                        >
                            <h2 className="text-2xl font-serif text-white mb-10">Resumen</h2>
                            <div className="space-y-6 text-sm">
                                <div className="flex justify-between text-gray-400">
                                    <span className="uppercase tracking-widest">Subtotal</span>
                                    <span className="text-white">${subtotal} MXN</span>
                                </div>
                                <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                    <span className="text-lg font-serif text-white italic">Total</span>
                                    <span className="text-3xl font-serif text-brand-gold">${total} MXN</span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="w-full bg-brand-gold text-black font-bold py-5 mt-10 block text-center uppercase tracking-[0.3em] text-[10px] hover:bg-amber-600 transition-all shadow-xl shadow-brand-gold/10"
                            >
                                Finalizar Pedido
                            </Link>

                        </motion.div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-40 border border-dashed border-white/5 rounded-3xl"
                    >
                        <i className="ri-shopping-bag-line text-6xl text-gray-700 mb-8 block"></i>
                        <h2 className="text-3xl font-serif text-white mb-6 italic">Tu bolsa está vacía</h2>
                        <Link
                            to="/productos"
                            className="inline-block bg-white text-black font-bold py-4 px-12 uppercase tracking-widest text-[10px] hover:bg-brand-gold transition-colors"
                        >
                            Volver a la tienda
                        </Link>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Cart;
