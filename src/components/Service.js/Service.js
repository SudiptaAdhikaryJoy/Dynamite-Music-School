import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name, img, artist, price, days} = props.service;
    return (
      <Col>
      <Card>
        <Card.Img w-25 variant="top" src={img} className="img-fluid  h-50" />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;