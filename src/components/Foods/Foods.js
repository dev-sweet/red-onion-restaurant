import React, { useEffect, useState } from "react";
import "./Foods.css";
import { Container, Nav, Row } from "react-bootstrap";
import Item from "../Item/Item";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const handleBreakfast = (e) => {
    e.preventDefault();
    const filteredData = foods.filter((food) => food.category === "breakfast");
    setFilteredFood(filteredData);
  };
  const handleLunch = (e) => {
    e.preventDefault();
    const filteredData = foods.filter((food) => food.category === "lunch");
    setFilteredFood(filteredData);
  };
  const handleDinner = (e) => {
    e.preventDefault();
    const filteredData = foods.filter((food) => food.category === "dinner");
    setFilteredFood(filteredData);
  };
  const primaryFilteredFoods = (foods) => {
    const filteredData = foods.filter((food) => food.category === "lunch");
    setFilteredFood(filteredData);
  };

  useEffect(() => {
    fetch("./foods.json")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        primaryFilteredFoods(data);
      });
  }, []);
  return (
    <>
      <Container className='py-5'>
        <Nav
          as='ul'
          className='d-flex justify-content-center'
          defaultActiveKey='/lunch'
        >
          <Nav.Item as='li'>
            <Nav.Link
              className='change-food'
              onClick={handleBreakfast}
              href='/breakfast'
            >
              Breakfast
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link
              className='change-food'
              onClick={handleLunch}
              href='/lunch'
            >
              Lunch
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link
              className='change-food'
              onClick={handleDinner}
              href='/dinner'
            >
              Dinner
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row lg={3} md={2} className='gx-5 gy-3 mt-5'>
          {filteredFood.map((food) => (
            <Item key={food.id} item={food} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Foods;
