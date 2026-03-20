import m_sky from '../assets/perfumes/mandarin sky.png';
import n_voyage from '../assets/perfumes/nautica vouyague.png';
import b_king from '../assets/perfumes/bharara King.png';
import k_qahwa from '../assets/perfumes/khamrah qahwa.png';
import tommy_img from '../assets/perfumes/tommy.png';
import v_eros from '../assets/perfumes/versace eros.png';
import n_pm from '../assets/perfumes/9pm.png';

export interface Product {
    id: number;
    name: string;
    price: number;
    presentation: string;
    description: string;
    category: 'Cítrico' | 'Acuático' | 'Floral' | 'Amaderado' | 'Oriental' | 'Especia' | 'Todos';
    stock: number;
    image: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Mandarin Sky",
        price: 90,
        presentation: "Decant 5ml",
        description: "Fragancia fresca, dulce y vibrante con notas cítricas de mandarina.",
        category: "Cítrico",
        stock: 25,
        image: m_sky
    },
    {
        id: 2,
        name: "Nautica Voyage",
        price: 45,
        presentation: "Decant 5ml",
        description: "Aroma fresco, acuático y masculino con notas de manzana verde y madera.",
        category: "Acuático",
        stock: 30,
        image: n_voyage
    },
    {
        id: 3,
        name: "Bharara King",
        price: 110,
        presentation: "Decant 5ml",
        description: "Fragancia real y sofisticada con un equilibrio perfecto entre dulzura y especias.",
        category: "Amaderado",
        stock: 15,
        image: b_king
    },
    {
        id: 4,
        name: "Khamrah Qahwa",
        price: 90,
        presentation: "Decant 5ml",
        description: "Mezcla cálida de café, canela y vainilla; una oda a la elegancia oriental.",
        category: "Oriental",
        stock: 20,
        image: k_qahwa
    },
    {
        id: 5,
        name: "Tommy",
        price: 60,
        presentation: "Decant 5ml",
        description: "Un clásico atemporal, fresco y limpio; la esencia de la juventud americana.",
        category: "Cítrico",
        stock: 40,
        image: tommy_img
    },
    {
        id: 6,
        name: "Versace Eros",
        price: 120,
        presentation: "Decant 5ml",
        description: "Aroma seductor y vibrante con notas de menta, manzana verde y haba tonka.",
        category: "Oriental",
        stock: 15,
        image: v_eros
    },
    {
        id: 7,
        name: "9 PM",
        price: 90,
        presentation: "Decant 5ml",
        description: "Una fragancia dulce y ultra-masculina con toques de vainilla y ámbar gris.",
        category: "Oriental",
        stock: 20,
        image: n_pm
    }
];
