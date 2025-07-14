import "./App.css";
import FilterableProductTable from "./components/filterable-product-table";
import { PRODUCTS } from "./data/product-data";

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
