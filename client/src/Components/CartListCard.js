import { IconButton } from "@mui/material";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { useEcomContext } from "../context/EcomContext";
import { Link } from "react-router-dom";
const CartListCard = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useEcomContext();
  return (
    <>
      <div className="cart-list-container">
        <Link to={`/Product/Details/${item.id}`} state={{ item: item }}>
          <div className="product-img">
            <img src={item.image} alt="img" />
          </div>
        </Link>
        <div className="cart-text">
          <h2>{item.title}</h2>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>
          <h3>₹{item.price * item.quantity}</h3>
          <div className="quantity-controller">
            <IconButton
              className="IconButton"
              onClick={() => decreaseQuantity(item)}
            >
              <RemoveIcon />
            </IconButton>
            <h3>{item.quantity}</h3>
            <IconButton
              className="IconButton"
              onClick={() => increaseQuantity(item)}
            >
              <AddIcon />
            </IconButton>
          </div>
          <IconButton
            className="cart-item-remove"
            onClick={() => removeFromCart(item)}
          >
            <ClearIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default CartListCard;
