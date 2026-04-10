import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../../context/CartContext";

import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "528331863939";

export default function WhatsAppFlow() {
  const { items, totalPrice, totalItems } = useCart();
  const [copied, setCopied] = useState(false);

  const buildMessage = () => {
    let message = "*MAHETI PERFUMES - RESUMEN DE PEDIDO*\n";
    message += "-----------------------------------------\n\n";
    message += "*PRODUCTOS SELECCIONADOS:*\n\n";
    
    items.forEach((item) => {
      message += `*${item.product.name}* (5ml)\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Subtotal: $${item.product.price * item.quantity} MXN\n\n`;
    });
    
    message += "-----------------------------------------\n";
    message += "*RESUMEN FINAL:*\n";
    message += `Total de productos: ${totalItems}\n`;
    message += `Total a pagar: $${totalPrice} MXN\n\n`;
    message += "Hola MaHeTi, me gustaría concretar mi pedido para envío.";
    
    return message;
  };

  const handleCopy = () => {
    const message = buildMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  if (items.length === 0) {
      return (
          <div className="bg-brand-black/40 border border-white/5 rounded-2xl p-12 text-center">
              <i className="ri-shopping-bag-line text-6xl text-white/10 block mb-6" />
              <h2 className="text-white font-serif text-2xl italic mb-4">Tu bolsa está vacía</h2>
              <p className="text-white/40 mb-8 max-w-sm mx-auto">Agrega algunas fragancias a tu bolsa para continuar con tu pedido.</p>
              <Link to="/productos" className="inline-block bg-brand-gold text-black px-10 py-4 font-outfit font-bold uppercase tracking-widest text-sm rounded hover:bg-brand-gold-light transition-all">
                  Ver Productos
              </Link>
          </div>
      );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-6">
        <div className="bg-brand-black/40 border border-white/5 rounded-2xl p-8">
            <h2 className="text-white font-serif text-2xl italic mb-6">Resumen de Pedido</h2>
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                        <div className="w-16 h-20 rounded bg-brand-black/60 flex-shrink-0 overflow-hidden">
                            <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white text-base font-serif italic">{item.product.name}</h3>
                            <p className="text-brand-gold/60 text-[10px] uppercase tracking-widest mb-2">Decant 5ml</p>
                            <div className="flex items-center justify-between">
                                <span className="text-white/40 text-xs">{item.quantity} x ${item.product.price}</span>
                                <span className="text-brand-gold text-sm font-semibold">${item.product.price * item.quantity}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                <div className="flex justify-between text-white/40 text-sm">
                    <span>Subtotal ({totalItems} productos)</span>
                    <span className="text-white">${totalPrice}</span>
                </div>
                <div className="flex justify-between text-white/40 text-sm">
                    <span>Envío</span>
                    <span className="text-green-500 font-bold uppercase text-[10px] tracking-tighter">Por acordar en chat</span>
                </div>
                <div className="flex justify-between items-end pt-2">
                    <span className="text-white font-serif text-xl italic leading-none">Total</span>
                    <span className="text-brand-gold font-serif text-3xl font-bold leading-none">${totalPrice} <span className="text-xs font-outfit font-normal">MXN</span></span>
                </div>
            </div>
        </div>
      </div>

      <div className="space-y-6">
          <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-black">
                      <i className="ri-whatsapp-line text-2xl" />
                  </div>
                  <h3 className="text-white font-serif text-xl italic underline decoration-brand-gold/30">Finalizar por WhatsApp</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Al ser decants exclusivos, coordinamos el envío y pago directamente contigo para garantizar la mejor atención.
              </p>

              <div className="space-y-4">
                  <button onClick={handleCopy} className="w-full group relative flex items-center justify-between bg-brand-black/40 border border-white/10 rounded-lg p-4 hover:border-brand-gold/40 transition-all cursor-pointer">
                      <div className="flex flex-col items-start">
                          <span className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Paso 1</span>
                          <span className="text-white text-sm font-medium">Copiar detalles del pedido</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <AnimatePresence>
                              {copied && (
                                  <motion.span initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-green-500 text-xs">¡Copiado!</motion.span>
                              )}
                          </AnimatePresence>
                          <i className={`ri-${copied ? 'check-line text-green-500' : 'file-copy-line text-brand-gold'} text-xl`} />
                      </div>
                  </button>

                  <button onClick={openWhatsApp} className="w-full flex items-center justify-between bg-green-600 hover:bg-green-500 text-white rounded-lg p-5 transition-all cursor-pointer shadow-lg shadow-green-900/20">
                      <div className="flex flex-col items-start">
                         <span className="text-white/60 text-[10px] uppercase tracking-widest mb-1">Paso 2</span>
                         <span className="text-base font-bold tracking-wide">Abrir Chat y Pegar</span>
                      </div>
                      <i className="ri-whatsapp-line text-3xl" />
                  </button>
              </div>
              
              <div className="mt-8 p-4 bg-black/40 rounded-lg border border-white/5">
                  <div className="flex gap-2 items-start opacity-60">
                      <i className="ri-information-line text-brand-gold" />
                      <p className="text-[11px] text-white italic leading-relaxed">
                          Si prefieres Instagram, puedes copiar los detalles del pedido arriba y contactarnos en <span className="text-brand-gold">@maheti_decants</span>
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
