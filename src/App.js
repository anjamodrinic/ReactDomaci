import logo from './logo.svg';
import './App.css';
import "./App.css";
import skije from "./komponente/skije";
import NavMeni from "./komponente/NavMeni.jsx";
import {
  useState,
  useEffect,
} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./komponente/Cart";
import Home from "./komponente/Home";
import Contact from "./komponente/Contact";

function App() {
  const [input, setInput] =
    useState("");
  const [output, setOutput] = useState(
    []
  );
  useEffect(() => {
    setOutput([]);
    products.filter((val) => {
      if (
        val.title
          .toLowerCase()
          .includes(input.toLowerCase())
      ) {
        setOutput((output) => [
          ...output,
          val,
        ]);
      }
    });
  }, [input]);
  const [cartNum, setCartNum] =
    useState(0);
  const [
    cartProducts,
    setCartProducts,
  ] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title:
        "Skije 1",
      img: "https://img.gigatron.rs/img/products/large/image6135e0e9b547f.png",
      price: "45000 RSD",
      description:
        "    Salomon E S/Force Fx.80 skije i vez",
        amount: 0,
    },
    {
      id: 2,
      title:
        "Skije 2",
      img: "https://img.gigatron.rs/img/products/large/image6135e0e9b547f.png",
      price: "45000 RSD",
      description:
        "    Salomon E S/Force Fx.80 skije i vez",
        amount: 0,
    },
    {
      id: 3,
      title:
        "Skije 3",
      img: "https://img.gigatron.rs/img/products/large/image6135e0e9b547f.png",
      price: "45000 RSD",
      description:
        "    Salomon E S/Force Fx.80 skije i vez",
        amount: 0,
    },
    {
      id: 4,
      title:
        "Skije 4",
      img: "https://img.gigatron.rs/img/products/large/image6135e0e9b547f.png",
      price: "45000 RSD",
      description:
        "    Salomon E S/Force Fx.80 skije i vez",
        amount: 0,
    },
  ]);
  function refresh() {
    let newProducts = products.filter(
      (prod) => prod.amount > 0
    );
    setCartProducts(newProducts);
  }
  function addProduct(id) {
    setCartNum(cartNum + 1);
    products.forEach((prod) => {
      if (prod.id === id) {
        prod.amount++;
      }
    });
    refresh();
  }
  return (
    <BrowserRouter className="App">
       <NavMeni
        cartNum={cartNum}
        setInput={setInput}
      />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/laptops"
          element={
            <Laptops
              products={products}
              onAdd={addProduct}
              output={output}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              products={cartProducts}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
