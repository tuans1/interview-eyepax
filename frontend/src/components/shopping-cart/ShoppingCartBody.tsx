import { useShoppingCartStore } from "../../stores/shoppingCart.store";
import Empty from "../Empty";

export default function ShoppingCartBody() {
  const { cart, inventory, removeItemFromCart, updateItemQuantity } =
    useShoppingCartStore();

  const handleIncreaseQuantity = (
    itemName: string,
    currentQuantity: number
  ) => {
    const inventoryItem = inventory.find((item) => item.name === itemName);
    const availableQuantity = (inventoryItem?.quantity || 0) + currentQuantity;
    if (availableQuantity > currentQuantity) {
      updateItemQuantity(itemName, currentQuantity + 1);
    }
  };

  const handleDecreaseQuantity = (
    itemName: string,
    currentQuantity: number
  ) => {
    if (currentQuantity > 1) {
      updateItemQuantity(itemName, currentQuantity - 1);
    } else {
      removeItemFromCart(itemName);
    }
  };

  const handleDeleteItem = (itemName: string) => {
    removeItemFromCart(itemName);
  };

  const getMaxQuantity = (itemName: string, currentQuantity: number) => {
    const inventoryItem = inventory.find((item) => item.name === itemName);
    return (inventoryItem?.quantity || 0) + currentQuantity;
  };

  return (
    <div className="space-y-2">
      {cart.length > 0 ? (
        cart.map((item) => {
          const maxQuantity = getMaxQuantity(item.name, item.quantity);
          const canIncrease = item.quantity < maxQuantity;

          return (
            <div
              key={item.name}
              className="grid grid-cols-[2fr_1fr_1.5fr_auto] gap-2 px-2 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow items-center"
            >
              <div className="font-medium text-sm text-gray-200 capitalize truncate">
                {item.name}
              </div>
              <div className="text-right text-sm text-gray-200 ">
                ${item.unitPrice.toFixed(2)}
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() =>
                    handleDecreaseQuantity(item.name, item.quantity)
                  }
                  className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700 text-gray-200 font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="text-sm font-semibold text-gray-200 min-w-[2rem] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    handleIncreaseQuantity(item.name, item.quantity)
                  }
                  disabled={!canIncrease}
                  className="w-7 h-7 flex items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700 text-gray-200  font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleDeleteItem(item.name)}
                className="w-7 h-7 flex items-center justify-center rounded-md bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                aria-label="Delete item"
                title="Delete item"
              >
                ×
              </button>
            </div>
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
}
