import React, { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import "./ProductTabs.css";
import { FaCheck } from "react-icons/fa";

const ProductTabs = () => {
  const [key, setKey] = useState("description");

  return (
    <div className="product-tabs-wrapper">
      <Container className="my-4 product-tabs-container">
        {/* Tabs Header */}
        <Tabs
          id="product-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 product-tabs"
        >
          {/* TAB 1: Product Description */}
          <Tab eventKey="description" title="Product Description">
            <div className="tab-content-wrapper">
              <h5>Description:</h5>
              <p>
                Introducing DeHaat Starter: your ally in modern farming and
                gardening! Harnessing the power of Arbuscular Mycorrhizal Fungi
                (AMF) combined with High Yield Technology (HYT), this
                revolutionary product is designed to maximize plant growth
                efficiency like never before. What sets it apart? Its innovative
                patented gel technology ensures optimal delivery and
                effectiveness. Crafted in strict adherence to the standards of
                FCO 1985, it boasts an ideal spore load per gram and IP
                composition. Say hello to a new era of farming and gardening
                with DeHaat Starter!
              </p>

              <h5>Specifications:</h5>
              <ul>
                <li>
                  <FaCheck style={{ color: "#28a745", marginRight: "8px" }} />
                  It is a mycorrhiza-based product...
                </li>
                <li>
                  <FaCheck style={{ color: "#28a745", marginRight: "8px" }} />
                  Improves plant establishment and yields
                </li>
                <li>
                  <FaCheck style={{ color: "#28a745", marginRight: "8px" }} />
                  Boosts nutrient absorption
                </li>
                <li>
                  <FaCheck style={{ color: "#28a745", marginRight: "8px" }} />
                  Maintains moisture content of the soil
                </li>
                <li>
                  <FaCheck style={{ color: "#28a745", marginRight: "8px" }} />
                  Increases the number of tillers and tubers
                </li>
              </ul>

              <h5>Dose Details:</h5>
              <ul>
              <li>
                  <FaCheck style={{ color: "#28a745", marginRight: "8px" }} />
                  4 kg/acre for all crops
                </li>
                <li>
                  <FaCheck style={{ color: "#28a745", marginRight: "8px" }} />
                  3 kg/acre for vegetables
                </li>
              </ul>

              <p>
                <strong>Net Weight:</strong> 4 Kg
              </p>
              <p>
                <a href="#guarantee">
                  Click here to see Guarantee / Warranty of this Product.
                </a>
              </p>
            </div>
          </Tab>

          {/* TAB 2: How to Use */}
          <Tab eventKey="howto" title="How to Use">
            <div className="tab-content-wrapper">
              <p>
                <strong>Step 1:</strong> Mix the required quantity of DeHaatt
                Starter evenly into the soil or potting mix.
                <br />
                <strong>Step 2:</strong> Ensure adequate moisture for proper
                fungal colonization.
                <br />
                <strong>Step 3:</strong> Monitor plant growth and reapply if
                necessary during the crop cycle.
              </p>
            </div>
          </Tab>

          {/* TAB 3: Reviews */}
          <Tab eventKey="reviews" title="Reviews">
            <div className="tab-content-wrapper">
              <p>No reviews yet. Be the first to leave a review!</p>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default ProductTabs;
