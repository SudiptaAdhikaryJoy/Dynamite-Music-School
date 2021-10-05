import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Feature = (props) => {
     const {name, img, artist, price,  duration} = props.feature;
    return (
        <Col>
      <Card style={{width:"70%", height:"95%", text:"bold"}}>
        <Card.Img variant="top" src={img} className="img-fluid h-50" />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>Artist: {artist}</Card.Text>
          <Card.Text>Duration: {duration}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <div className="g-2 m-1">
                <Link to="/features/:id">
                  <button className="link-style" >Buy Now</button>
                </Link>
                <Link to="/services">
                    <button className="link-style" >Back</button>
                </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Feature;