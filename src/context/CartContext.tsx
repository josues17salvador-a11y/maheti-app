import { createContext, useContext, useState, useCallback } from "react";
import type { Product } from "../mocks/products";

export interface CartItem {
  product: Product;
  size: "3ml" | "5ml" | "10ml" | "Combo";
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, size: "3ml" | "5ml" | "10ml" | "Combo") => void;
  removeFromCart: (productId: number, size: string) => void;
  updateQuantity: (productId: number, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product, size: "3ml" | "5ml" | "10ml" | "Combo") => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && i.size === size);
      const stock = size === "10ml" ? (product.stock10ml || 0) : size === "5ml" ? (product.stock5ml || 0) : size === "3ml" ? (product.stock3ml || 0) : (product.stock || 0);
      
      if (existing) {
        if (existing.quantity >= stock) return prev;
        return prev.map((i) => i.product.id === product.id && i.size === size ? { ...i, quantity: i.quantity + 1 } : i);
      }
      if (stock <= 0) return prev;
      return [...prev, { product, size, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.product.id === productId && i.size === size)));
  }, []);

  const updateQuantity = useCallback((productId: number, size: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => !(i.product.id === productId && i.size === size)));
      return;
    }
    setItems((prev) => prev.map((i) => {
      if (i.product.id === productId && i.size === size) {
        const stock = size === "10ml" ? (i.product.stock10ml || 0) : size === "5ml" ? (i.product.stock5ml || 0) : size === "3ml" ? (i.product.stock3ml || 0) : (i.product.stock || 0);
        return { ...i, quantity: Math.min(quantity, stock) };
      }
      return i;
    }));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => {
    const price = i.size === "10ml" ? (i.product.price10ml || 0) : i.size === "5ml" ? (i.product.price5ml || 0) : i.size === "3ml" ? (i.product.price3ml || 0) : (i.product.price || 0);
    return sum + price * i.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
