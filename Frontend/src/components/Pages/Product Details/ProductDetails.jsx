import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import productsData from "../../products.json";
import "./ProductDetails.css";
import TopHeader from "../Home/Header/TopHeader";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import BottomFooter from "../Home/Footer/BottomFooter";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import ProductTabs from "./ProductTabs";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Combine all products into a single array
  const allProducts = [
    ...productsData.bestOffers,
    ...productsData.popularProducts,
    ...productsData.highTechProducts,
    ...productsData.newestProducts,
  ];

  // Find the product by ID
  const product = allProducts.find((p) => p.id.toString() === id);

  // If product is not found, display a message
  if (!product) {
    return (
      <Container className="mt-4">
        <div>Product not found</div>
      </Container>
    );
  }

  return (
    <>
      <TopHeader />
      <Header />
      <Container className="product-details-container">
        <Row>
          {/* Left Grid - Product Images */}
          <Col md={6} className="left-grid d-flex">
            {/* Thumbnails in a vertical column */}
            <div className="image-gallery d-flex flex-column me-3">
              {[...Array(6)].map((_, index) => (
                <img
                  key={index}
                  src={product.image}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail mb-2"
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="main-image">
              <img src={product.image} alt={product.name} />
            </div>
          </Col>

          {/* Right Grid - Product Details */}
          <Col md={6} className="right-grid">
            <div className="product-info">
              <h2 className="product-title">{product.name}</h2>
              <div className="product-rating">
                ⭐⭐⭐⭐☆ <span>4.1 (115 reviews)</span>
              </div>
              <div className="price-section">
                <span className="current-price">{product.price}</span>
                {product.oldPrice && (
                  <span className="old-price">{product.oldPrice}</span>
                )}
              </div>
              <p className="product-meta">
                <strong>Brand:</strong> Katyayani Organics <br />
                <strong>Categories:</strong> Insecticides/Pesticides, Pesticides
                & Insecticides <br />
                <strong>Availability:</strong> In Stock <br />
                <strong>Cash on delivery:</strong> NO
              </p>
              <div className="add-to-cart-section">
                <div className="quantity-control">
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    className="quantity-input"
                    type="text"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="quantity-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <Button className="add-to-cart-btn">ADD TO CART</Button>
              </div>
              <div className="wishlist-share">
                <Button variant="outline-secondary">
                  <FaHeart style={{ marginRight: "5px", color:"#C70000" }} /> ADD TO WISHLIST
                </Button>
                <Button variant="outline-secondary">
                  <FaShareAlt style={{ marginRight: "5px", color:"#1A89DA" }} /> SHARE
                </Button>
              </div>
              <hr />
              <div className="delivery-section">
                <p>
                  <strong>Delivery Options:</strong> Thursday, 5 May 2025
                </p>
                <div className="delivery-input">
                  <input type="text" placeholder="Enter a PIN code" />
                  <button>CHECK</button>
                </div>
                <p>
                  Please enter a PIN Code to check delivery time & pay on
                  Delivery Availability
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ProductTabs/>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default ProductDetails;
