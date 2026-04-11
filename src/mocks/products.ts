import mandarinSkyImg from "../assets/perfumes/mandarin sky.png";
import nauticaVoyageImg from "../assets/perfumes/nautica vouyague .png";
import bhararaKingImg from "../assets/perfumes/bhara king.png";
import khamrahQahwaImg from "../assets/perfumes/khamrah qahwa .png";
import tommyImg from "../assets/perfumes/tommy.png";
import versaceErosImg from "../assets/perfumes/versace eros .png";
import ninePmImg from "../assets/perfumes/9pm.png";
import jpgParadiseImg from "../assets/perfumes/JPG Paradise garden.png";
import dylanBlueImg from "../assets/perfumes/Dylan blue.png";
import jpgLeBeauImg from "../assets/perfumes/JPG Le Beau le parfum.png";
import odysseyAquaImg from "../assets/perfumes/Odissey aqua.png";
import comboJpgImg from "../assets/promociones/2JPGx300.png";

export type Category = "Cítrico" | "Acuático" | "Amaderado" | "Oriental" | "Especia" | "Promociones";

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
    image: mandarinSkyImg,
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
    image: nauticaVoyageImg,
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
    image: bhararaKingImg,
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
    image: khamrahQahwaImg,
  },
  {
    id: 5,
    name: "Tommy (Hilfiger)",
    price: 60,
    presentation: "Decant 5ml",
    description: "Clásico fresco, mezcla de cítricos, lavanda y notas verdes.",
    category: "Cítrico",
    stock: 18,
    image: tommyImg,
  },
  {
    id: 6,
    name: "Versace Eros",
    price: 120,
    presentation: "Decant 5ml",
    description: "Menta vibrante, manzana verde y vainilla seductora.",
    category: "Oriental",
    stock: 8,
    image: versaceErosImg,
  },
  {
    id: 7,
    name: "9PM (Afnan)",
    price: 90,
    presentation: "Decant 5ml",
    description: "Manzana y canela sobre un fondo cálido de vainilla y ámbar.",
    category: "Oriental",
    stock: 14,
    image: ninePmImg,
  },
  {
    id: 8,
    name: "JPG Paradise Garden",
    price: 160,
    presentation: "Decant 5ml",
    description: "Una explosión tropical y exótica con notas verdes y acuáticas.",
    category: "Acuático",
    stock: 10,
    image: jpgParadiseImg,
    isBestSeller: true,
  },
  {
    id: 9,
    name: "Dylan Blue (Versace)",
    price: 110,
    presentation: "Decant 5ml",
    description: "Carácter mediterráneo con fuertes notas cítricas y ambroxan.",
    category: "Acuático",
    stock: 15,
    image: dylanBlueImg,
  },
  {
    id: 10,
    name: "JPG Le Beau Le Parfum",
    price: 170,
    presentation: "Decant 5ml",
    description: "Intensidad adictiva con coco, haba tonka y madera de sándalo.",
    category: "Amaderado",
    stock: 8,
    image: jpgLeBeauImg,
    isBestSeller: true,
  },
  {
    id: 11,
    name: "Odyssey Aqua",
    price: 90,
    presentation: "Decant 5ml",
    description: "Fragancia acuática y fresca con una salida cítrica vibrante y un fondo limpio.",
    category: "Acuático",
    stock: 12,
    image: odysseyAquaImg,
  },
  {
    id: 100,
    name: "Dúo pack: JPG Collection",
    price: 300,
    presentation: "2 Decants x 5ml",
    description: "La combinación definitiva de Jean Paul Gaultier. Paradise Garden y Le Beau Le Parfum en un pack exclusivo de 5ml cada uno.",
    category: "Promociones",
    stock: 5,
    image: comboJpgImg,
    isBestSeller: true,
  },
];

export const bestSellers = products.filter((p) => p.isBestSeller && p.category !== "Promociones");
export const categories: Category[] = ["Cítrico", "Acuático", "Amaderado", "Oriental", "Especia", "Promociones"];
