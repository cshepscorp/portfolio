import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Project from '../components/Project';
import projects from '../projects.json';

function Portfolio() {
  const [projectsList] = useState(projects);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '', height: '100vh' }}>
          <div className="intro">
            <h3>Portfolio</h3>
          </div>
          <div className="guts">
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
        </Box>
      </Container>
    </>
  );
}

export default Portfolio;
