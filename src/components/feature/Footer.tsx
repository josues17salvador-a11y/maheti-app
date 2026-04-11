import { Link } from "react-router-dom";
const LOGO_URL = "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/f23cdd51ec5707efa83025658d428d5e.jpeg";
const INSTAGRAM_URL = "https://www.instagram.com/maheti_decants?igsh=Y3hwNzBmbTBsOWtoo";

export default function Footer() {
  return (
    <footer className="bg-[#0D223B] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-brand-gold overflow-hidden">
                <img src={LOGO_URL} alt="MAHETI" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif text-lg text-white tracking-widest uppercase">MAHETI</span>
            </Link>
            <p className="text-white/40 font-outfit text-sm leading-relaxed mb-6 max-w-sm">
              Especialistas en decants de alta gama. Prueba las mejores fragancias del mundo en formato de 5ml antes de comprometerte con un frasco completo.
            </p>
            <div className="flex gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                <i className="ri-instagram-line text-xl" />
              </a>
              <a href="https://wa.me/528331863939" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                <i className="ri-whatsapp-line text-xl" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-serif text-white text-lg italic mb-6">Explorar</h4>
            <ul className="flex flex-col gap-3 font-outfit text-sm">
              <li><Link to="/" className="text-white/40 hover:text-brand-gold transition-colors">Inicio</Link></li>
              <li><Link to="/productos" className="text-white/40 hover:text-brand-gold transition-colors">Productos</Link></li>
              <li><Link to="/checkout" className="text-white/40 hover:text-brand-gold transition-colors">Mi Bolsa</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-serif text-white text-lg italic mb-6">Contacto</h4>
            <ul className="flex flex-col gap-3 font-outfit text-sm">
              <li className="flex items-center gap-3 text-white/40">
                <i className="ri-map-pin-line text-brand-gold/60" />
                Envíos a todo México
              </li>
              <li className="flex items-center gap-3 text-white/40">
                <i className="ri-mail-line text-brand-gold/60" />
                contacto@maheti.mx
              </li>
              <li className="flex items-center gap-3 text-white/40 hover:text-brand-gold transition-colors cursor-pointer">
                <i className="ri-whatsapp-line text-brand-gold/60" />
                +52 833 186 3939
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-white/20 font-outfit text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} MAHETI PERFUMES. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
