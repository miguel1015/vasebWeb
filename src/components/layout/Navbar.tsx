import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Sun, Moon, Search } from "lucide-react";
import logoVaseb from "@/assets/logoVaseb.jpeg";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/catalogo", label: "Catálogo" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const hidden = useScrollDirection();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [cartBounce, setCartBounce] = useState(false);
  const prevTotal = useRef(totalItems);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  // Bounce cart icon when items change
  useEffect(() => {
    if (totalItems > prevTotal.current) {
      const timer = setTimeout(() => setCartBounce(true), 0);
      const resetTimer = setTimeout(() => setCartBounce(false), 500);
      return () => {
        clearTimeout(timer);
        clearTimeout(resetTimer);
      };
    }
    prevTotal.current = totalItems;
  }, [totalItems]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 shadow-sm transition-all duration-300 backdrop-blur-md ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } bg-black`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center group shrink-0">
          <img
            src={logoVaseb}
            alt="VASEB"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex items-center gap-2">
          {navLinks.map(({ to, label }) => {
            const isActive = pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-accent/20 text-accent"
                      : "text-gray-300 hover:bg-white/10 hover:text-accent"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action icons + hamburger */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search — desktop expandable */}
          <div className="hidden sm:flex items-center">
            <div
              className={`flex items-center overflow-hidden transition-all duration-300 rounded-full border ${
                searchOpen
                  ? "w-56 border-accent/30 bg-white/5"
                  : "w-0 border-transparent"
              }`}
            >
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full bg-transparent px-3 py-1.5 text-sm text-gray-200 outline-none placeholder:text-gray-400"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                setSearchOpen(!searchOpen);
                if (searchOpen) setSearchQuery("");
              }}
              className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Buscar"
            >
              {searchOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          >
            <span className="block transition-transform duration-300">
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </span>
          </button>

          {/* Cart with badge */}
          <button
            type="button"
            className="relative rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Carrito de compras"
          >
            <ShoppingCart className={`h-5 w-5 ${cartBounce ? "animate-cart-bounce" : ""}`} />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-sm animate-scale-in">
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </button>

          {/* User — desktop only */}
          <button
            type="button"
            className="hidden sm:inline-flex rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Mi cuenta"
          >
            <User className="h-5 w-5" />
          </button>

          {/* Hamburger button — mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Menú"
          >
            <span
              className={`block transition-transform duration-300 ${
                menuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen
            ? "max-h-80 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <ul className="flex flex-col border-t border-white/10 px-4 py-3 gap-1">
          {/* Mobile search */}
          <li className="mb-2">
            <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full bg-transparent text-sm text-gray-200 outline-none placeholder:text-gray-400"
              />
            </div>
          </li>

          {navLinks.map(({ to, label }) => {
            const isActive = pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-accent/20 text-accent"
                      : "text-gray-300 hover:bg-white/5"
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
              className="flex w-full items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-white/5"
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
