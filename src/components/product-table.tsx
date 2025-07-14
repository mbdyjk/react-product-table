import type { Product } from "../types/product-type";
import ProductCategoryRow from "./product-category-row";
import ProductRow from "./product-row";

/**
 * 제품 테이블
 * @param products 제품 목록
 */
const ProductTable = ({ products }: { products: Product[] }) => {
  const rows: React.ReactNode[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    // 입력 데이터 category가 정렬되어 있음을 가정
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
