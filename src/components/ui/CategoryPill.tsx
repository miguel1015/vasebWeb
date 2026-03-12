import type { CategoryInfo } from "@/types/product";

interface CategoryPillProps {
  category: CategoryInfo;
  isActive: boolean;
  onClick: (id: string) => void;
}

export default function CategoryPill({
  category,
  isActive,
  onClick,
}: CategoryPillProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(category.id)}
      className={`flex shrink-0 items-center justify-center px-5 py-3 sm:px-6 sm:py-3.5 md:h-17 md:w-40 font-sans text-sm sm:text-base md:text-lg font-medium tracking-wide transition-all ${
        isActive
          ? "border-[#d4cdc4] bg-[#d9d4cf] text-black shadow-md"
          : "border-[#e0d9d1] bg-[#e6e1dd] text-black shadow-sm hover:bg-[#d9d4cf] hover:shadow-md"
      }`}
    >
      {category.label}
    </button>
  );
}
