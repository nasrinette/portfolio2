import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 5rem 0;
  font-family: 'Poppins', sans-serif;

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  .projects-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .project {
    width: 300px;
    padding: 1rem;
    margin: 1rem;
    background-color: #f5f5f5;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project">
          <img src="project1_image.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of the project.</p>
        </div>
        {/* Repeat for other projects */}
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
