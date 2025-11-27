import { useShoppingCartStore } from "../../stores/shoppingCart.store";

export default function ShoppingCartTotal() {
  const { cart } = useShoppingCartStore();

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0
    );
  };

  return (
    <div className="mt-4 pt-4 border-t-2 border-gray-300 dark:border-gray-600">
      <div className="flex justify-between items-center px-2">
        <span className="text-lg font-bold text-gray-900">Total:</span>
        <span className="text-lg font-bold text-gray-900 ">
          {`$${calculateTotal().toFixed(2)}`}
        </span>
      </div>
    </div>
  );
}
