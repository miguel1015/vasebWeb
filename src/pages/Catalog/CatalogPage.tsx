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

        {/* Category filters — scrollable on mobile */}
        <div className="mb-8 sm:mb-10 flex gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center pb-2 sm:pb-0 scrollbar-hide">
          <button
            type="button"
            onClick={() => handleCategoryClick("all")}
            className={`shrink-0 rounded-full border px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "border-accent bg-accent text-white shadow-sm"
                : "border-gray-300 bg-white text-gray-600 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-[#1e1e32] dark:text-gray-300 dark:hover:border-accent dark:hover:text-accent"
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

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
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
