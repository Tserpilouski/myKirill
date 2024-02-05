import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface PropsExtraMeal {
  show: boolean;
  onHide: () => void;
}

const AddExtraMeal: React.FC<PropsExtraMeal> = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add extra meal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Extra mela name:</Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddExtraMeal;
