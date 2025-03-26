import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/CardStyles.css"; // Import CSS file

const events = [
  { name: "COLD-PLAY", image: "https://images.says.com/uploads/story_source/source_image/535732/4cab.jpg", date: "JAN 2027" },
  { name: "ARJITH SINGH CONCERT", image: "https://th.bing.com/th/id/OIP.d8KauKtoeJbgWfEaWg2FkQAAAA?rs=1&pid=ImgDetMain", date: "MARCH 2025" },
];

const Events = () => {
  return (
    <Container className="mt-4">
      <h2>Upcoming Events</h2>
      <Row>
        {events.map((event, index) => (
          <Col key={index} md={4}>
            <Card className="mb-3">
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>Date: {event.date}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
