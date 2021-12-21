import React from "react";
import { Col, Row, Button, Badge } from "react-bootstrap";


const styles = {
  fontSize: "20px",
  color: "black",
  
};

const spacing = {
    marginTop: '30px',
    marginBottom: '30px'
}



export const Product = ({ item }) => {
  const { title, image, price } = item;
  return (
    <Col xs={4}>
      <Row>
        <Col xs={8}>
          <div style={styles}>{title}</div>
        </Col>
      </Row>
      <Row >
        <Col xs={12} style={spacing}>
          <img className="img-product" alt="" width={100} src={image}></img>
        </Col>
        <Col xs={4} style={spacing}>
          <Button variant="primary">
            Precio <Badge bg="secondary">{price}</Badge>
            <span className="visually-hidden">$</span>
          </Button>
        </Col>
      </Row>
    </Col>
  );
};