import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { cartCount } = useCart();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus on navigation
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
    }, [location]);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 border-b border-brand-gold/20' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full border-2 border-brand-gold flex items-center justify-center bg-brand-black overflow-hidden">
                        <span className="text-brand-gold font-serif font-bold text-xs">MaHeTi</span>
                    </div>
                    <span className="text-xl font-serif font-bold tracking-widest text-white hidden sm:block">MAHETI</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {['Inicio', 'Productos', 'Contacto'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
                            className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex items-center gap-5">
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:text-brand-gold transition-colors">
                        <i className="ri-search-line text-xl"></i>
                    </button>

                    <Link to="/carrito" className="relative hover:text-brand-gold transition-colors">
                        <i className="ri-shopping-cart-2-line text-xl"></i>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand-gold text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <a href="https://instagram.com/maheti" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">
                        <i className="ri-instagram-line text-xl"></i>
                    </a>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className={isMobileMenuOpen ? "ri-close-line text-2xl" : "ri-menu-line text-2xl"}></i>
                    </button>
                </div>
            </div>

            {/* Search Bar Dropdown */}
            <div className={`absolute top-full left-0 w-full bg-black/95 border-b border-brand-gold/20 p-4 transition-all duration-300 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="container mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar perfume..."
                            className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 outline-none focus:border-brand-gold transition-colors"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gold">
                            <i className="ri-search-line"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-black z-40 transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {['Inicio', 'Productos', 'Contacto'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
                            className="text-2xl uppercase tracking-[0.3em] font-serif hover:text-brand-gold transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="flex gap-6 mt-10">
                        <i className="ri-instagram-line text-2xl"></i>
                        <i className="ri-facebook-line text-2xl"></i>
                        <i className="ri-twitter-line text-2xl"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
