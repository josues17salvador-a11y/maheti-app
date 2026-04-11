import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=abstract dark matter texture black deep space subtle golden particles luxury background atmospheric bokeh photography premium minimal moody&width=1920&height=800&seq=maheti_quote_bg&orientation=landscape"
          alt=""
          className="w-full h-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-brand-bg/90" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="w-12 h-12 flex items-center justify-center mx-auto mb-8">
          <i className="ri-double-quotes-l text-5xl text-brand-gold/60" />
        </motion.div>
        <motion.blockquote initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-brand-black text-2xl sm:text-3xl md:text-4xl italic leading-relaxed mb-10">
          No vendemos líquido, vendemos la{" "}
          <span className="text-brand-gold-dark">memoria olfativa</span>{" "}
          de tus mejores momentos.
        </motion.blockquote>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-brand-black/10" />
          <span className="text-brand-black font-outfit text-xs tracking-[0.3em] uppercase">MAHETI</span>
          <div className="h-px w-12 bg-brand-black/10" />
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 max-w-5xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: "ri-flask-line", title: "Decants Auténticos", desc: "Fragancias originales, nunca imitaciones. Extraídas directamente del frasco." },
          { icon: "ri-truck-line", title: "Envío a Todo México", desc: "Embalaje premium con protección total. Tu pedido llega seguro." },
          { icon: "ri-shield-check-line", title: "Calidad Garantizada", desc: "Si no estás satisfecho, lo resolvemos. Sin preguntas." },
        ].map((feat) => (
          <div key={feat.title} className="bg-white border border-brand-black/5 shadow-sm rounded-xl p-6 text-center hover:border-brand-gold/50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <i className={`${feat.icon} text-2xl text-brand-gold-dark`} />
            </div>
            <h3 className="font-serif text-brand-black text-lg italic mb-2">{feat.title}</h3>
            <p className="text-brand-black/50 font-outfit text-sm leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
