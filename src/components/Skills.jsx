import styled from 'styled-components';
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaGit, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiVisualstudiocode } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 3rem 0;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  text-align: center;
`;

const IntroText = styled.p`
  color: #9fa7a6;  // Grayish color
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  max-width: 800px;  // adjust based on your design preference
  margin: 1rem auto;  // center the content
`;

const LinkedinLink = styled.a`
  color: #f8b400;  // You can adjust this color
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SkillsIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem; // Space between icons
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 2rem;

  }
`;

const SkillIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; // Space between icon and label
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    div {
      font-size: 30px; // adjust as needed
    }
  }
`;



const SkillLabel = styled.p`
  font-size: 1rem;
`;

const Skills = () => {
  return (
    <SkillsSection>
      <IntroText>A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</IntroText>
      <Title>Skills & Experience</Title>
      <Description>
        The main area of my expertise is front-end development (client side of the web).
      </Description> 
      <Description>HTML, CSS, JS, building small and medium web applications with React, cross-platform mobile applications with React Native and Expo, custom plugins, features, animations, and coding interactive layouts. I also have UI/UX designer experience with one of the most popular tools - Figma.
      </Description>   
      <Description>
      Visit my <LinkedinLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</LinkedinLink> for more details.
      </Description> 

    <SkillsIconsContainer>
    <SkillIcon><FaJsSquare size={80} /><SkillLabel>JavaScript</SkillLabel></SkillIcon>
    <SkillIcon><FaReact size={80} /><SkillLabel>React</SkillLabel></SkillIcon>
    <SkillIcon><FaHtml5 size={80} /><SkillLabel>HTML</SkillLabel></SkillIcon>
    <SkillIcon><FaCss3Alt size={80} /><SkillLabel>CSS</SkillLabel></SkillIcon>
    <SkillIcon><SiVisualstudiocode size={80} /><SkillLabel>Visual Studio</SkillLabel></SkillIcon>
    <SkillIcon><FaFigma size={80} /><SkillLabel>Figma</SkillLabel></SkillIcon>
    <SkillIcon><FaGit size={80} /><SkillLabel>Git</SkillLabel></SkillIcon>
    <SkillIcon><FaBootstrap size={80} /><SkillLabel>Bootstrap</SkillLabel></SkillIcon>
</SkillsIconsContainer>
    </SkillsSection>
  );
};

export default Skills;
