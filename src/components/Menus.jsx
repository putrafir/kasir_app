import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      {" "}
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{menu.nama} </Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
