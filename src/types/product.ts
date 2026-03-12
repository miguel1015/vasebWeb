export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
  discount?: number;
  featured?: boolean;
}

export type Category =
  | "sofas"
  | "camas"
  | "comedores"
  | "escritorios"
  | "decoracion";

export interface CategoryInfo {
  id: Category;
  label: string;
}
