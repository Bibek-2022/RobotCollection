import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ imgUrl }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://robohash.org/bibek" />
      <Card.Body>
        <Card.Title className="text-warning bg-dark text-center">
          Card Title
        </Card.Title>
        <Button variant="primary">😍😍😍</Button>
      </Card.Body>
    </Card>
  );
};
