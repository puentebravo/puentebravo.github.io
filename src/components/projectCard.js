import React from "react";


function ProjectCard({ projects, key}) {
  return (
    <div className="container" id="anchorEl">
      
        <div className="row justify-content-center" key={key}>
          <div className="card bg-dark text-white col-lg p-4 border border-light">
            <img className="card-img" alt="site demo" src={projects.img} />
            <h5 className="card-title text-center">{projects.name}</h5>
            <p className="card-text">{projects.description}</p>
            <p className="card-text text-muted text-center">
              {projects.code}
            </p>
            <hr />
            <div className="row">
              <a
                className="btn btn-warning col-lg-12 cardBtn"
                href={projects.github}
              >
                Deployed<i className="fas fa-globe-asia cIcon"></i>  
              </a>
              <a
                className="btn btn-warning col-lg-12 cardBtn"
                href={projects.deployed}
              >
                Github<i className="fab fa-github cIcon"></i>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProjectCard; 

// Github<i className="fas fa-globe-asia cIcon"></i>
//  Deployed<i className="fab fa-github cIcon"></i>  