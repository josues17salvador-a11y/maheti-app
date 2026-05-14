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
import hawasIceImg from "../assets/perfumes/hawas ice.png";
import valentinoCoralImg from "../assets/perfumes/valentino coral fantasy.png";
import ariByArianaImg from "../assets/perfumes/(Ari)Ariana grande.png";
import comboJpgImg from "../assets/promociones/2JPGx300.png";
import fresh3x225Img from "../assets/promociones/fresh3x225.png";


export type Category = "Cítrico" | "Acuático" | "Amaderado" | "Oriental" | "Especia" | "Frutal" | "Promociones";

export interface Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  image: string;
  isBestSeller?: boolean;
  // Para perfumes individuales
  price5ml?: number;
  price10ml?: number;
  stock5ml?: number;
  stock10ml?: number;
  // Para promociones/combos
  price?: number;
  stock?: number;
  presentation?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Mandarin Sky",
    price5ml: 90,
    price10ml: 180,
    stock5ml: 15,
    stock10ml: 10,
    description: "Frescura cítrica con mandarina jugosa y un toque amaderado.",
    category: "Cítrico",
    image: mandarinSkyImg,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Nautica Voyage",
    price5ml: 45,
    price10ml: 90,
    stock5ml: 10,
    stock10ml: 5,
    description: "Acuático y limpio, con manzana verde y notas marinas.",
    category: "Acuático",
    image: nauticaVoyageImg,
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Bharara King",
    price5ml: 110,
    price10ml: 220,
    stock5ml: 4,
    stock10ml: 2,
    description: "Dulce y especiado, con cítricos brillantes y fondo de vainilla.",
    category: "Amaderado",
    image: bhararaKingImg,
    isBestSeller: true,
  },
  {
    id: 4,
    name: "Khamrah Qahwa",
    price5ml: 90,
    price10ml: 180,
    stock5ml: 15,
    stock10ml: 8,
    description: "Café intenso con especias cálidas y vainilla cremosa.",
    category: "Oriental",
    image: khamrahQahwaImg,
  },
  {
    id: 5,
    name: "Tommy (Hilfiger)",
    price5ml: 60,
    price10ml: 120,
    stock5ml: 0,
    stock10ml: 0,
    description: "Clásico fresco, mezcla de cítricos, lavanda y notas verdes.",
    category: "Cítrico",
    image: tommyImg,
  },
  {
    id: 6,
    name: "Versace Eros",
    price5ml: 120,
    price10ml: 240,
    stock5ml: 10,
    stock10ml: 5,
    description: "Menta vibrante, manzana verde y vainilla seductora.",
    category: "Oriental",
    image: versaceErosImg,
  },
  {
    id: 7,
    name: "9PM (Afnan)",
    price5ml: 90,
    price10ml: 180,
    stock5ml: 4,
    stock10ml: 2,
    description: "Manzana y canela sobre un fondo cálido de vainilla y ámbar.",
    category: "Oriental",
    image: ninePmImg,
  },
  {
    id: 8,
    name: "JPG Paradise Garden",
    price5ml: 160,
    price10ml: 320,
    stock5ml: 4,
    stock10ml: 2,
    description: "Una explosión tropical y exótica con notas verdes y acuáticas.",
    category: "Acuático",
    image: jpgParadiseImg,
    isBestSeller: true,
  },
  {
    id: 9,
    name: "Dylan Blue (Versace)",
    price5ml: 110,
    price10ml: 220,
    stock5ml: 10,
    stock10ml: 5,
    description: "Carácter mediterráneo con fuertes notas cítricas y ambroxan.",
    category: "Acuático",
    image: dylanBlueImg,
  },
  {
    id: 10,
    name: "JPG Le Beau Le Parfum",
    price5ml: 170,
    price10ml: 340,
    stock5ml: 8,
    stock10ml: 4,
    description: "Intensidad adictiva con coco, haba tonka y madera de sándalo.",
    category: "Amaderado",
    image: jpgLeBeauImg,
    isBestSeller: true,
  },
  {
    id: 11,
    name: "Odyssey Aqua",
    price5ml: 90,
    price10ml: 180,
    stock5ml: 12,
    stock10ml: 6,
    description: "Fragancia acuática y fresca con una salida cítrica vibrante y un fondo limpio.",
    category: "Acuático",
    image: odysseyAquaImg,
  },
  {
    id: 12,
    name: "Hawas Ice (Rasasi)",
    price5ml: 110,
    price10ml: 220,
    stock5ml: 10,
    stock10ml: 5,
    description: "Frescura helada con notas cítricas, manzana y un fondo acuático revitalizante.",
    category: "Acuático",
    image: hawasIceImg,
    isBestSeller: true,
  },
  {
    id: 13,
    name: "Valentino Coral Fantasy",
    price5ml: 230,
    price10ml: 460,
    stock5ml: 8,
    stock10ml: 3,
    description: "Una fragancia vibrante con notas de manzana roja, tabaco y un fondo de pachulí elegante.",
    category: "Amaderado",
    image: valentinoCoralImg,
    isBestSeller: true,
  },
  {
    id: 14,
    name: "ARI by Ariana Grande",
    price5ml: 95,
    price10ml: 190,
    stock5ml: 10,
    stock10ml: 5,
    description: "Una fragancia deliciosa con notas de pera, frambuesa y un toque dulce de malvavisco.",
    category: "Frutal",
    image: ariByArianaImg,
  },
  {
    id: 100,
    name: "Dúo pack: JPG Collection",
    price: 300,
    presentation: "2 Decants x 5ml",
    description: "La combinación definitiva de Jean Paul Gaultier. Paradise Garden y Le Beau Le Parfum en un pack exclusivo de 5ml cada uno.",
    category: "Promociones",
    stock: 3,
    image: comboJpgImg,
    isBestSeller: true,
  },
  {
    id: 101,
    name: "Trío pack: Fresh Selection",
    price: 225,
    presentation: "3 Decants x 5ml",
    description: "La frescura elevada al cubo. Una selección de nuestras tres fragancias más vibrantes y cítricas en un pack de 5ml cada una.",
    category: "Promociones",
    stock: 5,
    image: fresh3x225Img,
    isBestSeller: true,
  },
];


export const bestSellers = products.filter((p) => p.isBestSeller && p.category !== "Promociones");
export const categories: Category[] = ["Cítrico", "Acuático", "Amaderado", "Oriental", "Especia", "Promociones", "Frutal"];
