export default function ShoppingCartHeader() {
  return (
    <div className="grid grid-cols-[2fr_1fr_1.5fr_auto] gap-2 px-2 py-2 text-xs font-semibold text-gray-200 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
      <div>Name</div>
      <div className="text-right">Price</div>
      <div className="text-right">Quantity</div>
      <div className="w-8"></div>
    </div>
  );
}
