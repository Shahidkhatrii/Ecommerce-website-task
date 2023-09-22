import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetail";
import { useEffect, useState } from "react";
import { productItems } from "./assets/Data/ProductData";
import { EcomContextProvider } from "./context/EcomContext";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [dropdownRoute, setDropdownRoute] = useState("");
  const [navRoute, setNavRoute] = useState("");
  const subCategoryItems = productItems.filter((item) => {
    return item.subCategory === dropdownRoute;
  });
  const categoryItems = productItems.filter((item) => {
    return item.category === navRoute;
  });
  useEffect(() => {
    setDropdownRoute(JSON.parse(localStorage.getItem("DropdownRoute") || ""));
    setNavRoute(JSON.parse(localStorage.getItem("NavRoute") || ""));
  }, []);

  return (
    <>
      <div className="Container">
        <ToastContainer />
        <EcomContextProvider>
          <Router>
            <NavBar
              setDropdownRoute={setDropdownRoute}
              setNavRoute={setNavRoute}
            />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/Category/:type"
                element={<ProductList items={categoryItems} />}
              />
              <Route
                path="/Product/:type"
                element={<ProductList items={subCategoryItems} />}
              />
              <Route path="/Product/Details/:id" element={<ProductDetails />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </Router>
        </EcomContextProvider>
      </div>
    </>
  );
}

export default App;
