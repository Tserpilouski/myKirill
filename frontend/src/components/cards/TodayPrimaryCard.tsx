import React from "react";
import Card from "react-bootstrap/Card";
import CardSection from "./CardSection";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

interface CustomToggle {
  children: React.ReactNode;
  eventKey: string;
}

const TodayCard: React.FC = () => {
  function CustomToggle({ children, eventKey }: CustomToggle) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button type="button" onClick={decoratedOnClick}>
        {children}
      </button>
    );
  }

  return (
    <Accordion defaultActiveKey="0">
      <Card style={{ width: "22rem" }}>
        <Card.Header>
          <span>2</span>
          <span>Понедельник</span>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <span>Breakfast</span>
            <CustomToggle eventKey="0">+</CustomToggle>
          </Card.Title>
          <Accordion.Collapse eventKey="0">
            <CardSection />
          </Accordion.Collapse>
        </Card.Body>
        <Card.Body>
          <Card.Title>
            <span>Breakfast</span>
            <CustomToggle eventKey="1">+</CustomToggle>
          </Card.Title>
          <Accordion.Collapse eventKey="1">
            <CardSection />
          </Accordion.Collapse>
        </Card.Body>
      </Card>
    </Accordion>
  );
};

export default TodayCard;
