import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import SearchBar from "./SearchBar";
import { categoryItem } from "../assets/Data/NavItems";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useEcomContext } from "../context/EcomContext";
const NavBar = ({ setNavRoute, setDropdownRoute }) => {
  const { retrieveCart, cart } = useEcomContext();
  const [dropdown, setDropdown] = useState([false, []]);

  useEffect(() => {
    retrieveCart();
    console.log("useEffect");
    // eslint-disable-next-line
  }, []);
  return (
    <div className="nav-container">
      <Link to="/" className="nav-link">
        <h2 className="nav-heading">myEcommerce</h2>
      </Link>
      <ul className="category-list">
        {categoryItem.map((item) => {
          return (
            <li
              key={item.id}
              className={item.cName}
              onMouseEnter={() => setDropdown([true, item.dropdown])}
              onMouseLeave={() => setDropdown([false, []])}
            >
              <Link
                to={`/Category/${item.path}`}
                className="nav-link"
                onClick={() => {
                  setNavRoute(item.path.split("/")[1]);
                  localStorage.setItem(
                    "NavRoute",
                    JSON.stringify(item.path.split("/")[1])
                  );
                }}
              >
                {item.title}
              </Link>
              {dropdown[0] && item.dropdown === dropdown[1] ? (
                <Dropdown
                  dropdownItems={dropdown[1]}
                  setDropdownRoute={setDropdownRoute}
                />
              ) : (
                ""
              )}
              {}
            </li>
          );
        })}
      </ul>
      <SearchBar />
      <div className="navbar-icon-flex">
        <Link to="/Cart">
          <IconButton className="icon-btn">
            <ShoppingCartIcon className="icon" />
            <div className="Cart-counter">{cart.length}</div>
          </IconButton>
        </Link>

        <IconButton className="icon-btn">
          <PersonIcon className="icon" />
        </IconButton>
      </div>
    </div>
  );
};

export default NavBar;
