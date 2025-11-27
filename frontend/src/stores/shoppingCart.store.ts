import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  INVENTORY,
  type ShoppingCartState,
} from "../definition/shoppingCart.definition";

export const useShoppingCartStore = create<ShoppingCartState>()(
  persist(
    (set, get) => ({
      inventory: INVENTORY,
      cart: [],

      addItemToCart: (itemName: string) => {
        const state = get();
        const inventoryItem = state.inventory.find(
          (item) => item.name === itemName
        );

        if (!inventoryItem || inventoryItem.quantity <= 0) {
          return state;
        }

        const existingCartItem = state.cart.find(
          (item) => item.name === itemName
        );

        set((state) => {
          // update existing item or add new item to cart
          const newCart = existingCartItem
            ? state.cart.map((item) =>
                item.name === inventoryItem.name
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.cart, { ...inventoryItem, quantity: 1 }];

          const newInventory = state.inventory.map((item) =>
            item.name === itemName
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );

          return {
            cart: newCart,
            inventory: newInventory,
          };
        });
      },

      updateItemQuantity: (itemName: string, newQuantity: number) => {
        set((state) => {
          const cartItem = state.cart.find((item) => item.name === itemName);
          const inventoryItem = state.inventory.find(
            (item) => item.name === itemName
          );

          if (!cartItem || !inventoryItem || newQuantity <= 0) {
            return state;
          }

          const currentCartQuantity = cartItem.quantity;
          const isIncreasing = newQuantity > currentCartQuantity;

          if (isIncreasing) {
            const quantityToAdd = newQuantity - currentCartQuantity;
            if (inventoryItem.quantity < quantityToAdd) {
              return state; // Not enough inventory
            }

            return {
              cart: state.cart.map((item) =>
                item.name === itemName
                  ? { ...item, quantity: newQuantity }
                  : item
              ),
              inventory: state.inventory.map((item) =>
                item.name === itemName
                  ? { ...item, quantity: item.quantity - quantityToAdd }
                  : item
              ),
            };
          } else {
            const quantityToReturn = currentCartQuantity - newQuantity;
            return {
              cart: state.cart.map((item) =>
                item.name === itemName
                  ? { ...item, quantity: newQuantity }
                  : item
              ),
              inventory: state.inventory.map((item) =>
                item.name === itemName
                  ? { ...item, quantity: item.quantity + quantityToReturn }
                  : item
              ),
            };
          }

          return state;
        });
      },

      removeItemFromCart: (itemName: string) => {
        set((state) => {
          const cartItem = state.cart.find((item) => item.name === itemName);
          if (!cartItem) return state;

          const newCart = state.cart.filter((item) => item.name !== itemName);

          const newInventory = state.inventory.map((item) =>
            item.name === itemName
              ? { ...item, quantity: item.quantity + cartItem.quantity }
              : item
          );

          return {
            cart: newCart,
            inventory: newInventory,
          };
        });
      },
    }),
    {
      name: "shopping-cart-store",
      // can use createHashStorage for secure storage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
