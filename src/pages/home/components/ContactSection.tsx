import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "528331863939";
const INSTAGRAM_URL = "https://www.instagram.com/maheti_decants?igsh=Y3hwNzBmbTBsOWtoo";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 px-6 bg-brand-black">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-brand-gold font-outfit text-xs tracking-[0.4em] uppercase mb-4"
        >
          Comunícate con nosotros
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-white text-4xl sm:text-5xl italic mb-6"
        >
          Contáctanos
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 font-outfit text-sm"
        >
          Estamos disponibles para resolver tus dudas y recibir tu pedido.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* WhatsApp Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="bg-brand-black border border-white/5 rounded-3xl p-10 text-center flex flex-col items-center group hover:border-green-500/20 transition-all duration-500"
        >
          <div className="w-16 h-16 rounded-full border border-green-500/30 flex items-center justify-center mb-6 bg-green-500/5 group-hover:bg-green-500/10 transition-colors">
            <i className="ri-whatsapp-line text-3xl text-green-500" />
          </div>
          <h3 className="text-white font-serif text-2xl italic mb-2">WhatsApp</h3>
          <p className="text-white/30 font-outfit text-[10px] tracking-[0.2em] uppercase mb-4">Pedidos y Consultas</p>
          <p className="text-green-500 font-outfit font-medium mb-8">+{WHATSAPP_NUMBER.slice(0,2)} {WHATSAPP_NUMBER.slice(2,5)} {WHATSAPP_NUMBER.slice(5,8)} {WHATSAPP_NUMBER.slice(8)}</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-500/70 hover:text-green-500 font-outfit text-xs tracking-widest uppercase flex items-center gap-2 transition-colors mt-auto"
          >
            Enviar Mensaje <i className="ri-arrow-right-line" />
          </a>
        </motion.div>

        {/* Instagram Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          className="bg-brand-black border border-white/5 rounded-3xl p-10 text-center flex flex-col items-center group hover:border-pink-500/20 transition-all duration-500"
        >
          <div className="w-16 h-16 rounded-full border border-pink-500/30 flex items-center justify-center mb-6 bg-pink-500/5 group-hover:bg-pink-500/10 transition-colors">
            <i className="ri-instagram-line text-3xl text-pink-500" />
          </div>
          <h3 className="text-white font-serif text-2xl italic mb-2">Instagram</h3>
          <p className="text-white/30 font-outfit text-[10px] tracking-[0.2em] uppercase mb-4">Síguenos y Escríbenos</p>
          <p className="text-pink-500 font-outfit font-medium mb-8">@maheti_decants</p>
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-pink-500/70 hover:text-pink-500 font-outfit text-xs tracking-widest uppercase flex items-center gap-2 transition-colors mt-auto"
          >
            Ver Perfil <i className="ri-arrow-right-line" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
