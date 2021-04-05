import React from "react";

function LeadCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="card col-lg">
          <img
            className="img-fluid mx-auto img-thumbnail"
            src="../assets/images/galapagos.jpg"
            alt="Photographing Frigate Birds in the Galapagos"
          />
          <p className="lead text-center text-muted">
            Charlie Puente | Photo credit: Maya Caballero
          </p>
          <hr className="my-4" />
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
            In late 2020, Charlie decided to learn to write for a machine
            audience, and is currently studying programming at Columbia
            University's School of Engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeadCard;
