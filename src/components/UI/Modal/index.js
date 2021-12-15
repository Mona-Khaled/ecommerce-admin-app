// import React from 'react';
// import { Modal, Button } from 'react-bootstrap';
// const NewModal = (props) => {
//     return (
//         <Modal size={props.size} show={props.show} onHide={props.handleClose}>
//             <Modal.Header closeButton>
//                 <Modal.Title>{props.modalTitle}</Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//                 {props.children}
//             </Modal.Body>

//             <Modal.Footer>
//                 {
//                     // if buttons property exists in modal then it's a delete category modal
//                     props.buttons ? props.buttons.map((btn, index) =>
//                         <Button key={index} variant={btn.color} onClick={btn.onClick}>
//                             {btn.label}
//                         </Button>
//                     ) :
//                         // else display original modal
//                         <Button
//                             variant="primary"
//                             {...props}
//                             style={{backgroundColor: "#333"}}
//                             className="btn-sm"
//                             // onClick={props.onClick}
//                             onClick={props.handleClose}
//                         >
//                             Save
//                         </Button>
//                 }
//             </Modal.Footer>
//         </Modal>
//     );
// }

// export default NewModal



import React from "react";
import { Modal, Button } from "react-bootstrap";

/**
 * @author
 * @function Modal
 **/

const NewModal = (props) => {
  return (
    <Modal size={props.size} show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
       {/* if buttons property exists in modal then it's a delete category modal */}
        {props.buttons ? (
          props.buttons.map((btn, index) => (
            <Button key={index} variant={btn.color} onClick={btn.onClick}>
              {btn.label}
            </Button>
          ))     
            // else display original modal
        ) : (
          <Button
            variant="primary"
            {...props}
            style={{ backgroundColor: "#333" }}
            className="btn-sm"
            onClick={props.onSubmit}
          >
            Save
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default NewModal;