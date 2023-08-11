import styled from 'styled-components';

import myPhoto from '../assets/me.jpg';

const MyPhoto = styled.div`
  width: 200px;
  height: 200px;
  background: url(${myPhoto}) center/cover no-repeat, radial-gradient(circle, transparent 60%, rgba(0,0,255,0.6) 80%, rgba(0,0,128,1) 100%);
  border-radius: 50%; 
  filter: brightness(0.7) contrast(1.2); // Adjust brightness and contrast for effect
  top: 20%; // adjust as required
  left: 20%; // adjust as required
`;


const AboutContainer = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #fff;
    text-align: center;


  }

  p {
    font-size: 1rem;
    text-align: center;
    max-width: 800px;
    color: #9fa7a6;

  }

  img {
    width: 150px;
    border-radius: 50%;
    margin-top: 20px;
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <MyPhoto />
      <h2>Front-End Software Developer</h2>
      <p>Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
    </AboutContainer>
  );
};

export default About;
