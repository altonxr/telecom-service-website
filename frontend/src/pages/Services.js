import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const plans = [
  { title: "Basic Plan", price: "Rs 700/mo", desc: "Good for casual users" },
  { title: "Standard Plan", price: "Rs 1800/mo", desc: "Best for families" },
  { title: "Premium Plan", price: "Rs 2500/mo", desc: "Unlimited everything" }
];

function Services() {
  return (
    <div>
      <h2 className="mb-4">Our Plans</h2>
      <Row>
        {plans.map((plan, i) => (
          <Col key={i} md={4} className="mb-3">
            <Card className="shadow">
              <Card.Body>
                <Card.Title>{plan.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{plan.price}</Card.Subtitle>
                <Card.Text>{plan.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Services;
