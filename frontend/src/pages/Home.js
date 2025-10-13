import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.46)"
        }}
      >
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.91)", padding: "40px", borderRadius: "15px" }}>
          <h1 className="display-3 fw-bold">📡 Connect with the Future</h1>
          <p className="lead">Reliable telecom solutions for everyone</p>
          <Link to="/services">
            <Button variant="warning" size="lg" className="mt-3">
              Explore Our Plans 🚀
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="my-5 text-center">
        <h2 className="fw-bold mb-4">Why Choose Us?</h2>
        <Row>
          <Col md={4} className="mb-3">
            <Card className="shadow h-100">
              <Card.Img variant="top" src="/images/network.jpg" 
              />
              <Card.Body>
                <Card.Title>⚡ Super Fast Network</Card.Title>
                <Card.Text>
                  Experience lightning-fast internet and crystal-clear calls.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="shadow h-100">
              <Card.Img variant="top" src="/images/wifi.jpg" />
              <Card.Body>
                <Card.Title>💰 Affordable Plans</Card.Title>
                <Card.Text>
                  Flexible plans tailored to your needs — no hidden charges.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="shadow h-100">
              <Card.Img variant="top" src="/images/support.jpg" />
              <Card.Body>
                <Card.Title>🤝 24/7 Support</Card.Title>
                <Card.Text>
                  Our friendly support team is here whenever you need help.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Fun Call-to-Action */}
      <div
        className="text-center text-white p-5"
        style={{
          background: "linear-gradient(90deg, #007bff, #00c4ff)",
          borderRadius: "15px"
        }}
      >
        <h2 className="fw-bold">Ready to Upgrade Your Telecom Experience? 🎉</h2>
        <p>Join thousands of happy customers today!</p>
        <Link to="/contact">
          <Button variant="light" size="lg">
            Contact Us 📞
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
