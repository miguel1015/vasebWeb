import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Sun, Moon } from "lucide-react";
import logoVaseb from "@/assets/logoVaseb.jpeg";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/catalogo", label: "Catálogo" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#1a1a2e] border-b border-gray-100 dark:border-white/10 shadow-sm transition-colors duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center group overflow-hidden h-10 sm:h-12">
          <img src={logoVaseb} alt="VASEB" className="h-14 sm:h-16 w-auto object-contain" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ to, label }) => {
            const isActive = pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isActive
                      ? "text-accent border-b-2 border-accent pb-0.5"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action icons + hamburger */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full p-2 text-gray-500 dark:text-gray-400 transition-colors hover:bg-gray-100 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white"
            aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            className="relative rounded-full p-2 text-gray-500 dark:text-gray-400 transition-colors hover:bg-gray-100 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white"
            aria-label="Carrito de compras"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden sm:inline-flex rounded-full p-2 text-gray-500 dark:text-gray-400 transition-colors hover:bg-gray-100 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white"
            aria-label="Mi cuenta"
          >
            <User className="h-5 w-5" />
          </button>

          {/* Hamburger button — mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden rounded-full p-2 text-gray-500 dark:text-gray-400 transition-colors hover:bg-gray-100 dark:hover:bg-white/10 hover:text-primary dark:hover:text-white"
            aria-label="Menú"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="sm:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? 200 : 0,
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <ul className="flex flex-col border-t border-gray-100 dark:border-white/10 px-4 py-3 gap-1">
          {navLinks.map(({ to, label }) => {
            const isActive = pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
            >
              <User className="h-4 w-4" />
              Mi cuenta
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
