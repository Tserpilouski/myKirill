import React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import IncrementInputWithMouseWheel from "../IncrementInputWithMouseWheel";
import styles from "../../style/mealmodal.module.scss";

interface PropsMealEntry {
  show: boolean;
  onHide: () => void;
  addItem: (itemName: string) => void;
}

const NewMealEntry: React.FC<PropsMealEntry> = ({ show, onHide, addItem }) => {
  const [itemName, setItemName] = useState("");
  const [inputValue, setInputValue] = useState<number>(0);

  const handleInputNumberChange = (value: number) => {
    setInputValue(value);
    console.log(inputValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };

  const handleAddItem = () => {
    addItem(itemName);
    setItemName("");
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new meal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.box}>
        <p>Extra mela name:</p>
        <input
          type="text"
          placeholder="apple"
          value={itemName}
          onChange={handleInputChange}
        />
        <IncrementInputWithMouseWheel onChange={handleInputNumberChange} />
        <IncrementInputWithMouseWheel onChange={handleInputNumberChange} />
        <Button onClick={handleAddItem}>addItem</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewMealEntry;
