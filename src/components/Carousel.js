import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/MovieCarousel.css"; // Import CSS for styling

const MovieCarousel = () => {
  const timestamp = new Date().getTime(); // Unique timestamp

  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img 
          className="carousel-image" 
          src={`https://images.indianexpress.com/2024/01/Aavesham-24012024.jpg?v=${timestamp}`} 
          alt="Movie 1" 
        />
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="carousel-image" 
          src={`https://th.bing.com/th/id/OIP.5Y4VvFJKIVfk_FEJwOsdCgHaEQ?rs=1&pid=ImgDetMain?v=${timestamp}`} 
          alt="Movie 2" 
        />
      </Carousel.Item>

      <Carousel.Item>
        <img 
          className="carousel-image" 
          src={`https://th.bing.com/th/id/OIP.0dEKMoC-puPjFFrH3rE_vAHaEQ?rs=1&pid=ImgDetMain?v=${timestamp}`} 
          alt="Movie 3" 
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default MovieCarousel;
