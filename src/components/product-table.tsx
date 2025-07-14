import type { Product } from "../types/product-type";
import ProductCategoryRow from "./product-category-row";
import ProductRow from "./product-row";

/**
 * 제품 테이블
 * @param products 제품 목록
 */
const ProductTable = ({
  products,
  filterText,
  inStockOnly,
}: {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}) => {
  const rows: React.ReactNode[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    // 검색어가 포함되지 않은 경우
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    // 체크 상태에 따라 조회 조건 추가
    if (inStockOnly && !product.stocked) {
      return;
    }
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
