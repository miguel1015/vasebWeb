import { useNavigate } from "react-router-dom";
import { categories } from "@/data/categories";
import CategoryPill from "@/components/ui/CategoryPill";
import { useInView } from "@/hooks/useInView";

export default function CategoriesSection() {
  const navigate = useNavigate();
  const { ref, isVisible } = useInView(0.2);

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/catalogo?categoria=${categoryId}`);
  };

  return (
    <section ref={ref} className="bg-[#f2eeef] dark:bg-[#121212] py-4 sm:py-10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 md:gap-6 lg:gap-10">
          {categories.map((category, i) => (
            <div
              key={category.id}
              className={isVisible ? "animate-scale-in" : "opacity-0"}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <CategoryPill
                category={category}
                isActive={false}
                onClick={handleCategoryClick}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
