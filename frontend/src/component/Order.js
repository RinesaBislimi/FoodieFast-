import React, { useState } from 'react';
import "../style/order.css"; // Ensure you have appropriate styles
import Header from './Header';
import Menu from './Menu'; // Import the Menu component
import Footer from './Footer';

function Order() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <>
        <Header />
      <div className="container order-page">
        <h2>Your Cart</h2>

        <div className="cart-section mt-4">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <h4>Your cart is empty</h4>
              <p>Total: $0.00</p>
            </div>
          ) : (
            <>
              <ul className="list-group">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.name} - ${item.price.toFixed(2)}
                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <h4>Total: ${totalPrice}</h4>
            </>
          )}
        </div>

       
        <h3>Add More Products</h3>
        
      </div>
      <Footer/>
    </>
  );
}

export default Order;
