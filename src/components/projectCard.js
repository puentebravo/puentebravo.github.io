import React from "react";


function ProjectCard({ projects }) {
  return (
    <div className="container" id={projects.section} key={projects.id}>
      
        <div className="row justify-content-center" >
          <div className="card dark col-lg p-4">
            <img className="card-img" alt="site demo" src={projects.img} />
            <h5 className="card-title text-center text-flight mt-3">{projects.name}</h5>
            <p className="card-text text-bright">{projects.description}</p>
            <p className="card-text text-silver text-center">
              {projects.code}
            </p>
            <hr />
            <div className="row d-flex justify-content-center">
              <a
                className="btn btn-ultra btn-ultra-glow col-lg-6 cardBtn"
                href={projects.github}
              >
                Deployed<i className="fas fa-globe-asia cIcon"></i>  
              </a>
            </div>
            <div className="row d-flex justify-content-center">
              <a
                className="btn btn-ultra btn-ultra-glow col-lg-6 cardBtn"
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
