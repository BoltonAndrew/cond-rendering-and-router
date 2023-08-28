function AddProduct({ changeName, changePrice, addHandler }) {
  return (
    <form onSubmit={addHandler}>
      <input type="text" onChange={changeName} placeholder="Product Name" />
      <input
        type="number"
        step=".01"
        onChange={changePrice}
        placeholder="Product Price"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddProduct;
