import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[280px] overflow-hidden xs:h-[340px] sm:h-[480px] lg:h-[600px]">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80&fit=crop"
        alt="Sala de estar moderna con sofá elegante"
        className="absolute inset-0 h-full w-full object-cover animate-fade-in"
        style={{ animationDuration: "1.2s" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/20 dark:bg-black/50 dark:sm:bg-black/40" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-5 sm:px-6 text-center">
        <h1 className="text-2xl font-bold leading-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-[3.25rem] animate-fade-up">
          Diseña tu hogar con estilo
        </h1>
        <Link
          to="/catalogo"
          className="mt-3 sm:mt-5 inline-flex items-center justify-center rounded-lg bg-[#45628a] px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-lg font-medium tracking-wide text-white shadow-lg transition-all hover:bg-[#3a5477] hover:shadow-xl active:scale-[0.97] animate-fade-up delay-200"
        >
          Ver catálogo
        </Link>
      </div>
    </section>
  );
}
