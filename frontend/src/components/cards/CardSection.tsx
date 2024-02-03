import React from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/esm/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

interface CustomToggle {
  children: React.ReactNode;
  eventKey: string;
}

interface CardSectionProps {
  meal: string;
  indexMeal: number;
}

const CardSection: React.FC<CardSectionProps> = ({ meal, indexMeal }) => {
  const initialItem = [
    {
      name: "Чай",
      amount: "100 мл",
      calories: "203 cal",
    },
    {
      name: "Coffe",
      amount: "100 мл",
      calories: "203 cal",
    },
  ];

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

  const [items, setItems] = useState(initialItem);

  const addItem = () => {
    const newItem = initialItem[0];
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  return (
    <Card.Body>
      <Card.Title>
        <span>{meal}</span>
        <CustomToggle eventKey={indexMeal.toString()}>+</CustomToggle>
      </Card.Title>
      <Accordion.Collapse eventKey={indexMeal.toString()}>
        <ListGroup variant="flush">
          <ListGroup.Item className="border-0">
            {items.map((item, index) => (
              <ListGroup horizontal key={index}>
                <ListGroup.Item>{item.name}</ListGroup.Item>
                <ListGroup.Item>{item.amount}</ListGroup.Item>
                <ListGroup.Item>{item.calories}</ListGroup.Item>
              </ListGroup>
            ))}
          </ListGroup.Item>
          <Button onClick={addItem} variant="success">
            Add new Item
          </Button>
        </ListGroup>
      </Accordion.Collapse>
    </Card.Body>
  );
};

export default CardSection;
