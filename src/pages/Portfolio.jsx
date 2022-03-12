import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Project from '../components/Project';
import projects from '../projects.json';

function Portfolio() {
  const [projectsList] = useState(projects);

  return (
    <>
      <div className="grid grid-calls-1 gap-20 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 mt-8">
        <AnimatePresence>
          {/* <!-- cards to display projects --> */}
          {projectsList.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Project
                key={project.id}
                image={project.image}
                name={project.name}
                description={project.description}
                tech={project.tech}
                appLink={project.appLink}
                gitHubLink={project.gitHubLink}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Portfolio;
