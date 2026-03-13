import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { useInView } from "@/hooks/useInView";

export default function FeaturedSection() {
  const { ref: titleRef, isVisible: titleVisible } = useInView(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useInView(0.1);

  return (
    <section className="bg-[#f2eeef] dark:bg-[#121212] pt-4 sm:pt-12 pb-4 sm:pb-7 flex items-center justify-center transition-colors duration-300">
      <div className="mx-auto max-w-7xl w-full px-3 sm:px-6">
        <div
          ref={titleRef}
          className={titleVisible ? "animate-fade-up" : "opacity-0"}
        >
          <SectionTitle>Productos Destacados</SectionTitle>
        </div>

        <div
          ref={gridRef}
          className="mt-6 sm:mt-10 grid grid-cols-2 gap-2.5 sm:gap-5 lg:grid-cols-4"
        >
          {featuredProducts.map((product, i) => (
            <div
              key={product.id}
              className={gridVisible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
