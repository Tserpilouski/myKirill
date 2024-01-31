import React from "react";
import Card from "react-bootstrap/Card";

const TodaySecondaryCard: React.FC = () => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Header>
        <span>2</span>
        <span>Вторник</span>
      </Card.Header>
      <Card.Body>
        <Card.Title>Breakfast</Card.Title>
        <Card.Title>Breakfast</Card.Title>
        <Card.Title>Breakfast</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default TodaySecondaryCard;
