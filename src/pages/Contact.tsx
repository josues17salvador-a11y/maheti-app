import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-brand-black min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-brand-gold tracking-[0.6em] uppercase text-[10px] font-bold mb-6">Atención Personalizada</p>
                        <h1 className="text-5xl md:text-8xl font-serif mb-10 text-white leading-tight">Canales de <br /><span className="italic text-brand-gold text-7xl md:text-9xl">Contacto</span></h1>
                        <p className="text-gray-400 font-serif text-xl md:text-2xl italic mb-20 max-w-2xl mx-auto leading-relaxed">
                            ¿Necesitas asesoría o quieres realizar un pedido especial? <br className="hidden md:block" /> Conecta con nosotros directamente.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl mx-auto">
                            {/* Instagram */}
                            <motion.a
                                href="https://www.instagram.com/maheti_decants/#"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -10 }}
                                className="bg-white/5 border border-white/5 p-12 hover:border-brand-gold/50 transition-all group flex flex-col items-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white text-4xl mb-6 shadow-xl shadow-purple-600/10">
                                    <i className="ri-instagram-line"></i>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">Instagram</h3>
                                <p className="text-brand-gold text-xs tracking-widest uppercase font-bold">@maheti_decants</p>
                            </motion.a>

                            {/* WhatsApp */}
                            <motion.a
                                href="https://wa.me/528333262408"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -10 }}
                                className="bg-white/5 border border-white/5 p-12 hover:border-brand-gold/50 transition-all group flex flex-col items-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center text-white text-4xl mb-6 shadow-xl shadow-green-600/10">
                                    <i className="ri-whatsapp-line"></i>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-2">WhatsApp</h3>
                                <p className="text-brand-gold text-xs tracking-widest uppercase font-bold">833 326 2408</p>
                            </motion.a>
                        </div>

                        <p className="text-gray-600 text-xs tracking-[0.3em] uppercase mt-20">
                            Próximamente disponible en Facebook
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
