import React from "react";
import Galapagos from "../assets/images/Galapagos.jpg";

function LeadCard() {
  return (
    <div className="container">
      <div className="row">
        <div className="card dark col-lg">
          <img
            className="img-fluid mx-auto img-thumbnail mt-2"
            src={Galapagos}
            alt="Photographing Frigate Birds in the Galapagos"
            id="leadImg"
          />
          <p className="lead text-center text-silver">
            Charlie Puente | Photo credit: Maya Caballero
          </p>
          <hr />
          <h1 className="display-4 text-center text-flight">
            Charlie Puente: Writing Stories and Code
          </h1>
          <p className="lead text-center text-bright">
            
            Born in New York, but raised in China and Japan, I grew up around
            people as diverse as the cultures and places I experienced. With a
            family background in science, medicine, engineering, and old
            fashioned storytelling, I love learning and implementing new
            technology as much as I enjoy writing about it.
          </p>
          <p className="lead text-center text-bright">
            I'm currently a Full Stack developer specializing in TypeScript and Python, with an emphasis on bringing the power of generative AI to bear on solving everyday problems. Feel free to browse my work, or get in touch with me on LinkedIn!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeadCard;
