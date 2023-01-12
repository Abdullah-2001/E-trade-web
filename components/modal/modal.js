import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const ModalComp = (props) => {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            {props.title && <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
            </Modal.Header>}
            {props.body && <Modal.Body>{props.body}</Modal.Body>}
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComp