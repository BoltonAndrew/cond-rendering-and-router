function Product({ product }) {
  return (
    <>
      <h3>{product.name}</h3>
      <p>£{product.price}</p>
    </>
  );
}

export default Product;
