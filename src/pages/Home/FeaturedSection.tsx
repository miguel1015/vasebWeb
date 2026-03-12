import { featuredProducts } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FeaturedSection() {
  return (
    <section className="bg-[#f2eeef] pt-16 sm:pt-24 pb-10 sm:pb-14 flex items-center justify-center">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6">
        <SectionTitle>Productos Destacados</SectionTitle>
        <div className="h-8 sm:h-14" />

        <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
