import React from "react";
import Header from "../../components/header";
import ProjectCard from "../../components/projectCard";
import Footer from "../../components/footer";
import projectList from "../utils/projects";
import "./portfolio.css";

function Portfolio() {
  return (
    (<Header />),
    (
      <div className="container" id="anchorEl">
        {projectList.map((projects, index) => (
          <ProjectCard projects={projects} key={index} />
        ))}
      </div>
    ),
    (<Footer />)
  );
}

export default Portfolio;
