import InventoryContainer from "../components/inventory/InventoryContainer";
import ShoppingCart from "../components/shopping-cart/ShoppingCartContainer";

function HomePage() {
  return (
    <section className="page space-y-6">
      <h1>SHOPPING CENTER</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <InventoryContainer />
        </div>
        <div className="col-span-4">
          <ShoppingCart />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
