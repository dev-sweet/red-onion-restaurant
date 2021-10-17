import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./About.css";
import img1 from "../../images/why-us/img1.png";
import img2 from "../../images/why-us/img2.png";
import img3 from "../../images/why-us/img3.png";
import { FiTruck } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
const About = () => {
  const aboutInfo = [
    {
      title: "Fast Delivery",
      desc: "Keep your systems in sync with autometed web hook based notifications each time link is paid and how we dream about our future",
      img: img1,
      icon: <FiTruck />,
    },
    {
      title: "A Good Auto Responder",
      desc: "Keep your systems in sync with autometed web hook based notifications each time link is paid and how we dream about our future",
      img: img2,
      icon: <BsBell />,
    },
    {
      title: "Home Delivery",
      desc: "Keep your systems in sync with autometed web hook based notifications each time link is paid and how we dream about our future",
      img: img3,
      icon: <FiTruck />,
    },
  ];

  return (
    <Container className='pb-5'>
      <h1>Why you choose us</h1>
      <p className='font-weight-bold'>
        Barton waited twenty always repair in within we do.An delighted
        oftending <br /> curiosity my is washwoods at.Boy prosperous increasing
        surronded.
      </p>
      <Row md={3} className='g-4 mt-5'>
        {aboutInfo.map((about) => (
          <Col key={about.title}>
            <Card className='about-card pb-5'>
              <Card.Img variant='top' src={about.img} />
              <Card.Body className='about-body'>
                <div className='d-flex px-4'>
                  <div>
                    <div className='about-icon'>{about.icon}</div>
                  </div>
                  <div>
                    <Card.Title>{about.title}</Card.Title>
                    <Card.Text className='about-desc mt-3'>
                      {about.desc}
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default About;
