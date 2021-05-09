import React from "react";

function SkillCard() {
  return (
    <> 
    <div className="row">
      <p className="lead">Skills at a glance</p>
    </div>
    <div className="row">  
      <i className="fab fa-html5 fa-3x sIcon"></i>
      <i className="fab fa-css3-alt fa-3x sIcon" />
      <i className="fab fa-react fa-3x sIcon" />
      <i className="fab fa-node fa-3x sIcon" />
      <i className="fab fa-python fa-3x sIcon" />
      <i className="fab fa-js-square fa-3x sIcon" />
    </div>
    </>
  );
}

export default SkillCard;
