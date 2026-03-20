import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-brand-gold/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center bg-brand-black overflow-hidden">
                                <span className="text-brand-gold font-serif font-bold text-[10px]">MaHeTi</span>
                            </div>
                            <span className="text-xl font-serif font-bold tracking-widest text-brand-gold">MAHETI</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Especialistas en decants de alta gama. Prueba las mejores fragancias en formato de 5ml antes de comprometerte con un frasco completo.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/maheti_decants/#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all text-xl">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://wa.me/528333262408" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-all text-xl">
                                <i className="ri-whatsapp-line"></i>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:text-right">
                        <h4 className="text-brand-gold font-serif text-lg mb-6 tracking-wide">Explorar</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link to="/productos" className="text-gray-400 hover:text-white transition-colors">Productos</Link></li>
                            <li><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 text-center">
                    <p className="text-gray-500 text-xs tracking-widest">
                        &copy; {new Date().getFullYear()} MAHETI PERFUMES. TODOS LOS DERECHOS RESERVADOS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
