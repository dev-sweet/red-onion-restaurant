import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div className='banner text-center'>
      <Container>
        <h1>Best Food Waiting for Your Belly</h1>
        <div className='search-container'>
          <input
            className='search-field'
            type='text'
            placeholder='Search food items'
          />
          <button className='search-btn'>Search</button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
