import React, { useState } from "react";
import "./App.css";

const PriceCartApp = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 20, quantity: 1 },
    { id: 2, name: "Item 2", price: 30, quantity: 1 },
    { id: 3, name: "Item 3", price: 15, quantity: 1 },
  ]);

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const total = cartItems.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
    return total;
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Price Cart</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary mr-2"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  className="btn btn-sm btn-primary ml-2"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-right font-weight-bold">
              Total
            </td>
            <td>${calculateTotal().toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceCartApp;
