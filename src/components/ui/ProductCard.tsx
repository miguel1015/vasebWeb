import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/format";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden bg-[#eae6e5] dark:bg-[#1e1e32] transition-colors duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-[#2a2a42]">
        {product.discount && (
          <span className="absolute left-2 top-2 sm:left-3 sm:top-3 z-10 rounded-full bg-red-500 px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-white">
            -{product.discount}%
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="px-2 pt-2 pb-4 sm:pt-4 sm:pb-5 text-center">
        <h3 className="text-xs sm:text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
          {product.name}
        </h3>
        <p className="mt-0.5 text-sm sm:text-lg font-bold text-gray-900 dark:text-white">
          {formatPrice(product.price)}
        </p>
        <button
          type="button"
          className="mt-1.5 sm:mt-2 rounded border-2 border-[#39547c] bg-[#39547c] px-3 sm:px-6 py-1 sm:py-1.5 text-[11px] sm:text-sm font-semibold text-white transition-colors hover:bg-[#2c4163] hover:border-[#2c4163] dark:border-[#4a6fa5] dark:bg-[#4a6fa5] dark:hover:bg-[#3b5a8a] dark:hover:border-[#3b5a8a]"
        >
          Comprar
        </button>
      </div>
    </article>
  );
}
