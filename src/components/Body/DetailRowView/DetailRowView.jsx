import React, { useState } from 'react';
import { Button, Modal, Form, Table } from 'react-bootstrap';

const DetailRowView = ({ clearRow, person }) => {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
  }
  const onExited = () => {
    clearRow();
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} onExited={onExited} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>{person.firstName + ' ' + person.lastName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered>
            <tbody>
              <tr>
                <td>FirstName:</td>
                <td>{person.firstName}</td>
              </tr>
              <tr>
                <td>LastName:</td>
                <td>{person.lastName}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>{person.address.streetAddress}</td>
              </tr>
              <tr>
                <td>City:</td>
                <td>{person.address.city}</td>
              </tr>
              <tr>
                <td>State:</td>
                <td>{person.address.state}</td>
              </tr>
              <tr>
                <td>Index:</td>
                <td>{person.address.zip}</td>
              </tr>
              </tbody>
          </Table>
              <Form.Group controlId="ModalForm">
                <Form.Control defaultValue={person.description} readOnly as="textarea" rows="4" />
              </Form.Group>
        </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>
              Close
          </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default DetailRowView;