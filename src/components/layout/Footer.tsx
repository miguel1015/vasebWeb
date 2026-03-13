import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

const quickLinks = [
  { label: "Inicio", to: "/" },
  { label: "Productos", to: "/products" },
  { label: "Sobre Nosotros", to: "/about" },
  { label: "Contacto", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary dark:bg-[#0a0a18] text-white transition-colors duration-300">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/3 via-transparent to-gold/5" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 py-7 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-wide">
              <span className="text-gold">VASEB</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Tu destino para encontrar los mejores productos con la calidad y el estilo que mereces.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-gold/50 hover:bg-gold/10 hover:text-gold hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold/80">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group flex items-center gap-1.5 text-sm text-white/55 transition-colors duration-200 hover:text-white"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-gold/50 transition-transform duration-200 group-hover:translate-x-0.5" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold/80">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" />
                <div className="text-sm text-white/55">
                  <p>1-50-477-738</p>
                  <p>+1-391-2650-8109</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold/60" />
                <a
                  href="mailto:info@vaseb.com"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  info@vaseb.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" />
                <span className="text-sm text-white/55">
                  Calle Principal #123
                  <br />
                  Bogotá, Colombia
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold/80">
              Horarios
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold/60" />
                <span className="text-sm text-white/55">Lunes a Sábado</span>
              </li>
              <li className="ml-7 text-sm text-white/55">
                9:30 AM – 6:00 PM
              </li>
              <li className="ml-7 mt-2">
                <span className="inline-block rounded-full bg-green-500/15 px-3 py-0.5 text-xs font-medium text-green-400">
                  Abierto ahora
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-4">
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold/80">
              Newsletter
            </h4>
            <div className="flex max-w-sm overflow-hidden rounded-lg border border-white/10">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:bg-white/10"
              />
              <button className="shrink-0 bg-gold px-5 text-xs font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-gold-dark">
                Enviar
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-3 sm:flex-row">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} VASEB. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-white/35 transition-colors hover:text-white/60">
              Política de privacidad
            </a>
            <a href="#" className="text-xs text-white/35 transition-colors hover:text-white/60">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
