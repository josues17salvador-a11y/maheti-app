export type Category = "Cítrico" | "Acuático" | "Amaderado" | "Oriental" | "Especia";
export interface Product {
  id: number;
  name: string;
  price: number;
  presentation: string;
  description: string;
  category: Category;
  stock: number;
  image: string;
  isBestSeller?: boolean;
}
export const products: Product[] = [
  {
    id: 1,
    name: "Mandarin Sky",
    price: 90,
    presentation: "Decant 5ml",
    description: "Frescura cítrica con mandarina jugosa y un toque amaderado.",
    category: "Cítrico",
    stock: 15,
    image: "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/5d2b3cff42f619fa66b4a6d680c78feb.png",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Nautica Voyage",
    price: 45,
    presentation: "Decant 5ml",
    description: "Acuático y limpio, con manzana verde y notas marinas.",
    category: "Acuático",
    stock: 20,
    image: "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/93435d77b80bd7f52680d01a059aa0dc.png",
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Bharara King",
    price: 110,
    presentation: "Decant 5ml",
    description: "Dulce y especiado, con cítricos brillantes y fondo de vainilla.",
    category: "Amaderado",
    stock: 12,
    image: "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/45bfa0ac5873dd522dd42634992e4995.png",
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Khamrah Qahwa",
    price: 90,
    presentation: "Decant 5ml",
    description: "Café intenso con especias cálidas y vainilla cremosa.",
    category: "Oriental",
    stock: 10,
    image: "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/a9fd6f573f5c0e6595e98f061e1051c9.png",
  },
  {
    id: 5,
    name: "Tommy (Hilfiger)",
    price: 60,
    presentation: "Decant 5ml",
    description: "Clásico fresco, mezcla de cítricos, lavanda y notas verdes.",
    category: "Cítrico",
    stock: 18,
    image: "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/2c0644be5a12f5d09442411bbd393bd5.png",
  },
  {
    id: 6,
    name: "Versace Eros",
    price: 120,
    presentation: "Decant 5ml",
    description: "Menta vibrante, manzana verde y vainilla seductora.",
    category: "Oriental",
    stock: 8,
    image: "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/bc30461299b8455fddd639662aafeff3.png",
  },
  {
    id: 7,
    name: "9PM (Afnan)",
    price: 90,
    presentation: "Decant 5ml",
    description: "Manzana y canela sobre un fondo cálido de vainilla y ámbar.",
    category: "Oriental",
    stock: 14,
    image: "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/9062487b69338b73338b387cfb8ff42b.png",
  },
  {
    id: 8,
    name: "Dior Sauvage",
    price: 150,
    presentation: "Decant 5ml",
    description: "Versátil y magnético, con notas de bergamota, pimienta seca y ambroxan.",
    category: "Cítrico",
    stock: 25,
    image: "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/93435d77b80bd7f52680d01a059aa0dc.png",
  },
  {
    id: 9,
    name: "Club de Nuit Intense",
    price: 80,
    presentation: "Decant 5ml",
    description: "Potente y varonil, con una salida deslumbrante de limón y piña ahumada.",
    category: "Amaderado",
    stock: 12,
    image: "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/45bfa0ac5873dd522dd42634992e4995.png",
    isBestSeller: true,
  },
  {
    id: 10,
    name: "Acqua di Gio Profumo",
    price: 140,
    presentation: "Decant 5ml",
    description: "La frescura inmaculada del mar combinada con incienso y pachulí profundo.",
    category: "Acuático",
    stock: 10,
    image: "https://static.readdy.ai/image/d3d0b9058c998934a9266190fd0fe716/5d2b3cff42f619fa66b4a6d680c78feb.png",
  },
];
export const bestSellers = products.filter((p) => p.isBestSeller);
export const categories: Category[] = ["Cítrico", "Acuático", "Amaderado", "Oriental", "Especia"];
