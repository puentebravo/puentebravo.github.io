import React from "react";

function ContactCard() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="card col-lg-8">
          <h1 className="display-4">Get in touch!</h1>
          <hr className="my-4" />
          <p className="lead">Follow me here:</p>

          <a
            className="btn btn-dark cardBtn"
            href="https://github.com/puentebravo"
          >
            <i className="fab fa-github-square fa-lg cIcon"></i> Github
          </a>
          <a
            className="btn btn-dark cardBtn"
            href="https://www.linkedin.com/in/puentematos/"
          >
            <i className="fab fa-linkedin fa-lg cIcon"></i>LinkedIn
          </a>
          <br />
          <br />
          <div className="card-footer text-center">
            <p className="lead">
              Looking for a quick, to the point summary? Grab my resume below:
            </p>
            <a className="btn btn-dark cardBtn" href="assets/documents/charliepuentecv.pdf">CV Download (PDF)</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
