import React from "react";
import { Button, Card } from "react-bootstrap";

const apiUrl = "https://robohash.org/";
export const CustomCard = ({ name, fun }) => {
  return name ? (
    <Card style={{ width: "18rem" }} className="m-3">
      <Card.Img variant="top" src={apiUrl + name} />
      <Card.Body>
        <Card.Title className="text-warning bg-dark text-center">
          {name}
        </Card.Title>
        <Button variant="warning bg-dark " onClick={() => fun(name)}>
          😍
        </Button>
      </Card.Body>
    </Card>
  ) : (
    ""
  );
};
