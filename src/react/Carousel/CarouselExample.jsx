import React from 'react';
import { Carousel } from './index';

const CarouselExample = () => {
  const images = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg',
      alt: 'Timisoara Regional Business Centre'
    },
    {
      src: 'https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true',
      alt: 'City View'
    },
    {
      src: 'https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg',
      alt: 'Timisoara Street View'
    }
  ];

  return (
    <div>
      <h2>Carousel Example</h2>
      <Carousel images={images} height="600px" />
    </div>
  );
};

export default CarouselExample;
