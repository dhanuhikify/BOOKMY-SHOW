import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../styles/MovieList.css"; // Import the CSS file
import { Link } from "react-router-dom";
const movies = [
  { 
    name: "KGF-2", 
    genre: "ACTION-MOVIE", 
    release: "2022-05-10", 
    rating: "8.5", 
    price: "₹250", 
    image: "https://images.moneycontrol.com/static-mcnews/2022/12/KGF-CHAPTER-2.jpg" 
  },
  { 
    name: "DRAGON", 
    genre: "LIFE-STORY", 
    release: "2025-03-21", 
    rating: "9.2", 
    price: "₹250", 
    image: "https://th.bing.com/th/id/OIP.4vJKhXJIdQr_7AgNPbWy2gHaJw?rs=1&pid=ImgDetMain"
    },
  { 
    name: "BHAVA TEETA YAANA", 
    genre: "LOVE DRAMA", 
    release: "2025-02-14", 
    rating: "8.8", 
    price: "₹200", 
    image: "https://static.toiimg.com/photo/118384809.cms?resizemode=4" 
  },
  { 
    name: "RAPATA", 
    genre: "THRILLER", 
    release: "2021-05-09", 
    rating: "9.8", 
    price: "250", 
    image: "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/cine_271223_1.jpg" 
  },
  { 
    name: "UI", 
    genre: "Action", 
    release: "2023-10-16", 
    rating: "8.8", 
    price: "₹220", 
    image: "https://timesofindia.indiatimes.com/photo/msid-106628279,imgsize-93512.cms" 
  },
  { 
    name: "TOXIC", 
    genre: "CRIME", 
    release: "2026-03-21", 
    rating: "8.8", 
    price: "₹450", 
    image: "https://th.bing.com/th/id/OIP.W1MFTUVMTjo2CvMJ39iUywHaEf?rs=1&pid=ImgDetMain" 
  },
];

const MovieList = () => {
  return (
    <Container className="movie-container mt-4">
  <Row className="g-4"> {/* Add gap between rows */}
    {movies.map((movie, index) => (
      <Col key={index} md={4}>
        <Card className="movie-card">
          <Card.Img variant="top" src={movie.image} className="movie-img" />
          <div className="movie-info">
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Text>
                <strong>Genre:</strong> {movie.genre} <br />
                <strong>Release Date:</strong> {movie.release} <br />
                <strong>Ratings:</strong> {movie.rating} <br />
                <strong>Price:</strong> {movie.price}
              </Card.Text>
              <Button variant="primary" as={Link} to={`/book/${movie.name}`}>
  Book Now
</Button>
            </Card.Body>
          </div>
        </Card>
      </Col>
    ))}
      <div style={{ height: "50px", width: "100%" }}></div>
  </Row>
</Container>

    
  );
};

export default MovieList;
