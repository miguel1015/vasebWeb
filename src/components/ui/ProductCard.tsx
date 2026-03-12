import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/format";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden bg-[#eae6e5]">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
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
      <div className="px-2 pt-3 pb-2 sm:pt-4 sm:pb-2 text-center">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">{product.name}</h3>
        <p className="mt-0.5 text-base sm:text-lg font-bold text-gray-900">
          {formatPrice(product.price)}
        </p>
        <button
          type="button"
          className="mt-2 rounded border-2 border-[#39547c] bg-[#39547c] px-4 sm:px-6 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#2c4163] hover:border-[#2c4163]"
        >
          Comprar
        </button>
      </div>
    </article>
  );
}
