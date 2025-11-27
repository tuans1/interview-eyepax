import ShoppingCartBody from "./ShoppingCartBody";
import ShoppingCartHeader from "./ShoppingCartHeader";
import ShoppingCartTotal from "./ShoppingCartTotal";

export default function ShoppingCart() {
  return (
    <div className="w-full max-w-[500px] mx-auto p-4">
      <h1 className="text-xl font-bold mb-4 text-gray-800 ">Shopping Cart</h1>
      <div className="space-y-3">
        <ShoppingCartHeader />
        <ShoppingCartBody />
        <ShoppingCartTotal />
      </div>
    </div>
  );
}
