import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import img1 from "../../assets/product/p-1.jpg";
import img2 from "../../assets/product/p-2.jpg";
import img3 from "../../assets/product/p-3.jpg";
import img4 from "../../assets/product/p-4.jpg";
import img5 from "../../assets/product/p-5.jpg";
import img6 from "../../assets/product/p-6.jpg";
import img7 from "../../assets/product/p-7.avif";
import img8 from "../../assets/product/p-8.png";
import img9 from "../../assets/product/p-9.avif";
import img10 from "../../assets/product/p-10.jpg";
import img11 from "../../assets/product/p-11.jpg";
import img12 from "../../assets/product/p-12.jpg";

const sampleProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    image: img1,
    bgColor: "#e0f7fa",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    image: img2,
    bgColor: "#f3e5f5",
  },
  {
    id: 3,
    name: "Portable Speaker",
    price: "$79",
    image: img3,
    bgColor: "#fbe9e7",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "$59",
    image: img4,
    bgColor: "#e8f5e9",
  },
  {
    id: 5,
    name: "Fitness Tracker",
    price: "$129",
    image: img5,
    bgColor: "#fff9c4",
  },
  {
    id: 6,
    name: "Macbook",
    price: "$899",
    image: img6,
    bgColor: "#efefecff", 
  },
  {
    id: 7,
    name: "VR Headset",
    price: "$199",
    image: img7,
    bgColor: "#d8aedcff",
  },
  {
    id: 8,
    name: "DSLR Camera",
    price: "$299",
    image: img8,
    bgColor: "#e1f5fe", 
  },
  
  {
    id: 9,
    name: "Smart Glasses",
    price: "$499",
    image: img9,
    bgColor: "#e8eaf6",
  },
  {
    id: 10,
    name: "EarBuds",
    price: "$89",
    image: img10,
    bgColor: "#8e9ffaff",
  },
  {
    id: 11,
    name: "IPhone",
    price: "$699",
    image: img11,
    bgColor: "#c5fdffff",
  },
  {
    id: 12,
    name: "IPad",
    price: "$499",
    image: img12,
    bgColor: "#abaeaeff",
  },
];

const Products = ({ handleAddToCart }) => {
  return (
    <section className="py-5 bg-white" id="products">
      <Container>
        <h2 className="text-center mb-5" data-aos="fade-up">
          Our Products
        </h2>
        <Row className="g-4">
          {sampleProducts.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} data-aos="fade-up">
              <ProductCard product={product} handleAddToCart={handleAddToCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
