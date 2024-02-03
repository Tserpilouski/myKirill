import React from "react";
import Card from "react-bootstrap/Card";
import CardSection from "./CardSection";
import Accordion from "react-bootstrap/Accordion";
import { formatDate } from "../../utils/date";

const TodayCard: React.FC = () => {
  const mealTimes: string[] = ["Breakfast", "Lunch", "Diner"];
  const dateFormat = formatDate(new Date());

  return (
    <Accordion alwaysOpen defaultActiveKey={["0", "1", "2"]}>
      <Card style={{ width: "22rem" }}>
        <Card.Header>
          <span>{dateFormat}</span>
        </Card.Header>
        {mealTimes.map((meal, index) => (
          <CardSection meal={meal} indexMeal={index} key={index} />
        ))}
      </Card>
    </Accordion>
  );
};

export default TodayCard;
