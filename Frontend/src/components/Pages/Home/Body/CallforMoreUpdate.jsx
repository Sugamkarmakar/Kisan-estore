import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./CallforMoreUpdate.css";

const CallforMoreUpdate = () => {
  return (
    <div className="cta-section-wrapper">
      <Container fluid className="home-container">
        <Container className="cta-section">
          <Row className="align-items-center">
            {/* Image Section */}
            <Col md={6} className="cta-image"></Col>

            {/* Content Section */}
            <Col md={6} className="cta-content">
              <h2 className="cta-title">Call for More Update</h2>
              <p className="cta-description">
                Please enter your 10-digit mobile number to get promotional
                offers and discount information.
              </p>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="tel"
                    maxLength="10"
                    placeholder="Enter 10 digit mobile number"
                    className="cta-input"
                  />
                </Form.Group>
                <Button className="cta-button">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default CallforMoreUpdate;
