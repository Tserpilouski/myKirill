import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const TodayCard: React.FC = () => {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Header>
        <span>2</span>
        <span>Понедельник</span>
      </Card.Header>
      <Card.Body>
        <Card.Title>Breakfast</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <ListGroup horizontal>
              <ListGroup.Item>Чай</ListGroup.Item>
              <ListGroup.Item>100 мл</ListGroup.Item>
              <ListGroup.Item>203 cal</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <ListGroup horizontal>
              <ListGroup.Item>Чай</ListGroup.Item>
              <ListGroup.Item>100 мл</ListGroup.Item>
              <ListGroup.Item>203 cal</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Title>Lunch</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <ListGroup horizontal>
              <ListGroup.Item>Чай</ListGroup.Item>
              <ListGroup.Item>100 мл</ListGroup.Item>
              <ListGroup.Item>203 cal</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <ListGroup horizontal>
              <ListGroup.Item>Чай</ListGroup.Item>
              <ListGroup.Item>100 мл</ListGroup.Item>
              <ListGroup.Item>203 cal</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Body>
        <Card.Title>Breakfast</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <ListGroup horizontal>
              <ListGroup.Item>Чай</ListGroup.Item>
              <ListGroup.Item>100 мл</ListGroup.Item>
              <ListGroup.Item>203 cal</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <ListGroup horizontal>
              <ListGroup.Item>Чай</ListGroup.Item>
              <ListGroup.Item>100 мл</ListGroup.Item>
              <ListGroup.Item>203 cal</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item>
            <ListGroup horizontal>
              <ListGroup.Item>Чай</ListGroup.Item>
              <ListGroup.Item>100 мл</ListGroup.Item>
              <ListGroup.Item>203 cal</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TodayCard;
