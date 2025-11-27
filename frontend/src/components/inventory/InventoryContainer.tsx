import type { IInventoryItem } from "../../definition/shoppingCart.definition";
import { InventoryItem } from "./InventoryItem";
import { useShoppingCartStore } from "../../stores/shoppingCart.store";

export default function InventoryContainer() {
  const { inventory } = useShoppingCartStore();
  return (
    <div className="grid grid-cols-12 gap-4">
      {inventory.map((item: IInventoryItem) => (
        <div className="col-span-4">
          <InventoryItem key={item.name} item={item} />
        </div>
      ))}
    </div>
  );
}
