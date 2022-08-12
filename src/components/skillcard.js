import React from "react";

function SkillCard() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card bg-dark text-white col-lg border border-light">
          <div className="card-header">
            <p className="lead text-center text-white">Skills at a glance</p>
          </div>
          <div className="card-body mx-auto">
            <div className="row d-flex">
              <div className="col-2">
                <i className="fab fa-html5 fa-3x sIcon" />
              </div>
              <div className="col-2">
                <i className="fab fa-css3-alt fa-3x sIcon" />
              </div>
              <div className="col-2">
                <i className="fab fa-react fa-3x sIcon" />
              </div>
              <div className="col-2">
                <i className="fab fa-node fa-3x sIcon" />
              </div>
              <div className="col-2">
                <i className="fab fa-python fa-3x sIcon" />
              </div>
              <div className="col-2">
                <i className="fab fa-js-square fa-3x sIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
