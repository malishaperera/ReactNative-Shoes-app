import { create } from "zustand";

interface CartItem {
  product: any;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addProduct: (product: any) => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  addProduct: (product) =>
    //ToDO:if already is cart, increase quantity, else add new item
    set((state) => ({
      items: [...state.items, { product, quantity: 1 }],
    })),

    resetCart:() => set({items:[]})
}));
