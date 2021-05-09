import React from "react";
import Galapagos from "../assets/images/Galapagos.jpg";

function LeadCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="card col-lg">
          <img
            className="img-fluid mx-auto img-thumbnail"
            src={Galapagos}
            alt="Photographing Frigate Birds in the Galapagos"
            id="leadImg"
          />
          <p className="lead text-center text-muted">
            Charlie Puente | Photo credit: Maya Caballero
          </p>
          <hr />
          <h1 className="display-4 text-center">
            Charlie Puente: Writing Stories and Code
          </h1>
          <p className="lead text-center">
            Born in New York, but raised in China and Japan, Charlie grew up
            around people as diverse as the cultures and places he experienced.
            Combined with a family background in science, medicine, technology,
            and old fashioned storytelling, Charlie developed a passion for
            stories that explored the boundaries of what human ingenuity, grit,
            and wanderlust could accomplish. In addition to writing long and
            short fiction, Charlie retains his childhood love of travel, drawn
            to places that may be on the verge of irreversible change.
          </p>
          <p className="lead text-center">
            After graduating from Columbia University's School of Engineering
            coding bootcamp, Charlie now enjoys writing for both machine and
            human audiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeadCard;
