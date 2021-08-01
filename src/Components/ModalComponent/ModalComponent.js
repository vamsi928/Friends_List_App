//import { Button } from 'bootstrap';
import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = (props) => {
  return (
    <Modal show={props.showModal}>
      <Modal.Header closeButton onClick={props.hideModal}>
        <Modal.Title>Delete Friend</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete {props.name} from your friends list?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant="danger" onClick={props.clickModalButton}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
