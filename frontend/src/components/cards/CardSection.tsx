import React from "react";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const CardSection: React.FC = () => {
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

  const [items, setItems] = useState(initialItem);

  const addItem = () => {
    const newItem = initialItem[0];
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  return (
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
  );
};

export default CardSection;
