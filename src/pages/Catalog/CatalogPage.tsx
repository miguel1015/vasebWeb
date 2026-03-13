import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ui/ProductCard";
import CategoryPill from "@/components/ui/CategoryPill";
import SectionTitle from "@/components/ui/SectionTitle";
import type { Category } from "@/types/product";

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("categoria") ?? "all";
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  const handleCategoryClick = (categoryId: string) => {
    const next = categoryId === activeCategory ? "all" : categoryId;
    setActiveCategory(next);
    if (next === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ categoria: next });
    }
  };

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === (activeCategory as Category));
  }, [activeCategory]);

  return (
    <section className="bg-white dark:bg-[#121212] py-10 sm:py-14 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle className="mb-4">Catálogo</SectionTitle>
        <p className="mb-8 sm:mb-10 text-center text-xs sm:text-sm text-muted dark:text-gray-400">
          Explora toda nuestra colección de muebles y accesorios para el hogar.
        </p>

        {/* Category filters — grid on mobile, flex-wrap on desktop */}
        <div className="mb-8 sm:mb-10 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
          <button
            type="button"
            onClick={() => handleCategoryClick("all")}
            className={`flex items-center justify-center px-3.5 py-3 sm:px-6 sm:py-3.5 md:h-17 md:w-40 font-sans text-sm sm:text-base md:text-lg font-medium tracking-wide transition-all ${
              activeCategory === "all"
                ? "border-[#d4cdc4] bg-[#d9d4cf] text-black shadow-md dark:border-[#4a6fa5] dark:bg-[#4a6fa5]/20 dark:text-white"
                : "border-[#e0d9d1] bg-[#e6e1dd] text-black shadow-sm hover:bg-[#d9d4cf] hover:shadow-md dark:border-white/10 dark:bg-[#1e1e32] dark:text-gray-200 dark:hover:bg-[#2a2a42] dark:hover:shadow-md"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <CategoryPill
              key={cat.id}
              category={cat}
              isActive={activeCategory === cat.id}
              onClick={handleCategoryClick}
            />
          ))}
        </div>

        {/* Result count */}
        {filtered.length > 0 && (
          <p className="mb-4 sm:mb-5 text-center text-xs sm:text-sm text-muted dark:text-gray-400">
            {filtered.length} {filtered.length === 1 ? "producto encontrado" : "productos encontrados"}
          </p>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted dark:text-gray-400">
            No se encontraron productos en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}
