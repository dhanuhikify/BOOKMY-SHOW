import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";


const sportsEvents = [
  { name: "TATA IPL 2025", image: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/12/IPL-trophy.webp", date: "March 2025" },

  { name: "FIFA Club World Cup", image: "https://th.bing.com/th/id/OIP.La8JviYnIqzgZEEtUo6bVgHaEK?rs=1&pid=ImgDetMain", date: "November 2025" },

  
];

const Sports = () => {
  return (
    <Container className="mt-4">
      <h2>Sports Events</h2>
      <Row>
        {sportsEvents.map((event, index) => (
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


export default Sports;