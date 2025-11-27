export interface ShoppingCartState {
  inventory: IInventoryItem[];
  cart: IInventoryItem[];
  addItemToCart: (itemName: string) => void;
  removeItemFromCart: (itemName: string) => void;
  updateItemQuantity: (itemName: string, quantity: number) => void;
}

export interface IInventoryItem {
  name: string;
  unitPrice: number;
  quantity: number;
}

export const INVENTORY: IInventoryItem[] = [
  { name: "bacon", unitPrice: 10.99, quantity: 10 },
  { name: "eggs", unitPrice: 3.99, quantity: 10 },
  { name: "cheese", unitPrice: 6.99, quantity: 10 },
  { name: "chives", unitPrice: 1.0, quantity: 10 },
  { name: "wine", unitPrice: 11.99, quantity: 10 },
  { name: "brandy", unitPrice: 17.55, quantity: 10 },
];
