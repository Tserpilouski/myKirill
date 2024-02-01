import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodayPrimaryCard from "../components/cards/TodayPrimaryCard";
import TodaySecondaryCard from "../components/cards/TodaySecondaryCard";
import "../style/today.scss";

const Today: React.FC = () => {
  return (
    <Container className="container">
      <Row md={3}>
        <Col>
          <TodayPrimaryCard />
        </Col>
        <Col>
          <TodaySecondaryCard />
          <TodaySecondaryCard />
          <TodaySecondaryCard />
        </Col>
        <Col>
          <TodaySecondaryCard />
          <TodaySecondaryCard />
          <TodaySecondaryCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Today;
