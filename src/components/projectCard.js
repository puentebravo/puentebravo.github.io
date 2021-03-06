import React from "react";


function ProjectCard({ projects, key}) {
  return (
    <div className="container" id="anchorEl">
      
        <div className="row" key={key}>
          <div className="col-lg-2"></div>
          <div className="card col-lg-8">
            <img className="card-img" alt="site demo" src={projects.img} />
            <h5 className="card-title text-center">{projects.name}</h5>
            <p className="card-text">{projects.description}</p>
            <p className="card-text text-muted text-center">
              {projects.code}
            </p>
            <hr />
            <div className="row">
              <a
                className="btn btn-dark col-lg-12 cardBtn"
                href={projects.github}
              >
                Github<i className="fas fa-globe-asia cIcon"></i>
              </a>
              <a
                className="btn btn-dark col-lg-12 cardBtn"
                href={projects.deployed}
              >
                Deployed<i className="fab fa-github cIcon"></i>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProjectCard; 
