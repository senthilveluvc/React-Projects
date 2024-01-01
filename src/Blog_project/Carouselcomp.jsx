import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Blog.css";

export default function Carouselcomp() {
  return (
    <div className="width">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"550px"}
            src="./Blog/flat2.avif"
            alt="Luxury Flats"
          />
          <Carousel.Caption>
            <h5>Luxury Flats</h5>
            <p>
              Experience elegance at its peak, where luxury meets lifestyle in
              every exquisite detail of our opulent flats
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Blog/lvroom.jpg"
            height={"550px"}
            alt="Living Room"
          />
          <Carousel.Caption>
            <h5>Living Room</h5>
            <p>
              Transform your living room into a sanctuary of comfort and style,
              where every moment becomes a celebration of warmth and
              togetherness
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Blog/villa.jpg"
            height={"550px"}
            alt="villa"
          />
          <Carousel.Caption>
            <h5>Independent Villa</h5>
            <p>
              Embrace the epitome of autonomy and exclusivity in our independent
              villas – where luxury and freedom find their perfect address
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
