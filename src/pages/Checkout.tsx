import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
    const { cart, total } = useCart();
    const [copied, setCopied] = useState(false);

    const orderDetails = cart.map(item => `- ${item.quantity}x ${item.name} (${item.presentation})`).join('\n');
    const fullMessage = `¡Hola! Me gustaría finalizar mi pedido de MaHeTi.\n\n*Detalles del Pedido:*\n${orderDetails}\n\n*Total:* $${total} MXN\n\n¿Cómo puedo proceder con el pago y envío?`;

    const handleCopy = () => {
        navigator.clipboard.writeText(fullMessage);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    const generateWhatsAppUrl = () => {
        const encodedMessage = encodeURIComponent(fullMessage);
        return `https://api.whatsapp.com/send?phone=528333262408&text=${encodedMessage}`;
    };

    if (cart.length === 0) {
        return (
            <div className="pt-32 pb-24 bg-brand-black min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-serif text-white mb-8 italic">Tu bolsa está vacía</h2>
                    <Link to="/productos" className="bg-white text-black font-bold py-4 px-10 uppercase tracking-widest text-[10px] hover:bg-brand-gold transition-colors">
                        Ir a la tienda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 bg-brand-black min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 text-center"
                    >
                        <p className="text-brand-gold tracking-[0.5em] uppercase text-[10px] font-bold mb-4">Paso Final</p>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 italic">Finaliza tu <span className="text-brand-gold">Pedido</span></h1>
                        <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
                    </motion.header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Column 1: Summary */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white/5 border border-white/5 p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full"></div>

                            <h3 className="text-2xl font-serif text-white mb-8 italic flex items-center gap-3">
                                <span className="text-brand-gold text-lg not-italic font-sans border border-brand-gold w-8 h-8 rounded-full flex items-center justify-center">1</span>
                                Revisa y Copia
                            </h3>

                            <div className="space-y-6 mb-10 overflow-auto max-h-[300px] pr-4 custom-scrollbar">
                                {cart.map(item => (
                                    <div key={item.id} className="flex justify-between items-start gap-4">
                                        <div className="flex gap-4">
                                            <img src={item.image} className="w-12 h-16 object-cover bg-black" alt={item.name} />
                                            <div>
                                                <p className="text-white text-sm font-serif">{item.name}</p>
                                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.quantity} x ${item.price}</p>
                                            </div>
                                        </div>
                                        <p className="text-white text-sm font-serif">${item.price * item.quantity}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/10 pt-8 mb-10">
                                <div className="flex justify-between items-end mb-8">
                                    <span className="text-gray-500 font-serif italic">Total total</span>
                                    <span className="text-3xl font-serif text-brand-gold">${total} MXN</span>
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleCopy}
                                    className={`w-full py-5 flex items-center justify-center gap-3 border transition-all uppercase tracking-[0.2em] text-[10px] font-bold ${copied ? 'bg-green-600 border-green-600 text-white' : 'border-brand-gold text-brand-gold hover:bg-brand-gold/10'
                                        }`}
                                >
                                    <i className={copied ? "ri-check-line text-lg" : "ri-file-copy-line text-lg"}></i>
                                    {copied ? '¡Detalles Copiados!' : 'Copiar Detalles del Pedido'}
                                </motion.button>
                                <AnimatePresence>
                                    {copied && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="text-center text-green-500 text-[10px] mt-4 uppercase tracking-widest font-bold"
                                        >
                                            ¡Listo para pegar en tu mensaje!
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* Column 2: Finalize */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-10"
                        >
                            <h3 className="text-2xl font-serif text-white mb-2 italic flex items-center gap-3">
                                <span className="text-brand-gold text-lg not-italic font-sans border border-brand-gold w-8 h-8 rounded-full flex items-center justify-center">2</span>
                                ¡Envía e Inicia!
                            </h3>
                            <p className="text-gray-400 text-sm italic font-serif leading-relaxed mb-6">
                                Elige tu red favorita. Se abrirá un chat privado con nosotros; solo tienes que **pegar** los detalles y enviar.
                            </p>

                            <div className="space-y-6">
                                <a
                                    href={generateWhatsAppUrl()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group bg-[#25D366] p-8 transition-all hover:translate-y-[-4px] shadow-2xl shadow-green-600/10"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-4xl text-white">
                                                <i className="ri-whatsapp-line"></i>
                                            </div>
                                            <div>
                                                <h4 className="text-white text-xl font-bold uppercase tracking-widest">WhatsApp</h4>
                                                <p className="text-white/70 text-xs uppercase tracking-tighter">Venta Directa e Inmediata</p>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-line text-2xl text-white group-hover:translate-x-2 transition-transform"></i>
                                    </div>
                                </a>

                                <a
                                    href="https://ig.me/m/maheti_decants"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-8 transition-all hover:translate-y-[-4px] shadow-2xl shadow-purple-600/10"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-4xl text-white">
                                                <i className="ri-instagram-line"></i>
                                            </div>
                                            <div>
                                                <h4 className="text-white text-xl font-bold uppercase tracking-widest">Instagram Chat</h4>
                                                <p className="text-white/70 text-xs uppercase tracking-tighter">Atención vía Mensaje Directo</p>
                                            </div>
                                        </div>
                                        <i className="ri-arrow-right-line text-2xl text-white group-hover:translate-x-2 transition-transform"></i>
                                    </div>
                                </a>
                            </div>

                            <div className="pt-10 border-t border-white/5">
                                <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] text-center">
                                    Seguridad • Exclusividad • Confianza
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
