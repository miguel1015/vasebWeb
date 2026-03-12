import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "sofa-nordico",
    name: "Sofá Nórdico",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    category: "sofas",
    featured: true,
  },
  {
    id: "cama-moderna",
    name: "Cama Moderna",
    price: 720000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
    category: "camas",
    featured: true,
  },
  {
    id: "mesa-comedor",
    name: "Mesa de Comedor",
    price: 590000,
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop",
    category: "comedores",
    featured: true,
  },
  {
    id: "escritorio-elegante",
    name: "Escritorio Elegante",
    price: 320000,
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop",
    category: "escritorios",
    featured: true,
  },
  {
    id: "sofa-seccional",
    name: "Sofá Seccional",
    price: 890000,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&h=300&fit=crop",
    category: "sofas",
  },
  {
    id: "cama-king",
    name: "Cama King Size",
    price: 1200000,
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
    category: "camas",
  },
  {
    id: "mesa-auxiliar",
    name: "Mesa Auxiliar",
    price: 180000,
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=400&h=300&fit=crop",
    category: "comedores",
  },
  {
    id: "escritorio-minimalista",
    name: "Escritorio Minimalista",
    price: 420000,
    image:
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400&h=300&fit=crop",
    category: "escritorios",
  },
  {
    id: "lampara-pie",
    name: "Lámpara de Pie",
    price: 150000,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=300&fit=crop",
    category: "decoracion",
  },
  {
    id: "sofa-cuero",
    name: "Sofá de Cuero",
    price: 1350000,
    image:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=400&h=300&fit=crop",
    category: "sofas",
    discount: 30,
  },
  {
    id: "sofa-modular",
    name: "Sofá Modular Gris",
    price: 980000,
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&h=300&fit=crop",
    category: "sofas",
    discount: 30,
  },
  {
    id: "sillon-accent",
    name: "Sillón Accent",
    price: 560000,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    category: "sofas",
    discount: 30,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const promoProducts = products.filter((p) => p.discount);
