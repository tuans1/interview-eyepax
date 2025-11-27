import Button from "../Button";
import type { IInventoryItem } from "../../definition/shoppingCart.definition";
import { useShoppingCartStore } from "../../stores/shoppingCart.store";

export function InventoryItem({ item }: { item: IInventoryItem }) {
  const { addItemToCart } = useShoppingCartStore();

  const handleAddToCart = (itemName: string) => {
    if (item.quantity <= 0) return;

    addItemToCart(itemName);
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <span>Name: {item.name}</span>
      </div>
      <div>
        <span>Price: {item.unitPrice}</span>
      </div>
      <div>
        <span>Quantity: {item.quantity}</span>
      </div>
      <Button
        variant="primary"
        className={
          item.quantity === 0 ? "btn--secondary pointer-events-none" : ""
        }
        onClick={() => handleAddToCart(item.name)}
      >
        Add to cart
      </Button>
    </div>
  );
}
