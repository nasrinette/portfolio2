import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const twinkle = keyframes`
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
`;

const Star = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    100% 50%,
    61% 65%,
    50% 100%,
    39% 65%,
    0% 50%,
    39% 35%
  );
  background-color: #fff;
  animation: ${twinkle} 1.5s infinite alternate;
`;

const TopUIContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 0rem 2rem; 
  @media (min-width: 1024px) {
    padding: 0rem 10rem; 
  }
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #fff;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TopUIContainer>
        <Link 
          to="about" 
          smooth={true}
          duration={500}
        >
          <Star />
        </Link>
        
        <Link 
          to="contact" 
          smooth={true} 
          duration={500}
        >
          <ContactButton>Contact</ContactButton>
        </Link>
      </TopUIContainer>
    </HeaderContainer>
  );
};

export default Header;
