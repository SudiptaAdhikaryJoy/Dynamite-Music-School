import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {name, img, artist, price,  duration} = props.service;
    return (
      <Col>
      <Card style={{width:"70%", height:"95%"}}>
        <Card.Img variant="top" src={img} className="img-fluid h-50" />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>Artist: {artist}</Card.Text>
          <Card.Text>Duration: {duration}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <Link to="/features/:id">
            <button className="link-style" >Buy Now</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;