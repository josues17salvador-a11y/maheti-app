import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-6xl font-serif mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8 italic">Parece que te has perdido en nuestra fragancia...</p>
      <Link to="/" className="border border-brand-gold text-brand-gold px-8 py-3 hover:bg-brand-gold hover:text-black transition-all uppercase tracking-widest text-xs font-bold">
        Regresar al Inicio
      </Link>
    </div>
  );
}
