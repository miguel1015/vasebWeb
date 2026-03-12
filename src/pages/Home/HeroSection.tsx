import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[400px] overflow-hidden sm:h-[480px] lg:h-[600px]">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&h=700&fit=crop&q=80"
        alt="Sala de estar moderna con sofá elegante"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center">
        <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          Diseña tu hogar con estilo
        </h1>
        <Link
          to="/catalogo"
          className="mt-5 sm:mt-6 inline-flex items-center justify-center rounded-lg bg-[#4a5a7a]/90 px-8 py-3 sm:px-10 sm:py-4 text-lg sm:text-2xl font-light tracking-wide text-white/90 shadow-md transition-all hover:bg-[#3d4f6f] hover:shadow-lg active:scale-[0.97]"
        >
          Ver catálogo
        </Link>
      </div>
    </section>
  );
}
