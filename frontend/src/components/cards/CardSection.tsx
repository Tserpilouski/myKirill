import React from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/esm/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import NewMealEntry from "../modals/NewMealEntry";

interface CustomToggle {
  children: React.ReactNode;
  eventKey: string;
}

interface CardSectionProps {
  meal: string;
  indexMeal: number;
}

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

const CardSection: React.FC<CardSectionProps> = ({ meal, indexMeal }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [items, setItems] = useState(initialItem);
  const [modalShow, setModalShow] = useState(false);

  function CustomToggle({ children, eventKey }: CustomToggle) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      setIsOpen(!isOpen)
    );

    return (
      <Button type="button" variant="success" onClick={decoratedOnClick}>
        {children}
      </Button>
    );
  }

  const addItem = (itemName: string) => {
    const newItem = { name: itemName, amount: "100 мл", calories: "203 cal" };
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  return (
    <>
      <Card.Body>
        <Card.Title className="header_btn">
          <span>{meal}</span>
          <CustomToggle eventKey={indexMeal.toString()}>
            {isOpen ? "X" : "+"}
          </CustomToggle>
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
            <Button onClick={() => setModalShow(true)} variant="success">
              Add new Item
            </Button>
            <hr />
          </ListGroup>
        </Accordion.Collapse>
      </Card.Body>
      <NewMealEntry
        show={modalShow}
        onHide={() => setModalShow(false)}
        addItem={(itemName: string) => addItem(itemName)}
      />
    </>
  );
};

export default CardSection;
