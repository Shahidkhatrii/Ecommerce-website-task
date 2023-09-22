import React from "react";
import { useEcomContext } from "../context/EcomContext";
import CartListCard from "./CartListCard";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();

  const { cart, clearCart } = useEcomContext();
  const totalSum = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const notifyPurchase = () => {
    toast(`Amount: ${totalSum} Paid`);
    setTimeout(() => {
      toast("Order Placed Successfully!");
    }, 3000);
    navigate("/");
    clearCart();
  };
  return (
    <>
      <div
        style={{
          paddingTop: "5vw",
          paddingLeft: "15vw",
          paddingRight: "15vw",
        }}
      >
        {cart.length > 0 ? (
          <IconButton onClick={clearCart}>
            <DeleteIcon />
            <p>Clear cart</p>
          </IconButton>
        ) : (
          ""
        )}
        <div className="main-cart">
          <div className="cart-container">
            {cart.length ? (
              cart.map((item, index) => {
                return <CartListCard key={index} item={item} />;
              })
            ) : (
              <h3 className="cart-empty-msg">Your cart is empty!</h3>
            )}
          </div>
          {totalSum !== 0 ? (
            <div className="Bill-details">
              <h2>Price Details</h2>
              <br />
              <h3>
                Price ({cart.length}
                {cart.length > 1 ? " item" : " items"})
              </h3>
              <h3>Total Amount: ₹{totalSum}</h3>

              <button className="Order-btn" onClick={notifyPurchase}>
                Place Order
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
