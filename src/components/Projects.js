import React from "react";
import './Projects.css'

const projects = [
  {
    title: "Project 1",
    description: "A project hosted on Heroku.",
    liveLink: "https://warm-shore-84336.herokuapp.com/",
  },
  {
    title: "Movie Randomizer",
    description: "A project that randomly suggests movies.",
    liveLink: "https://cmp75.github.io/Movie-Randomizer/",
  },
  
];

function Project({ project }) {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.liveLink}>View Project</a>
    </div>
  );
}

function Projects() {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </div>
  );
}

export default Projects;
