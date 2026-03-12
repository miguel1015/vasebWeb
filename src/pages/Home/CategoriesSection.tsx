import { useNavigate } from "react-router-dom";
import { categories } from "@/data/categories";
import CategoryPill from "@/components/ui/CategoryPill";

export default function CategoriesSection() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/catalogo?categoria=${categoryId}`);
  };

  return (
    <section className="bg-[#f2eeef] py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Scrollable on mobile, centered wrap on larger */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-10 overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center pb-2 sm:pb-0 scrollbar-hide">
          {categories.map((category) => (
            <CategoryPill
              key={category.id}
              category={category}
              isActive={false}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
