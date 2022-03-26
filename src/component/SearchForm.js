import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { CustomCard } from "./CustomCard";

export const SearchForm = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Button variant="outline-warning">Search</Button>{" "}
          </Col>
        </Row>
      </Form>
      <Row>
        <Col className="mt-5">
          <CustomCard />
        </Col>
      </Row>
    </div>
  );
};
