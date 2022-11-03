import React from "react";

function SkillCard() {
  return (
    <section className="container">
      <div className="row justify-content-between">
        <div className="card dark col-lg">
          <div className="card-header">
            <p className="lead text-center text-flight">Skills at a glance</p>
          </div>
          <div className="card-body mx-auto">
            <div className="row d-flex">
              <div className="col-2">
                <i className="fab fa-html5 fa-3x sIcon text-flight" />
              </div>
              <div className="col-2">
                <i className="fab fa-css3-alt fa-3x sIcon text-flight" />
              </div>
              <div className="col-2">
                <i className="fab fa-react fa-3x sIcon text-flight" />
              </div>
              <div className="col-2">
                <i className="fab fa-node fa-3x sIcon text-flight" />
              </div>
              <div className="col-2">
                <i className="fab fa-python fa-3x sIcon text-flight" />
              </div>
              <div className="col-2">
                <i className="fab fa-js-square fa-3x sIcon text-flight" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillCard;
