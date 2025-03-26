import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/offerstyles.css";
const offers = [
  {
    title: "50% Off on Movie Tickets",
    description: "Use code MOVIE50 to get a 50% discount on your next movie booking.",
    image: "https://th.bing.com/th/id/OIP.owFiKvqRQZIpRayWH2-EgQHaFS?rs=1&pid=ImgDetMain",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "Grab two tickets for the price of one. Limited time offer!",
    image: "https://cdn.vectorstock.com/i/1000v/97/87/buy-1-get-free-sale-tag-banner-design-speech-b-vector-23519787.jpg"
  },
  {
    title: "90% Cashback on Payments",
    description: "Pay with XYZ wallet and get 90% cashback on your purchase.",
    image: "https://thumbs.dreamstime.com/b/sale-tag-off-isolated-sticker-poster-design-template-mega-discount-banner-vector-illustration-148410211.jpg",
  },
];

const Offers = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🎉 Exciting Offers</h2>
      <Row>
        {offers.map((offer, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <Card className="offer-card">
              <Card.Img variant="top" src={offer.image} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
