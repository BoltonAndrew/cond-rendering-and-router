import Product from "./Product.jsx";

function ProductList({ list }) {
  return (
    <>
      {list.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </>
  );
}

export default ProductList;
