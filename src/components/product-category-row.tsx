/***
 * Table 카테고리 헤더
 * @param {string} category - 카테고리 이름
 */
const ProductCategoryRow = ({ category }: { category: string }) => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
