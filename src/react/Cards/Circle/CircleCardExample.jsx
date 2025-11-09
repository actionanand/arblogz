import React from 'react';
import { CircleCard, CircleCardContainer } from './index';

const CircleCardExample = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#000' }}>
      <h1 style={{ 
        color: '#ff0082', 
        textAlign: 'center', 
        fontSize: '3vw', 
        textTransform: 'uppercase', 
        letterSpacing: '5px', 
        padding: '30px 0' 
      }}>
        Responsive Circle Card Demo
      </h1>
      
      <h2 style={{ 
        color: '#fff', 
        fontSize: '2vw', 
        letterSpacing: '2px' 
      }}>
        Image Demo
      </h2>
      <CircleCardContainer>
        <CircleCard image="https://picsum.photos/300/300?random=1" imageAlt="Random image 1" />
        <CircleCard image="https://picsum.photos/300/300?random=2" imageAlt="Random image 2" />
        <CircleCard image="https://picsum.photos/300/300?random=3" imageAlt="Random image 3" />
        <CircleCard image="https://picsum.photos/300/300?random=4" imageAlt="Random image 4" />
        <CircleCard image="https://picsum.photos/300/300?random=5" imageAlt="Random image 5" />
        <CircleCard image="https://picsum.photos/300/300?random=6" imageAlt="Random image 6" />
      </CircleCardContainer>
      
      <h2 style={{ 
        color: '#fff', 
        fontSize: '2vw', 
        letterSpacing: '2px' 
      }}>
        Text Demo
      </h2>
      <CircleCardContainer>
        <CircleCard title="React" bgColor="#61dafb" />
        <CircleCard title="Vue" bgColor="#42b883" />
        <CircleCard title="Angular" bgColor="#dd0031" />
        <CircleCard title="Svelte" bgColor="#ff3e00" />
        <CircleCard title="Next.js" bgColor="#000000" />
        <CircleCard title="Astro" bgColor="#ff5a03" />
      </CircleCardContainer>
    </div>
  );
};

export default CircleCardExample;
