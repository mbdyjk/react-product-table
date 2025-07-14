import SearchBar from "./search-bar";
import ProductTable from "./product-table";
import type { Product } from "../types/product-type";

const FilterableProductTable = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterableProductTable;
