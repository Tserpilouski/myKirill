import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import CardSection from "./CardSection";
import Accordion from "react-bootstrap/Accordion";
import { formatDate } from "../../utils/date";
import Button from "react-bootstrap/Button";
import AddExtraMeal from "../modals/AddExtraMeal";

const TodayCard: React.FC = () => {
  const mealTimes: string[] = ["Breakfast", "Lunch", "Diner"];
  const dateFormat = formatDate(new Date());
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Accordion alwaysOpen defaultActiveKey={["0", "1", "2"]}>
        <Card style={{ width: "22rem" }}>
          <Card.Header className="header_btn">
            <span>{dateFormat}</span>
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
