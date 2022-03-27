import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { CustomCard } from "./CustomCard";
import { useState } from "react";

export const SearchForm = ({ addToFavList }) => {
  const [name, setName] = useState("");
  //   const [str, setStr] = useState("");
  const [robot, setRobot] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setRobot(name);
    setName("");
    // const { data } = await fetchRobo(name);
    // setStr(name);
    // console.log(data);
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col>
            {/*  <input >*/}
            <Form.Control
              placeholder="Search Your Robot Avatar"
              onChange={handleChange}
              value={name}
              required
            />
          </Col>
          <Col>
            <Button type="submit" variant="outline-warning">
              Search
            </Button>{" "}
          </Col>
        </Row>
      </Form>
      <Row>
        <Col className="mt-5">
          <CustomCard name={robot} fun={addToFavList} />
        </Col>
      </Row>
    </div>
  );
};
