import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Project from '../components/Project';
import projects from '../projects.json';

function Portfolio() {
  const [projectsList] = useState(projects);

  return (
    <div className="bg-white">
      <div className="mx-auto py-24 px-4 grid grid-cols-1 gap-y-8 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-1">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Portfolio
          </h2>
        </div>
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
      </div>
    </div>
  );
}

export default Portfolio;
