import { Link } from "react-router-dom";
import heroImage from "../../assets/imagePortada.png";
import heroImageMobile from "../../assets/imagePortadaResponsive.jpeg";
import heroImagePhone from "../../assets/imagePortadaPhone.png";

export default function HeroSection() {
  return (
    <section className="relative h-[60svh] overflow-hidden xs:h-[50svh] sm:h-[480px] lg:h-[600px]">
      {/* Background image */}
      <picture>
        <source media="(min-width: 1440px)" srcSet={heroImage} />
        <source media="(min-width: 640px)" srcSet={heroImageMobile} />
        <img
          src={heroImagePhone}
          alt="Sala de estar moderna con sofá elegante"
          className="absolute inset-0 h-full w-full object-cover animate-fade-in sm:object-[center_45%]"
          style={{ animationDuration: "1.2s" }}
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/20 dark:bg-black/50 dark:sm:bg-black/40" />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-end pb-30 sm:pb-42 px-3 sm:px-3 text-center">
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
