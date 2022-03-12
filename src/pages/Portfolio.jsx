import { useState } from 'react';
import Project from '../components/Project';
import projects from '../projects.json';

function Portfolio() {
  const [projectsList] = useState(projects);

  return (
    <>
      <div className="grid grid-calls-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {/* <!-- cards to display projects --> */}
        {projectsList.map((project) => (
          <Project
            key={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            tech={project.tech}
            appLink={project.appLink}
            gitHubLink={project.gitHubLink}
          />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
