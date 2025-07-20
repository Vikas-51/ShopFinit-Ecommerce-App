import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CustomButton from "../Shared/CustomButton";
import partyman from "../../assets/party-man.png";

const Popup = ({ orderPopup, handleOrderPopup, cartItems, cartTotal, clearCart }) => {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [poppers, setPoppers] = useState([]);

  const handleCheckout = () => {
    setOrderSubmitted(true);
    clearCart();

    const popperArray = Array.from({ length: 25 }).map((_, idx) => ({
      id: idx,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
    }));
    setPoppers(popperArray);

    setTimeout(() => {
      setOrderSubmitted(false);
      setPoppers([]);
      handleOrderPopup();
    }, 2500);
  };

  return (
    <>
      {/* Party Popper Animation */}
      {poppers.map((popper) => (
        <span
          key={popper.id}
          className="party-popper"
          style={{
            left: `${popper.left}%`,
            animationDelay: `${popper.delay}s`,
          }}
        >
          🎉
        </span>
      ))}

      <Modal show={orderPopup} onHide={handleOrderPopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {orderSubmitted ? (
            <div className="text-center">
              <h5 className="text-success">Order Submitted Successfully!</h5>
              <div className="party-man-container mt-3">
                <img src={partyman} alt="Party Man" className="party-man" />
                <div className="popper-blast">🎊 🎉 ✨ 💥 🎊</div>
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="list-unstyled">
                {cartItems.map((item, index) => (
                  <li key={index} className="mb-2 d-flex justify-content-between">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
              <h5>Total: ${cartTotal.toFixed(2)}</h5>
            </>
          )}
        </Modal.Body>

        <Modal.Footer>
          <CustomButton variant="secondary" onClick={handleOrderPopup}>
            Close
          </CustomButton>

          {!orderSubmitted && cartItems.length > 0 && (
            <CustomButton variant="success" onClick={handleCheckout}>
              Checkout
            </CustomButton>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
