import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/format";
import { useCart } from "@/context/CartContext";
import { showToast } from "@/components/ui/Toast";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleBuy = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    showToast(`${product.name} agregado al carrito`, product.image);
  };

  return (
    <article className="group overflow-hidden rounded-lg bg-[#eae6e5] dark:bg-[#1e1e32] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-[#2a2a42]">
        {product.discount && (
          <span className="absolute left-2 top-2 sm:left-3 sm:top-3 z-10 rounded-full bg-red-500 px-2 py-0.5 text-[10px] sm:text-xs font-semibold text-white">
            -{product.discount}%
          </span>
        )}

        {/* Skeleton placeholder */}
        {!imgLoaded && (
          <div className="absolute inset-0 skeleton" />
        )}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Quick-buy overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
          <button
            type="button"
            onClick={handleBuy}
            className="flex items-center gap-2 rounded-full bg-white/90 dark:bg-[#1e1e32]/90 px-4 py-2 text-sm font-semibold text-gray-800 dark:text-white shadow-lg opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-white dark:hover:bg-[#2a2a42] cursor-pointer"
          >
            <ShoppingCart className="h-4 w-4" />
            Agregar
          </button>
        </div>
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
          onClick={handleBuy}
          className="mt-1.5 sm:mt-2 rounded border-2 border-[#39547c] bg-[#39547c] px-3 sm:px-6 py-1 sm:py-1.5 text-[11px] sm:text-sm font-semibold text-white transition-colors hover:bg-[#2c4163] hover:border-[#2c4163] dark:border-[#4a6fa5] dark:bg-[#4a6fa5] dark:hover:bg-[#3b5a8a] dark:hover:border-[#3b5a8a] cursor-pointer"
        >
          Comprar
        </button>
      </div>
    </article>
  );
}
