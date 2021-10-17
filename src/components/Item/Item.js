import React from "react";
import { Col } from "react-bootstrap";
import "./Item.css";
const Item = ({ item }) => {
  const { name, desc, price, img } = item;
  console.log(item);
  return (
    <Col>
      <div className='item p-5'>
        <img className='food-img' src={img} alt='' />
        <h5 className='mb-1 mt-3'>{name}</h5>
        <p className='mt-0 mb-3'>{desc}</p>
        <h4>${price}</h4>
        <button className='primary-btn mt-2'>view details</button>
      </div>
    </Col>
  );
};

export default Item;
