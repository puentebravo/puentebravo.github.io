import React, { useState } from "react";
import Modal from "react-bootstrap/Modal"
import resume from "../assets/documents/charliepuentecv.pdf";

function ContactCard(props) {

  const [showModal, setShow] = useState(false);

  const processClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="card col-lg-8 bg-dark text-white" id={props.id}>
          <div className="card-header">
          <h1 className="display-4 text-center">Get in touch!</h1>
          </div>
          <p className="lead text-center">Follow me here:</p>

          <a
            className="btn btn-light cardBtn"
            href="https://github.com/puentebravo"
          >
            <i className="fab fa-github-square fa-lg cIcon"></i> Github
          </a>
          <a
            className="btn btn-light cardBtn"
            href="https://www.linkedin.com/in/puentematos/"
          >
            <i className="fab fa-linkedin fa-lg cIcon"></i>LinkedIn
          </a>
          <br />
          <p className="lead text-center">...Or contact me directly at:</p>
          <a
            className="btn btn-light cardBtn"
            href="mailto:puentematos@gmail.com"
          ><i className="fas fa-envelope-square fa-lg cIcon"></i>puentematos@gmail.com</a>
          <br />
          <br />
          <div className="card-footer text-center">
            <p className="lead">
              Looking for a quick, to the point summary? Grab my resume below:
            </p>
            <button className="btn btn-light cardBtn" onClick={handleShow}>CV Download (PDF)</button>
            <Modal show={showModal} onHide={processClose} {...props} size="lg" centered>
              <Modal.Header className="bg-dark text-white">
                <Modal.Title><h3>Charlie's Resume</h3></Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg-light">
              <embed src={resume} width="100%" height="800px" />
              </Modal.Body>
              <Modal.Footer className="bg-dark">
                <a className="btn btn-light cardBtn" href={resume}>Download</a>
                <button className="btn btn-light cardBtn" onClick={processClose}>Close</button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
