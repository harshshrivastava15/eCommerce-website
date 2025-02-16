import ProductList from "./components/ProductList";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div>
      <Slider/>
      <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64"></div>
      <h1 className="text-2xl px-5">Featured Products</h1>
      <ProductList/>
    </div>
  );
}
