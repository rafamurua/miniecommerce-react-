import React from "react";
import { Row, Col } from "react-bootstrap";

const spacingHeader = {
  marginBottom: '30px',
  fontSize: "25px",
  backgroundColor: 'green',
  color: 'white',
  padding: '10px'
}

export const Header = () => (
  <Row>
    <Col xs={12} style={spacingHeader}>
      <div>Mini Ecommerce</div>
    </Col>
  </Row>
);