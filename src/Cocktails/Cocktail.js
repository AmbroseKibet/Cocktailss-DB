import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Cocktail = ({ id, Drink, Category, info, Glass, img }) => {
  return (
    <Card className="cocktail">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{Drink}</Card.Title>
        <Card.Text>{Category}</Card.Text>
        <Card.Text>{info}</Card.Text>
        <Card.Text>{Glass}</Card.Text>
        <Button variant="primary">
          <Link to={`/${id}`} className="text-light more-link">
            Details
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cocktail;
