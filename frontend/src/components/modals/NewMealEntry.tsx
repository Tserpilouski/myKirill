import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface PropsMealEntry {
  show: boolean;
  onHide: () => void;
  addItem: () => void;
}

const NewMealEntry: React.FC<PropsMealEntry> = ({ show, onHide, addItem }) => {
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
      <Modal.Body>
        <p>Extra mela name:</p>
        <Button onClick={addItem}>addItem</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewMealEntry;
