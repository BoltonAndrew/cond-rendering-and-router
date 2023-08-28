import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import AddProduct from "./components/AddProduct.jsx";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [isAddProduct, setIsAddProduct] = useState(false);
  // const [name, setName] = useState("");

  function changeName(e) {
    setProductName(e.target.value);
  }

  function changePrice(e) {
    setProductPrice(parseFloat(e.target.value));
  }

  function addHandler(e) {
    e.preventDefault();
    if (!productName || !productPrice) {
      alert("Please input actual values");
      return;
    }
    setList([...list, { name: productName, price: productPrice }]);
    setIsAddProduct(false);
    setProductName("");
    setProductPrice(0);
  }

  return (
    <BrowserRouter className="App">
      {!isAddProduct && <Navigate to="/" />}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/addProduct" onClick={() => setIsAddProduct(true)}>
          Add New Product
        </Link>
      </nav>
      <h1>Conditional Rendering & Routing</h1>

      <Routes>
        <Route path="/" element={<ProductList list={list} />} />
        <Route
          path="/addProduct"
          element={
            <AddProduct
              changeName={changeName}
              changePrice={changePrice}
              addHandler={addHandler}
            />
          }
        />
      </Routes>

      {/* {name && <h2> By {name}</h2>}
      {name ? (
        name.length > 5 && <h3>Thanks for inputting your name</h3>
      ) : (
        <p>Please input your name</p>
      )}
      <input onChange={(e) => setName(e.target.value)} /> */}

      {/* {isAddProduct ? (
        <AddProduct
          changeName={changeName}
          changePrice={changePrice}
          addHandler={addHandler}
        />
      ) : (
        <>
          <button onClick={() => setIsAddProduct(true)}>Add Product</button>
          <ProductList list={list} />
        </>
      )} */}
    </BrowserRouter>
  );
}

export default App;
