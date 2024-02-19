import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import CardSection from "./CardSection";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import AddExtraMeal from "../modals/AddExtraMeal";

interface TodayCardProps {
  currentDay: string;
  activeKey?: string[];
}

const TodayCard: React.FC<TodayCardProps> = ({ currentDay, activeKey }) => {
  const mealTimes: string[] = ["Breakfast", "Lunch", "Diner"];
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Accordion alwaysOpen defaultActiveKey={activeKey}>
        <Card style={{ width: "22rem" }}>
          <Card.Header className="header_btn">
            <span>{currentDay}</span>
            <Button variant="success" onClick={() => setModalShow(true)}>
              +
            </Button>
          </Card.Header>
          {mealTimes.map((meal, index) => (
            <CardSection meal={meal} indexMeal={index} key={index} />
          ))}
        </Card>
      </Accordion>
      <AddExtraMeal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default TodayCard;
