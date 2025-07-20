import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, handleAddToCart }) => {
  const handleMagicFly = (e, imageSrc) => {
  const img = document.createElement("img");
  img.src = imageSrc;
  img.className = "magic-fly";
  const rect = e.target.getBoundingClientRect();
  img.style.left = rect.left + "px";
  img.style.top = rect.top + "px";

  document.body.appendChild(img);

  // Remove after animation ends
  setTimeout(() => {
    document.body.removeChild(img);
  }, 1000);
};

  return (
    <Card
      className="text-center shadow-sm product-card"
      style={{
        backgroundColor: product.bgColor,
        border: "none",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div
        className="image-wrapper"
        style={{
          perspective: "1000px",
          padding: "20px",
        }}
      >
        <div
          className="image-inner"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            borderRadius: "15px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "rotateY(8deg) translateZ(10px) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "rotateY(0deg) translateZ(0) scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "15px",
              display: "block",
            }}
          />
        </div>
      </div>

      <Card.Body>
        <Card.Title className="fw-bold">{product.name}</Card.Title>
        <Card.Text className="mb-3">{product.price}</Card.Text>
        <Button
        variant="dark"
        onClick={(e) => {
          handleMagicFly(e, product.image);
          handleAddToCart(product);
          }}
        >
          Add to Cart
        </Button>


      </Card.Body>
    </Card>
  );
};

export default ProductCard;
