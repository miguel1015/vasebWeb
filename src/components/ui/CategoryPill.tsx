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
      className={`flex items-center justify-center w-[calc(50%-5px)] sm:w-auto px-3.5 py-3 sm:px-6 sm:py-3.5 md:h-17 md:w-40 font-sans text-sm sm:text-base md:text-lg font-medium tracking-wide transition-all ${
        isActive
          ? "border-[#d4cdc4] bg-[#d9d4cf] text-black shadow-md dark:border-[#4a6fa5] dark:bg-[#4a6fa5]/20 dark:text-white"
          : "border-[#e0d9d1] bg-[#e6e1dd] text-black shadow-sm hover:bg-[#d9d4cf] hover:shadow-md dark:border-white/10 dark:bg-[#1e1e32] dark:text-gray-200 dark:hover:bg-[#2a2a42] dark:hover:shadow-md"
      }`}
    >
      {category.label}
    </button>
  );
}
