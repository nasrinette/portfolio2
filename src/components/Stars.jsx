import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation for stars to flicker
const flicker = keyframes`
  0%, 100% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
`;

const StyledStar = styled.div`
  position: absolute;
  background-color: #fff;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  top: ${props => props.$top}%;
  left: ${props => props.$left}%;
  opacity: ${props => props.$opacity};
  border-radius: 50%;
  animation: ${flicker} ${props => props.$duration}s infinite;
  animation-delay: ${props => props.$delay}s;
`;


const StarryBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #0b0a15, #1a0a2b); 
  z-index: -1; // This will ensure that the starry background is below your website content
`;


export default function Stars() {
  const starArray = [];

  for (let i = 0; i < 150; i++) {
    starArray.push({
      id: i,
      size: Math.random() * 2, // Random size up to 2px
      top: Math.random() * 100, // Random position from 0% to 100%
      left: Math.random() * 100, // Random position from 0% to 100%
      opacity: Math.random(), // Random opacity between 0 and 1
      duration: 1 + Math.random() * 3, // Random animation duration between 1s and 4s
      delay: Math.random() * 5 // Random animation delay up to 5s
    });
  }

  return (
    <StarryBackground>
      {starArray.map(star => (
        <StyledStar key={star.id} $size={star.size} $top={star.top} $left={star.left} $opacity={star.opacity} $duration={star.duration} $delay={star.delay} />
      ))}
    </StarryBackground>
  );
}
