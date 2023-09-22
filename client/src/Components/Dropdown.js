import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  const dropdownItem = props.dropdownItems;
  const setDropdownRoute = props.setDropdownRoute;

  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "dropdown-list close" : "dropdown-list"}
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        {dropdownItem.map((item) => {
          return (
            <li key={item.id}>
              <Link
                className={item.cName}
                to={`/Product/${item.path}`}
                onClick={() => {
                  setDropdownRoute(item.path.split("/")[1]);
                  localStorage.setItem(
                    "DropdownRoute",
                    JSON.stringify(item.path.split("/")[1])
                  );
                }}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
