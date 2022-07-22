import React from "react";

function ContactCard(props) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="card col-lg-8 bg-dark text-white border border-light" id={props.id}>
          <div className="card-header">
          <h1 className="display-4 text-center">Get in touch!</h1>
          </div>
          <p className="lead text-center">Follow me here:</p>

          <a
            className="btn btn-warning cardBtn"
            href="https://github.com/puentebravo"
          >
            <i className="fab fa-github-square fa-lg cIcon"></i> Github
          </a>
          <a
            className="btn btn-warning cardBtn"
            href="https://www.linkedin.com/in/puentematos/"
          >
            <i className="fab fa-linkedin fa-lg cIcon"></i>LinkedIn
          </a>
          <br />
          <p className="lead text-center">...Or contact me directly at:</p>
          <a
            className="btn btn-warning cardBtn"
            href="mailto:puentematos@gmail.com"
          ><i className="fas fa-envelope-square fa-lg cIcon"></i>puentematos@gmail.com</a>
          <br />
          <br />
          <div className="card-footer text-center">
            <p className="lead">
              Looking for a quick, to the point summary? Grab my resume below:
            </p>
            <a className="btn btn-warning cardBtn" href="./documents/charliepuentecv.pdf">CV Download (PDF)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
