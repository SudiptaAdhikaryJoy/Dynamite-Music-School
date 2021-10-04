import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name, img, artist, price, days} = props.service;
    return (
      <div>
            <div className="row">
              <div className="col-md-6">
            <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Name: {name}</Card.Title>
    <Card.Text>Role: {artist}</Card.Text>
    <Card.Text>Days:{days}</Card.Text>
    <Card.Text>Price: ${price}</Card.Text>
    <Link to="/features">
    <Button variant="primary">Details</Button>
    </Link>
  </Card.Body>
</Card>
          </div>

            </div>
          
        </div>
    );
};

export default Service;