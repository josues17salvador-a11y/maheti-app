import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { products } from "../../mocks/products";
import type { Product } from "../../mocks/products";

const LOGO_URL = "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/f23cdd51ec5707efa83025658d428d5e.jpeg";
const INSTAGRAM_URL = "https://www.instagram.com/maheti_decants?igsh=Y3hwNzBmbTBsOWtoo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const { items, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setSearchOpen(false);
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) setCartOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCartOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const filteredProducts: Product[] = searchQuery.trim().length > 1
    ? products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Inicio", to: "/" },
    { label: "Productos", to: "/productos" },
    { label: "Contacto", to: "/#contacto" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-brand-black/95 backdrop-blur-lg border-b border-brand-gold/20" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border-2 border-brand-gold overflow-hidden flex-shrink-0 group-hover:border-brand-gold-light transition-colors duration-300">
              <img src={LOGO_URL} alt="MAHETI" className="w-full h-full object-cover" />
            </div>
            <span className="font-serif text-xl text-white tracking-widest hidden sm:block italic">
              MAHETI <span className="text-brand-gold/70 font-outfit text-sm tracking-[0.3em] uppercase not-italic font-normal">PERFUMES</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.label === "Contacto" ? (
                <a key={link.to} href="/#contacto" onClick={handleContactClick}
                  className="font-outfit text-sm tracking-widest uppercase transition-colors duration-300 text-white/70 hover:text-brand-gold cursor-pointer">
                  {link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to}
                  className={`font-outfit text-sm tracking-widest uppercase transition-colors duration-300 ${location.pathname === link.to ? "text-brand-gold" : "text-white/70 hover:text-brand-gold"}`}>
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-5">
            <div ref={searchRef} className="relative hidden sm:block">
              <button onClick={() => setSearchOpen(!searchOpen)}
                className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-brand-gold transition-colors duration-300 cursor-pointer">
                <i className="ri-search-line text-xl" />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.div initial={{ opacity: 0, y: -10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.95 }} transition={{ duration: 0.2 }}
                    className="absolute top-12 right-0 w-80 bg-brand-black/95 border border-white/10 rounded-lg overflow-hidden z-50 shadow-2xl">
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                      <i className="ri-search-line text-brand-gold" />
                      <input autoFocus type="text" placeholder="Buscar fragancias..." value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-transparent text-white text-sm outline-none placeholder-white/30 font-outfit" />
                    </div>
                    {filteredProducts.length > 0 && (
                      <div className="max-h-72 overflow-y-auto">
                        {filteredProducts.map((p) => (
                          <Link key={p.id} to="/productos" onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer text-left">
                            <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-brand-black/40">
                              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-white text-sm font-serif italic">{p.name}</p>
                                <p className="text-brand-gold/60 text-xs uppercase tracking-tighter">{p.category}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => setCartOpen(true)} className="relative w-9 h-9 flex items-center justify-center text-white/70 hover:text-brand-gold transition-colors duration-300 cursor-pointer">
                <i className="ri-shopping-bag-line text-xl" />
                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-gold text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                        {totalItems}
                    </span>
                )}
            </button>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-9 h-9 flex items-center justify-center text-white/70 hover:text-brand-gold transition-colors duration-300 cursor-pointer">
                <i className={mobileOpen ? "ri-close-line text-2xl" : "ri-menu-3-line text-2xl"} />
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <AnimatePresence>
          {cartOpen && (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartOpen(false)}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]" />
                <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.4 }}
                    className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-black z-[70] shadow-2xl flex flex-col">
                    <div className="p-6 border-b border-white/10 flex items-center justify-between">
                        <h2 className="text-white font-serif text-2xl italic">Mi Bolsa <span className="text-brand-gold text-sm not-italic ml-2">({totalItems})</span></h2>
                        <button onClick={() => setCartOpen(false)} className="text-white/50 hover:text-brand-gold transition-colors cursor-pointer">
                            <i className="ri-close-large-line text-xl" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                        {items.length === 0 ? (
                            <div className="flex-1 flex flex-col items-center justify-center opacity-30">
                                <i className="ri-shopping-bag-line text-6xl mb-4" />
                                <p className="font-outfit uppercase tracking-widest text-sm text-center">Tu bolsa está vacía</p>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.product.id} className="flex gap-4 group">
                                    <div className="w-20 h-24 rounded bg-brand-black/40 overflow-hidden flex-shrink-0">
                                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-white font-serif italic text-lg">{item.product.name}</h3>
                                            <button onClick={() => removeFromCart(item.product.id)} className="text-white/20 hover:text-red-500 transition-colors">
                                                <i className="ri-delete-bin-line" />
                                            </button>
                                        </div>
                                        <p className="text-brand-gold/60 text-xs uppercase tracking-widest mb-3">5ML · {item.product.category}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3 border border-white/10 rounded px-2 py-1">
                                                <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="text-white/40 hover:text-brand-gold">-</button>
                                                <span className="text-white text-xs w-4 text-center">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="text-white/40 hover:text-brand-gold">+</button>
                                            </div>
                                            <span className="text-brand-gold font-serif">${item.product.price * item.quantity}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {items.length > 0 && (
                        <div className="p-6 border-t border-white/10 bg-black/50">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-white/50 font-outfit uppercase text-xs tracking-widest">Subtotal</span>
                                <span className="text-brand-gold font-serif text-2xl">${totalPrice} <span className="text-xs uppercase font-outfit text-brand-gold/60">MXN</span></span>
                            </div>
                            <Link to="/checkout" className="w-full block bg-brand-gold text-black text-center py-4 font-outfit font-bold uppercase tracking-[0.2em] text-sm rounded hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/10">
                                Finalizar Pedido
                            </Link>
                        </div>
                    )}
                </motion.div>
              </>
          )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
          {mobileOpen && (
              <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "tween", duration: 0.4 }}
                className="fixed inset-0 bg-brand-black z-40 md:hidden flex flex-col p-10 pt-32">
                  <div className="flex flex-col gap-8">
                      {navLinks.map((link) => (
                           link.label === "Contacto" ? (
                            <a key={link.to} href="/#contacto" onClick={handleContactClick}
                              className="font-serif text-4xl text-white italic hover:text-brand-gold transition-colors">
                              {link.label}
                            </a>
                          ) : (
                            <Link key={link.to} to={link.to}
                              className={`font-serif text-4xl italic transition-colors ${location.pathname === link.to ? "text-brand-gold" : "text-white hover:text-brand-gold"}`}>
                              {link.label}
                            </Link>
                          )
                      ))}
                  </div>
                  
                  <div className="mt-auto">
                      <p className="text-brand-gold font-outfit text-xs tracking-widest uppercase mb-4 text-center opacity-50">Síguenos</p>
                      <div className="flex justify-center gap-6">
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/70 text-3xl hover:text-brand-gold transition-colors">
                            <i className="ri-instagram-line" />
                        </a>
                        <a href="https://wa.me/528331863939" target="_blank" rel="noopener noreferrer" className="text-white/70 text-3xl hover:text-brand-gold transition-colors">
                            <i className="ri-whatsapp-line" />
                        </a>
                      </div>
                  </div>
              </motion.div>
          )}
      </AnimatePresence>
    </>
  );
}
