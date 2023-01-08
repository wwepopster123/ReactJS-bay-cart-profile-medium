import "./App.css";

import CryptoJS from "crypto-js";

import { CustomAlert } from "./components/CustomAlert";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { PageNotFound } from "./pages/PageNotFound";

import { PagePaths } from "./PagePaths";
import { createContext, useEffect, useState } from "react";

import OrangePhoto from "./product_images/Orange.jpg";
import BananasPhoto from "./product_images/Bananas.jpeg";
export const AppContext = createContext();

function App() {
  // id, img, name, description, price
  const [products, setProducts] = useState([
    {
      id: generateID(),
      img: OrangePhoto,
      name: "Orange",
      description: "Delicious orange fruit, may not be as sweet as you wanted",
      price: 2,
    },
    {
      id: generateID(),
      img: BananasPhoto,
      name: "Bananas",
      description: "Niam niam bananas",
      price: 5,
    },
  ]);

  const [user, setUser] = useState({
    name: "Petr",
    cash: 100,
    cart: [],
  });

  const [alertIsShow, setAlertIsShow] = useState(false);
  const [alertIsDanger, setAlertIsDanger] = useState(false);
  const [alertText, setAlertText] = useState("");

  const setUserName = (newName) => {
    setUser({
      ...user,
      name: newName,
    });
  };

  const createProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Product {id, count}
  const addProduct = (product) => {
    setUser({
      ...user,
      cart: [...user.cart, product],
    });
  };

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function generateID() {
    var rnd = getRandomArbitrary(-100000, 100000).toString();
    var hash = CryptoJS.MD5(rnd).toString();
    return hash;
  }

  function incrementCash(count) {
    setUser({
      ...user,
      cash: user.cash + count,
    });
  }

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          user,
          setUser,
          setUserName,
          products,
          setProducts,
          generateID,
          incrementCash,
          addProduct,
          setAlertIsShow,
          setAlertText,
          alertIsDanger,
          setAlertIsDanger
        }}
      >
        <Router>
          {alertIsShow ? <CustomAlert text={alertText} /> : ""}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to={PagePaths.HomePage}>
                Home
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={PagePaths.ProductsPage}
                    >
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={PagePaths.ProfilePage}>
                      Profile
                    </Link>
                  </li>
                </ul>
                <div className="d-flex">
                  <Link className="cash">Cash: {user.cash}</Link>
                  <Link className="btn btn-success" to={PagePaths.CartPage}>
                    Cart
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path={PagePaths.HomePage} element={<HomePage />} />
            <Route path={PagePaths.CartPage} element={<CartPage />} />
            <Route path={PagePaths.ProductsPage} element={<ProductsPage />} />
            <Route path={PagePaths.ProfilePage} element={<ProfilePage />} />
            <Route path={PagePaths.NotFoundPage} element={<PageNotFound />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
